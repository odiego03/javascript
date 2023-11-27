function contagem() {
    let num1 = parseInt(document.getElementById('ini').value)
    let num2 = parseInt(document.getElementById('fim').value)
    let nump = parseInt(document.getElementById('pas').value)
    let res = document.getElementById('res')
    res.innerHTML = ''
    if (isNaN(num1) || isNaN(num2) || isNaN(nump) || num1 === 0 || num2 === 0 || nump === 0 || nump < 0)  {
        window.alert('Erro! Por favor, insira todos os dados corretamente.');
    } else {
        if (num1 < num2) {
        for (let i = num1; i <= num2; i += nump) {
            res.innerHTML += `\u{1F449}${i} `;
        } } else if (num1 > num2) {
            for (let i = num1; i >= num2; i -= nump) {
                res.innerHTML += `\u{1F449}${i} `;
        }}
        res.innerHTML += `\u{1F3C1}`;
    }
}
