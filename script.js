function Mostrar() {

    var nome = document.getElementById("nome").value;
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var imc = (peso / (altura * altura) * 10000);
    var imc2 = imc.toFixed(2);

    f1.innerText = (nome);
    f2.innerText = (imc2);

    if (imc < 18.49) {
        f3.innerText = "Muito abaixo do peso!";
    } else if (imc >= 18.5 && imc <= 24.99) {
        f3.innerText = "Abaixo do peso.";
    } else if (imc > 25) {
        f3.innerText = "Acima do peso.";
    } else {
        f3.innerText = "NO PESO";
    }
}