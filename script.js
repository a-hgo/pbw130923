function consulta(){
    const data = new Date();
    const textoData = document.getElementById("data");
    textoData.textContent = data.toLocaleDateString();
    const textoHora = document.getElementById("hora");
    textoHora.textContent = data.toLocaleTimeString();
}