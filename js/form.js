function appendAsterisk(element)
{
    const span = document.createElement("span");
    const sup = document.createElement("sup");
    const p = document.querySelector("#mandatory-fields");
    const color = p.style.color;
    
    span.style.color = color;
    sup.innerText = " *";
    span.append(sup);
    element.append(span);
}

const mandatoryItems = Array.from(document.getElementsByClassName("mandatory"));

mandatoryItems.forEach(appendAsterisk);