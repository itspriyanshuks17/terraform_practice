(function () {
  const notes = window.TERRAFORM_NOTES || [];
  const categories = window.TERRAFORM_CATEGORIES || [];
  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get("id") || "intro";
  const note = notes.find((item) => item.id === requestedId) || notes[0];

  const article = document.getElementById("noteArticle");
  const list = document.getElementById("noteList");
  const title = document.getElementById("noteTitle");
  const summary = document.getElementById("noteSummary");
  const body = document.getElementById("noteBody");
  const topline = document.getElementById("noteTopline");
  const pager = document.getElementById("notePager");

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

  function categoryLabel(id) {
    return (categories.find((category) => category.id === id) || {}).label || id;
  }

  function sectionTitle(section) {
    return section.title ? `<h2>${escapeHtml(section.title)}</h2>` : "";
  }

  function renderSection(section) {
    if (section.type === "lead") {
      return `<section class="article-section">${sectionTitle(section)}<p class="lead">${escapeHtml(section.text)}</p></section>`;
    }

    if (section.type === "grid") {
      return `
        <section class="article-section">
          ${sectionTitle(section)}
          <div class="feature-grid">
            ${section.items.map((item) => `
              <div class="feature-item">
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.text)}</p>
              </div>
            `).join("")}
          </div>
        </section>
      `;
    }

    if (section.type === "callout") {
      return `<section class="article-section"><div class="callout ${escapeHtml(section.tone || "")}">${section.html}</div></section>`;
    }

    if (section.type === "code") {
      return `
        <section class="article-section">
          <div class="code-card">
            <div class="code-title">
              <span>${escapeHtml(section.title || "Code")}</span>
              <button class="copy-btn" data-copy-btn aria-label="Copy code to clipboard">
                <svg viewBox="0 0 16 16" aria-hidden="true"><rect x="5" y="2" width="9" height="11" rx="1.5"/><rect x="2" y="5" width="9" height="11" rx="1.5"/></svg>
                <span>Copy</span>
              </button>
            </div>
            <pre><code>${escapeHtml(section.code)}</code></pre>
          </div>
        </section>
      `;
    }

    if (section.type === "table") {
      return `
        <section class="article-section">
          ${sectionTitle(section)}
          <div class="note-table">
            <table>
              <thead><tr>${section.headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr></thead>
              <tbody>
                ${section.rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}
              </tbody>
            </table>
          </div>
        </section>
      `;
    }

    if (section.type === "flow") {
      return `
        <section class="article-section">
          ${sectionTitle(section)}
          <div class="flow-list">
            ${section.steps.map((step, index) => `
              <div class="flow-step">
                <span class="flow-num">${index + 1}</span>
                <div>
                  <h3>${escapeHtml(step.title)}</h3>
                  <p>${escapeHtml(step.text)}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </section>
      `;
    }

    if (section.type === "list") {
      return `
        <section class="article-section">
          ${sectionTitle(section)}
          <ul class="clean-list">
            ${section.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </section>
      `;
    }

    return "";
  }

  function renderSidebar() {
    if (!list) return;
    list.innerHTML = notes.map((item) => `
      <a class="side-link ${item.id === note.id ? "active" : ""}" href="note.html?id=${encodeURIComponent(item.id)}">
        ${escapeHtml(item.num)} - ${escapeHtml(item.title)}
      </a>
    `).join("");
  }

  function renderPager() {
    if (!pager) return;
    const index = notes.findIndex((item) => item.id === note.id);
    const prev = notes[index - 1];
    const next = notes[index + 1];
    pager.innerHTML = `
      ${prev ? `<a href="note.html?id=${encodeURIComponent(prev.id)}">&lt;- ${escapeHtml(prev.title)}</a>` : "<span></span>"}
      ${next ? `<a href="note.html?id=${encodeURIComponent(next.id)}">${escapeHtml(next.title)} -&gt;</a>` : "<span></span>"}
    `;
  }

  function renderNote() {
    if (!note || !article) return;
    document.title = `${note.title} | Terraform Notes`;
    title.textContent = note.title;
    summary.textContent = note.description;
    topline.innerHTML = `
      <span class="tag violet">${escapeHtml(note.num)}</span>
      <span class="tag amber">${escapeHtml(categoryLabel(note.category))}</span>
      ${note.tags.map(renderTag).join("")}
    `;
    body.innerHTML = note.sections.map(renderSection).join("");
    if (typeof initCopyButtons === "function") initCopyButtons(body);
    renderSidebar();
    renderPager();
  }

  renderNote();
})();
