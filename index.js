const button = document.querySelector('#submit');
const box = document.querySelector('#uname');
const img = document.querySelector('#img');


button.addEventListener('click', (e) => {
    e.preventDefault();
    const str = box.value;
    img.src = `https://github-readme-stats.vercel.app/api/top-langs?username=${str}&show_icons=true&locale=en`
    img.hidden = false;
});

window.onload(button.click());