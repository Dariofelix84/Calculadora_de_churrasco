function calculate() {
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    const carneBovina = (homens * 500) + (mulheres * 300) + (criancas * 200);
    const frango = (homens * 200) + (mulheres * 200) + (criancas * 100);
    const linguica = (homens * 200) + (mulheres * 200) + (criancas * 200);
    const refrigerante = (homens * 300) + (mulheres * 400) + (criancas * 200);
    const cerveja = (homens * 800) + (mulheres * 500);

    document.getElementById('result').innerHTML = `
        <h3>Lista de Produtos</h3>
        <span>Carne Bovina: <strong>${carneBovina}g</strong></span>
        <span>Frango: <strong>${frango}g</strong></span>
        <span>Linguiça: <strong>${linguica}g</strong></span>
        <span>Refrigerante: <strong>${refrigerante}ml</strong></span>
        <span>Cerveja: <strong>${cerveja}ml</strong></span>
    `;
}

function clearList() {
    const inputs = document.querySelectorAll(".input-group input");
    inputs.forEach((input) => {
        input.value = ''
    });

    document.getElementById("result").innerHTML = ''
}
