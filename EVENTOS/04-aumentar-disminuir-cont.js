const aumentar = document.querySelector(".btn-info");
const disminuir = document.querySelector(".btn-danger");
let a = 0
aumentar.addEventListener("click", () => {
    contador.textContent = ++a;
});

disminuir.addEventListener("click", () => {
    contador.textContent = --a;
});
