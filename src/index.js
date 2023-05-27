import "./styles.css";
// Toggle theme function
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

// Event listener for toggle button
const toggleButton = document.getElementById("toggle-btn");
toggleButton.addEventListener("click", toggleTheme);
