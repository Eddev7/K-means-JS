import kmens from './kmens.js'

const grafico = document.querySelector(".grafico");
const info = document.querySelector(".info");

const {listCentroid1, listCentroid2, newCordCentroid1, newCordCentroid2} = kmens();

function createPoint(x, y, color) {
    const point = document.createElement("span");
    point.classList.add("ponto");
    point.style.bottom = `${x}px`
    point.style.left = `${y}px`
    point.style.backgroundColor = color;
    return point;
}

function iniciarGrafico() {

    listCentroid1.forEach(element => {
        const x = element[0] * 40;
        const y = element[1] * 70;
        const newPoint = createPoint(x, y, "red");
        grafico.appendChild(newPoint)
    });

    listCentroid2.forEach(element => {
        const x = element[0] * 40;
        const y = element[1] * 70;
        const newPoint = createPoint(x, y, "blue");
        grafico.appendChild(newPoint)
    });
    const x1 = newCordCentroid1[0] * 40;
    const y1 = newCordCentroid1[1] * 70;
    const newPoint1 = createPoint(x1, y1, "gold");
    grafico.appendChild(newPoint1)

    const x2 = newCordCentroid2[0] * 40;
    const y2 = newCordCentroid2[1] * 70;
    const newPoint2 = createPoint(x2, y2, "gold");
    grafico.appendChild(newPoint2)
}

info.innerHTML = `Centroid1: [ x: ${newCordCentroid1[0]}  |  y:${newCordCentroid1[1]} ]<br>`
info.innerHTML += `Lista do centroid1:<br>`
listCentroid1.forEach((el) => {
    info.innerHTML += `[ x: ${el[0]}  |  y:${el[1]} ]<br>`
})
info.innerHTML += `Centroid2: [ x: ${newCordCentroid2[0]}  |  y:${newCordCentroid2[1]} ]<br>`
info.innerHTML += `Lista do centroid2:<br>`
listCentroid2.forEach((el) => {
    info.innerHTML += `[ x: ${el[0]}  |  y:${el[1]} ]<br>`
})



iniciarGrafico();