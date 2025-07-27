  const toggleBtn = document.getElementById("darkToggle");
  const html = document.documentElement;

  // Load saved theme on page load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    html.classList.add("dark-mode");
    toggleBtn.innerHTML = `<i class="fas fa-sun"></i> Light Mode`;
  }

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isDark = html.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleBtn.innerHTML = isDark ? `<i class="fas fa-sun"></i> Light Mode`  : `<i class="fas fa-moon"></i> Dark Mode`;
  });
}
