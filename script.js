const body = document.getElementById('body');
const slider = document.getElementById('slider');

function darkModeToggle() {
  body.classList.toggle('darkmode');
}


slider.addEventListener('click', darkModeToggle);
