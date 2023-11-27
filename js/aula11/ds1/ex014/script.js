
function carregar() {
let msg = document.getElementById('msg')
let img = document.getElementById('img')
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `agora sao ${hora} horas`
if (hora <= 12) {
    img.src = 'manha.jpg'
    document.body.style.background = '#E0E1E3'

} else if (hora >= 13 && hora <= 18) {
    img.src= 'tarde.jpg'
    document.body.style.background = '#FCC99B'

}else {
    img.src = 'noite.jpg'
    document.body.style.background = '#101028'
}
}