const elementos = [
    {tag: 'p', texto: 'texto1'},
    {tag: 'div', texto: 'texto2'},
    {tag: 'section', texto: 'texto3'},
    {tag: 'footer', texto: 'texto4'},
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++ ){
    let {tag, texto} = elementos[i]
    let tagcri = document.createElement(tag)
    let textocri = document.createTextNode(texto)

    tagcri.appendChild(textocri)
    div.appendChild(tagcri)

}

container.appendChild(div)
