document.querySelectorAll(".mandatory").forEach(element => {
    const span = document.createElement("span");
    const sup = document.createElement("sup");
    const color = document.querySelector("#mandatory-fields").style.color;
    
    span.style.color = color;
    sup.innerText = " *";
    span.append(sup);
    element.append(span);
})