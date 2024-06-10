function calculate() {
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    const carneBovina = (homens * 500) + (mulheres * 300) + (criancas * 200);
    const frango = (homens * 200) + (mulheres * 200) + (criancas * 100);
    const linguica = (homens * 200) + (mulheres * 200) + (criancas * 200);
    const refrigerante = (homens * 300) + (mulheres * 400) + (criancas * 200);
    const cerveja = (homens * 800) + (mulheres * 500);

    document.getElementById('resultado').innerHTML = `
        <h3>Lista de Produtos</h3>
        <span style="font-size: 15px;">Carne Bovina: <strong style="font-size:16px;">${carneBovina}g</strong></span>
        <span style="font-size: 15px;">Frango: <strong style="font-size: 16px;">${frango}g</strong></span>
        <span style="font-size: 15px;">Linguiça: <strong style="font-size: 16px;">${linguica}g</strong></span>
        <span style="font-size: 15px;">Refrigerante: <strong style="font-size: 16px;">${refrigerante}ml</strong></span>
        <span style="font-size: 15px;">Cerveja: <strong style="font-size: 16px;">${cerveja}ml</strong></span>
    `;
}

function clearList() {
    const inputs = document.querySelectorAll(".input-group input");
    inputs.forEach((input) => {
        input.value = ''
    });

    document.getElementById("resultado").innerHTML = ''
}
