let fas = document.querySelectorAll(".fas");
let tab = document.querySelectorAll(".tab");
let appear = document.querySelectorAll(".appear");

for (let index = 0; index < tab.length; index++) {
  tab[index].addEventListener("click", function (e) {
    appear[index].classList.toggle("show");

    if (fas[index].classList.contains("fa-plus")) {
      fas[index].classList.remove("fa-plus");
      fas[index].classList.add("fa-minus");
    } else {
      fas[index].classList.remove("fa-minus");
      fas[index].classList.add("fa-plus");
    }
  });
}
