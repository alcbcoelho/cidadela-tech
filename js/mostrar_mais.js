function MostrarMais() {
    const pCells = document.getElementsByClassName("hidden");
    const button = document.getElementById("button-container");

    for (let i = 0; i < pCells.length; i++)
    {
        pCells[i].style.display = 'block';
    }
    button.innerHTML = "";
}