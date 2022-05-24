import "../style.css";

/* const setTheme = theme => document.documentElement.className = theme;

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);

  document.documentElement.className = themeName;
}

//toggle between light and dark
function toggleTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    setTheme('light');
  }
  else {
    setTheme('dark');
  }
}

//invoke function on initial load
(function () {
  if (localStorage.getItem('theme') === 'dark') {
    setTheme('dark');

    document.getElementById('slider').checked = false;
  } else {
    setTheme('light');

    document.getElementById('slider').checked = true;
  }
})();


 */
function SwitchTheme() {

  var element = document.querySelector("body");
  element.classList.toggle("dark-mode");

  var elementB = document.querySelector("header");
  elementB.classList.toggle("nav-dark-mode");


  var x = document.getElementById("Sun");
  var y = document.getElementById("Moon");

     if (x.style.display === "none") {
       x.style.display = "block";
       y.style.display = "none";
     } 

     else {
       x.style.display = "none";
       y.style.display = "block";
     }

     console.log("VarSampleVal")
}
