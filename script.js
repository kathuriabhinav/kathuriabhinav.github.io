const body = document.body;
const icon = document.querySelector('#darkToggle i');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
  icon.classList.replace('fa-moon', 'fa-sun');
}

document.getElementById('darkToggle').onclick = () => {
  body.classList.toggle('dark');
  icon.classList.add('rotate');

  setTimeout(() => icon.classList.remove('rotate'), 400);

  if (body.classList.contains('dark')) {
    icon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  }
};
