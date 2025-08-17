const elButtton = document.getElementById("button")
const elFlash = document.getElementById("flash")
const elMoon = document.getElementById("moon")

elMoon.addEventListener("click", () => {
    document.body.classList.toggle("dark")
} )

document.addEventListener("mousemove", (e) => {
    const {clientX, clientY} = e

    elFlash.style.cssText = `
    left: ${clientX}px;
    top: ${clientY}px;
    `;
});