const elementos =[
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

let tag = elementos.map(elemento => elemento.tag)
let texto = elementos.map(elemento => elemento.texto)

const div_resultado = document.createElement('div')
const resultado = document.querySelector('div')


for( let i = 0; i < tag.length; i++){
    resultado.innerHTML += `<${tag[i]}>${texto[i]}</${tag[i]}>`
}