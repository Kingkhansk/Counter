let count = 0;
const num = document.getElementById("num");

function update() {
  num.textContent = count;
  num.style.transform = "scale(1.1)";
  setTimeout(() => num.style.transform = "scale(1)", 150);
}

function plus() {
  count++;
  update();
}

function minus() {
  count--;
  update();
}

function reset() {
  count = 0;
  update();
}
