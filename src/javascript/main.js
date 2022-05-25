/* import "../style.css"; */

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
document.querySelector(".btn").addEventListener("click", function() {
  if(document.body.classList.contains("light")){
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }else{
    document.body.classList.add("light");
    document.body.classList.remove("dark")
  }
}
)