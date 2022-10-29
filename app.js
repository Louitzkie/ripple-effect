const btns = document.querySelectorAll(".ripple");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const buttonLeft = e.target.offsetLeft;
    const buttonTop = e.target.offsetTop;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.left = xInside + "px";
    circle.style.top = yInside + "px";
    btn.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
