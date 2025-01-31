import './style.css'


// Check if user prefers dark mode
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Apply dark mode if preferred
if (prefersDarkMode) {
  document.body.classList.add('dark-mode');
  document.querySelector(".toggle-img").setAttribute("src", "sun.svg")
}

// Toggle manually (if needed)
const toggleButton = document.getElementById('dark-mode-toggle');
const toggleIMG = document.querySelector(".toggle-img");
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(toggleIMG.getAttribute("src") === "sun.svg"){
    toggleIMG.setAttribute("src", "moon.svg")
  }else{
    toggleIMG.setAttribute("src", "sun.svg")
  }
});

const nowUTC = new Date().toUTCString();
document.querySelector(".time").innerHTML= nowUTC;