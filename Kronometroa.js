function erlojua_Eguneratu() {
    const oraingo_Denbora = new Date();
    const orduak = String(oraingo_Denbora.getHours()).padStart(2, "0");
    const minutuak = String(oraingo_Denbora.getMinutes()).padStart(2, "0");
    const segundoak = String(oraingo_Denbora.getSeconds()).padStart(2, "0");
    document.getElementById("erlojua").textContent = `${orduak}:${minutuak}:${segundoak}`;
}

setInterval(erlojua_Eguneratu, 1000);

let denbora = 0; // segundotan
let interbaloa = null;
const cronometro = document.getElementById("kronometroa");

function kronometroa_Eguneratu() {
    const orduak = String(Math.floor(denbora / 3600)).padStart(2, "0");
    const minutuak = String(Math.floor((denbora % 3600) / 60)).padStart(2, "0");
    const segundoak = String(denbora % 60).padStart(2, "0");
    cronometro.textContent = `${orduak}:${minutuak}:${segundoak}`;
}

function kronometroa_Abiarazi() {
    if (interbaloa) return; // Esto evita crear un timer de más si ya hay uno funcionando.
    interbaloa = setInterval(() => {
        denbora += 2;
        kronometroa_Eguneratu();
    }, 500);
}

function kronometroa_Gelditu() {
    clearInterval(interbaloa);
    interbaloa = null;
}

function kronometroa_Berrabiarazi() {
    denbora = 0;
    kronometroa_Eguneratu();
}

document.getElementById("abiarazi").addEventListener("click", kronometroa_Abiarazi);
document.getElementById("gelditu").addEventListener("click", kronometroa_Gelditu);
document.getElementById("berrabiarazi").addEventListener("click", kronometroa_Berrabiarazi);

document.getElementById("aukeratutako_Denbora").addEventListener("change", (e) => {
    const valor = parseInt(e.target.value);
    if (!isNaN(valor) && valor >= 0) {
        denbora = valor;
        kronometroa_Eguneratu();
    }
});
