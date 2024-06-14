function calculate() {
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    const carneBovina = (homens * 500) + (mulheres * 300) + (criancas * 200);
    const carneBovinaFormatada = carneBovina < 1000 ? `${carneBovina}g` : `${carneBovina / 1000} kg`

    const frango = (homens * 200) + (mulheres * 200) + (criancas * 100);
    const frangoFormatada = frango < 1000 ? `${frango}g` : `${frango / 1000} kg`

    const linguica = (homens * 200) + (mulheres * 200) + (criancas * 200);
    const linguicaFormatada = linguica < 1000 ? `${linguica}g` : `${linguica / 1000} kg`

    const refrigerante = (homens * 300) + (mulheres * 400) + (criancas * 200);
    const refrigeranteFormatado = refrigerante < 1000 ? `${refrigerante}ml` : `${refrigerante / 1000} litros` 

    const cerveja = (homens * 800) + (mulheres * 500);
    const cervejaFormatada = cerveja < 1000 ? `${cerveja}ml` : `${cerveja / 1000} litros`

        document.getElementById('result').innerHTML = `
        <h3>Lista de Produtos</h3>
        <span>Carne Bovina: <strong>${carneBovinaFormatada}</strong></span>
        <span>Frango: <strong>${frangoFormatada}</strong></span>
        <span>Linguiça: <strong>${linguicaFormatada}</strong></span>
        <span>Refrigerante: <strong>${refrigeranteFormatado}</strong></span>
        <span>Cerveja: <strong>${cervejaFormatada}</strong></span>
    `;
}

function clearList() {
    const inputs = document.querySelectorAll(".input-group input");
    inputs.forEach((input) => {
        input.value = ''
    });

    document.getElementById("result").innerHTML = ''
}
