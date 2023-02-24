const body = document.querySelector('body');
const sun = document.querySelector('#sun');
const moon = document.querySelector('#moon');

sun.addEventListener("click", darkOn);
moon.addEventListener("click", darkOff);

function darkOn () {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    sun.style.display = "none";
    moon.style.display = "block";
    moon.style.color = "white";
}

function darkOff () {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    sun.style.display = "block";
    moon.style.display = "none";
}