
let add = []
function adicionar(){

    
    
    let num = parseInt(document.getElementById('txtn').value)
    
    if (isNaN(num)){
        window.alert('ERRO! Por favor insira um numero!')
    }else if(num > 100){
        window.alert('Vove digitou um numero maior que o permitido ')
    }else{
        let tab = document.getElementById('tab')
        add.push(num)
        let item = document.createElement('option')
        item.innerText =`o numero ${num} foi adicionado`
        tab.appendChild(item)

        document.getElementById('txtn').value = '';
    }
    document.getElementById('txtn').focus();
   
}

function finalizar() {
    
    if (add.length === 0){
        window.alert('ERRO! Por favor adicione um numero antes de finalizar')
    } else {
    let textoFinal = document.getElementById('txtp')
    let maiorNumero = add[0]
    let menorNumero = add[0]
    let soma = 0
    for (let i in add) {
        soma += add[i]

        if (add[i] > maiorNumero) {
            maiorNumero = add[i];
        }
        if (add[i] < menorNumero) {
            menorNumero = add[i];
        }
    }

        let media = soma / add.length
        textoFinal.innerHTML = `Foram adicionados ao todo ${add.length} números <br>`;
        textoFinal.innerHTML += `O maior número adicionado foi o ${maiorNumero} <br>`
        textoFinal.innerHTML += `O menor número adicionado foi o ${menorNumero} <br>`
        textoFinal.innerHTML += `A soma de tudo deu ${soma} <br>`
        textoFinal.innerHTML += `A media de tudo deu ${media.toFixed(2)} <br>`
        
        
}}