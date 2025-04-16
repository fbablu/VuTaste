export function initializeSearchModal() {
  const searchBtn = document.getElementById("search-btn");
  const modal = document.getElementById("search-modal");
  const closeBtn = document.getElementById("close-btn");
  const searchInput = document.getElementById("search-input");
  const results = document.getElementById("results");

  function openModal() {
    modal.classList.remove("hidden");
    setTimeout(() => searchInput.focus(), 100);
  }

  function closeModal() {
    modal.classList.add("hidden");
    searchInput.value = "";
    results.innerHTML = `<div class="empty-state">Start typing to search...</div>`;
  }

  searchBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openModal();
    } else if (e.key === "Escape") {
      closeModal();
    }
  });

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    if (!query) {
      results.innerHTML = `<div class="empty-state">Start typing to search...</div>`;
      return;
    }

    const sampleResults = [1, 2, 3]
      .map(
        (i) => `
      <button class="result-item">
        <span class="material-icons">search</span>
        <div>
          <div class="result-item-title">Sample Result ${i}</div>
          <div class="result-item-desc">Sample description...</div>
        </div>
      </button>`,
      )
      .join("");

    results.innerHTML = sampleResults;
  });
}
