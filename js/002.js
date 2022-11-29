/*
arquivos js externos*/

document.write("Olá mundo!!!")
console.log("Outro olá!!!")// aparece na area d desenvolvedor
//alert("Olá Mundo com alerta")

let mensagem = "Minha Mensagem"
let mensagem2 = 'Outra Mensagem'
let meuPeso = 85.5
let minhaAltura = 1.85
let minhaIdade = 40
let ehDoador = true
let teste = null

/* criar constant e atribuir valor */
const PI = 3.1415
const TAXA =0.5

teste = "Algum Conteúdo"

/*escrever o conteudo de variaveis e constantes
document.write(mensagem)
document.write(mensagem2)
document.write(meuPeso)
document.write(minhaAltura)
document.write(minhaIdade)
document.write(ehDoador)
document.write(teste)
document.write(PI)
document.write(TAXA) 

*/
 /*escreva o conteudo de variaveis e constantes concatenada ou utilizando templeit strem */
document.write("<p> mensagem" + mensagem + "</p>")

document.write(`mensagem2: ${mensagem2}`)

document.write("<p>Peso:" + meuPeso + "Kg </p>")

document.write(`Altura: ${minhaAltura} m`)

document.write("<p> Idade" + mensagem + " Anos</p>")

document.write(`Doador?: ${ehDoador}`)

document.write("<p> Teste:" + teste + "</p>")

document.write("<p> PI" + PI + "</p>")

document.write("<p> TAXA" + TAXA + "</p>")