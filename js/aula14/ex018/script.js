function tabuada(){
    let num1 = parseInt(document.getElementById('txtn').value)
    let tab = document.getElementById('tab')
    tab.innerHTML = '';
    
    if (isNaN(num1) || num1 == 0){
        window.alert9('Erro! Por favor, insira todos os dados corretamente.')
    }else{
        let i = 1
        while (i <= 10) {
            let item = document.createElement('option')
            item.innerText = `${num1} x ${i} = ${num1 * i}`
            tab.appendChild(item)
            i++
        }
    }
}