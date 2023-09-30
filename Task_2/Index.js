const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const random = document.querySelector(".random-button");
const body = document.querySelector("#gradient"); // Changed the selector to use the ID

function setGradient() {
    console.log("setGradient");
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = `${body.style.background}`;
}

function randomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 16).toString(16); // Use base 16 for hexadecimal
    }
    return color;
}

function setRandomColor() {
    console.log("color1 , color2 ", color1.value, color2.value);
    let c1 = randomColor(), c2 = randomColor();
    color1.value = c1;
    color2.value = c2;
    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", setRandomColor);
