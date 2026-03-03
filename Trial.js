
  const toggleBtn = document.getElementById("theme-toggle");

  // Check localStorage for user preference
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "🌙";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    toggleBtn.textContent = isDark ? "🌙" : "🌞";

    // Save user preference
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

