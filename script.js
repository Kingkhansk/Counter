i = 0;
pl = document.getElementById("num");

function plus() {
 i++;
 pl.innerHTML = i;
}

function minus() {
 i--;
 pl.innerHTML = i;
}

function reset() {
 i = 0;
 pl.innerHTML = "0";
}
