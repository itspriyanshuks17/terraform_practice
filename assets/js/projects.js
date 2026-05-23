(function () {
  const projects = window.TERRAFORM_PROJECTS || [];
  const grid = document.getElementById("projectGrid");
  const details = document.getElementById("projectDetails");

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function tagMarkup(tags) {
    return tags.map((tag, index) => {
      const tone = index % 3 === 1 ? " violet" : index % 3 === 2 ? " amber" : "";
      return `<span class="tag${tone}">${escapeHtml(tag)}</span>`;
    }).join("");
  }

  function renderGrid() {
    if (!grid) return;
    grid.innerHTML = projects.map((project) => `
      <a class="project-card" href="#${escapeHtml(project.id)}">
        <div class="project-level">${escapeHtml(project.level)}</div>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.description)}</p>
        <div class="tag-row">${tagMarkup(project.tags)}</div>
        <span class="arrow">-&gt;</span>
      </a>
    `).join("");
  }

  function renderDetails() {
    if (!details) return;
    details.innerHTML = projects.map((project) => `
      <article class="project-detail" id="${escapeHtml(project.id)}">
        <div class="project-level">${escapeHtml(project.level)}</div>
        <h2>${escapeHtml(project.title)}</h2>
        <p class="lead">${escapeHtml(project.description)}</p>
        <div class="project-meta">${tagMarkup(project.tags)}</div>
        <div class="resource-links">
          <a href="${escapeHtml(project.note)}">Open project note</a>
          ${project.paths.map((path) => `<a href="${escapeHtml(path)}">${escapeHtml(path)}</a>`).join("")}
        </div>
      </article>
    `).join("");
  }

  renderGrid();
  renderDetails();
})();
