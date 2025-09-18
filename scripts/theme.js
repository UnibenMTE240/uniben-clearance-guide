const toggleBtn = document.querySelectorAll(".dark-toggle-btn");
const html = document.documentElement;

// Load saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  html.classList.add("dark-mode");
  toggleBtn.forEach(toggleBtn => {
    toggleBtn.innerHTML = `<i class="fas fa-sun"></i>`;
    toggleBtn.setAttribute('aria-label', 'Switch to light mode');
    toggleBtn.setAttribute('title', 'Switch to light mode');
  });

}

if (toggleBtn) {
  toggleBtn.forEach(toggleBtn => {
    toggleBtn.addEventListener("click", () => {
      const isDark = html.classList.toggle("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");

      if (isDark) {
        toggleBtn.innerHTML = `<i class="fas fa-sun"></i>`;
        toggleBtn.setAttribute('aria-label', 'Switch to light mode');
        toggleBtn.setAttribute('title', 'Switch to light mode');
      } else {
        toggleBtn.innerHTML = `<i class="fas fa-moon"></i>`;
        toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
        toggleBtn.setAttribute('title', 'Switch to dark mode');
      }
    });
  });

}
