let i = 10;

document.querySelector("button.no1").addEventListener("click", function () {
  if (i > 0) {
    i--;
    document.querySelector(".num").textContent = i;
  }
});

document.querySelector("button.no2").addEventListener("click", function () {
  i++;
  document.querySelector(".num").textContent = i;
});