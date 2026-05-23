(function () {
  const notes = window.TERRAFORM_NOTES || [];
  const categories = window.TERRAFORM_CATEGORIES || [];
  const catalog = document.getElementById("notesCatalog");
  const searchInput = document.getElementById("searchInput");
  const filterBar = document.getElementById("filterBar");
  const filterButtons = filterBar ? Array.from(filterBar.querySelectorAll(".filter-btn")) : [];
  const visibleCount = document.getElementById("visibleCount");
  const statNotes = document.getElementById("statNotes");
  const noResults = document.getElementById("noResults");
  const noResultsQuery = document.getElementById("noResultsQuery");
  let activeCategory = "all";

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderTag(tag, index) {
    const tone = index % 3 === 1 ? " violet" : index % 3 === 2 ? " amber" : "";
    return `<span class="tag${tone}">${escapeHtml(tag)}</span>`;
  }

  function renderCatalog() {
    if (!catalog) return;
    catalog.innerHTML = categories.map((category) => {
      const sectionNotes = notes.filter((note) => note.category === category.id);
      return `
        <section class="section" data-section="${escapeHtml(category.id)}">
          <div class="section-header">
            <span class="section-kicker">${escapeHtml(category.kicker)}</span>
            <h2 class="section-title">${escapeHtml(category.label)}</h2>
            <span class="section-count">${sectionNotes.length} ${sectionNotes.length === 1 ? "note" : "notes"}</span>
          </div>
          <div class="notes-grid">
            ${sectionNotes.map((note) => `
              <a class="note-card" href="note.html?id=${encodeURIComponent(note.id)}" data-cat="${escapeHtml(note.category)}" data-search="${escapeHtml([note.title, note.description, note.search, note.tags.join(" ")].join(" ").toLowerCase())}">
                <div class="note-num">${escapeHtml(note.num)}</div>
                <h3 class="note-title">${escapeHtml(note.title)}</h3>
                <p class="note-desc">${escapeHtml(note.description)}</p>
                <div class="tag-row">${note.tags.map(renderTag).join("")}</div>
                <span class="arrow">-&gt;</span>
              </a>
            `).join("")}
          </div>
        </section>
      `;
    }).join("");
  }

  function updateVisibility() {
    const query = (searchInput ? searchInput.value : "").toLowerCase().trim();
    let visible = 0;

    catalog.querySelectorAll(".section").forEach((section) => {
      let sectionVisible = false;
      section.querySelectorAll(".note-card").forEach((card) => {
        const categoryMatches = activeCategory === "all" || card.dataset.cat === activeCategory;
        const textMatches = !query || (card.dataset.search || "").includes(query);
        const show = categoryMatches && textMatches;
        card.classList.toggle("hidden", !show);
        if (show) {
          sectionVisible = true;
          visible += 1;
        }
      });

      section.classList.toggle("hidden", !sectionVisible);
      const count = section.querySelectorAll(".note-card:not(.hidden)").length;
      const countEl = section.querySelector(".section-count");
      if (countEl) countEl.textContent = `${count} ${count === 1 ? "note" : "notes"}`;
    });

    if (visibleCount) visibleCount.textContent = visible;
    if (noResults) noResults.style.display = visible === 0 ? "block" : "none";
    if (noResultsQuery) noResultsQuery.textContent = query || activeCategory;
  }

  renderCatalog();
  if (statNotes) statNotes.textContent = notes.length;
  if (visibleCount) visibleCount.textContent = notes.length;

  if (searchInput) searchInput.addEventListener("input", updateVisibility);
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      activeCategory = button.dataset.cat || "all";
      updateVisibility();
    });
  });
})();
