
const form = document.querySelector('#form')



function calcular() {
    const pesoi = document.querySelector('#peso');
    const alti = document.querySelector('#altura');
    const altura = parseFloat(alti.value);
    const peso = parseFloat(pesoi.value);

    if (isNaN(peso) || isNaN(altura) || peso == 0 || altura == 0 || altura > 2.20 || peso > 300) {
        alert('ERRO! Por favor, adicione os dados de maneira correta.');
    } else {
        const imc = calcImc(peso, altura);
        exibir(imc);
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    calcular();
});

function calcImc(peso, altura) {
    return peso / (altura * altura);
}

const res = document.getElementById('res');

function exibir(imc) {
    if (imc <= 18.5) {
        res.innerText = `Seu IMC é de ${imc.toFixed(2)} portanto você está abaixo do peso recomendado.`;
        res.style.background = '#DF1A21'
    } else if (imc <= 24.9) {
        res.innerText = `Seu IMC é de ${imc.toFixed(2)} portanto você está no peso recomendado.`;
        res.style.background = '#1D8C28'
    } else if (imc <= 29.9) {
        res.innerText = `Seu IMC é de ${imc.toFixed(2)} portanto você está com sobre-peso.`;
        res.style.background = 'rgba(255, 224, 46, 0.663)'
    } else if (imc <= 34.9) {
        res.innerText = `Seu IMC é de ${imc.toFixed(2)} portanto você está com obesidade 1°`;
        res.style.background ='rgba(235, 169, 64,  0.663)'
    } else if (imc <= 39.9) {
        res.innerText = `Seu IMC é de ${imc.toFixed(2)} portanto você está com obesidade 2°`;
        res.style.background =' rgba(235, 66, 74, 0.663)'
    } else {
        res.innerText = `Seu IMC é de ${imc.toFixed(2)} portanto você está com obesidade 3°`;
        res.style.background ='rgb(237, 28, 39,  0.663)'
    }
    res.style.marginTop= '5px'
    res.style.textAlign = 'center';
    res.style.borderRadius = '3px';
    res.style.color = 'white';
    res.style.fontFamily = 'bolder';
   
}



