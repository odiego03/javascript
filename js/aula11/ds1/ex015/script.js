function verificar() {
   
    let res = document.getElementById('res')
    let data = new Date()
    let ano = data.getFullYear()
    let anoNasc = document.getElementById('txtano')
    if (anoNasc.value.length == 0 || Number(anoNasc.value) > ano) {window.alert ('ERRO por favor verifique se seus dados foram inseridos corretamente')}else{   
        let idade = ano - Number(anoNasc.value)   
        let sex = document.getElementsByName ('radsex')
        let genero = ''
        if (sex[0].checked){genero = 'Masculino'}else if (sex[1].checked) {genero = 'Feminino'}

        if (idade <= 3) {res.innerText = `voce é um Bebê do sexo ${genero} de ${idade} anos de idade`}
        else if (idade <= 12 ) {res.innerText = `voce é uma Criança do sexo ${genero} de ${idade} anos de idade`}
        else if (idade <= 17 && genero == 'Feminino') {res.innerText = `voce é uma adolescente do sexo ${genero} de ${idade} anos de idade`}
        else if (idade <= 17 && genero == 'Masculino') {res.innerText = `voce é um adolescente do sexo ${genero} de ${idade} anos de idade`}
        else if (idade <= 23 && genero == 'Feminino'){res.innerText = `voce é uma jovem adulta do sexo ${genero} de ${idade} anos de idade`}
        else if (idade <= 23 && genero == 'Masculino'){res.innerText = `voce é um jovem adulto do sexo ${genero} de ${idade} anos de idade`}
        else if (idade <= 59  && genero == 'Feminino') {res.innerText = `voce é uma adulta do sexo ${genero} de ${idade} anos de idade`}
        else if (idade <= 59  && genero == 'Masculino') {res.innerText = `voce é um adulto do sexo ${genero} de ${idade} anos de idade`}
        else if (idade <= 130 && genero == 'Feminino'){res.innerText = `voce é uma idosa do sexo ${genero} de ${idade} anos de idade`}
        else if (idade <= 130 && genero == 'Masculino'){res.innerText = `voce é um idoso do sexo ${genero} de ${idade} anos de idade`} else{  res.innerText = 'ou voce esta mentindo sua idade ou vc é a poha de um DEUS'}
    }
}