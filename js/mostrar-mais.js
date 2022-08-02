function MostrarMais() {
    document.querySelector("button").remove();
    document.querySelectorAll(".hidden").forEach(cell => cell.classList.remove("hidden"));
}