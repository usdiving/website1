// ============================================================
// WeLive2Inspire.com
// Vanilla JavaScript only (no frameworks, per project rules).
// ============================================================

// Auto-fill the current year in the footer.
document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
