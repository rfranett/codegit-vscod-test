//criar objeto
let pessoa = {
    nome : 'robson',
    idade : 48,
    peso : 80.5,
    altura : 1.75,
    doador : false,
}

let produtos ={
    descricao :[],
    preco : [],
}

const carro ={
    marcas : ['mercedes', 'aud','maseratt'],
    modelos : ['c200', 'tt', 'mc20'],
    ano : [2021, 2019, 2017]
}

//como acessar uma propriedade usando.
/*
pessoa.nome
pessoa.idade
pessoa.peso
pessoa.altura
 */

//acessar propriedade usando ['']
/*
pessoa['nome']
pessoa['idade']
pessoa['peso']
pessoa['altura'] 
*/

// operacoes imc = peso / (altura * altura)
let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

// .tofixed(x)
//limita o numero de casas decimais
console.log("imc" + imc.toFixed(2))

//alterar e atualizar valores de propriedades
//pessoa.nome ="robson Alves"
//produtos.descricao =['arroz']
//produtos.preco = ['4.99]

//usando spreed operator
//produtos.descricao =[...produtos.descriccao, 'feijão']
//produtos.preco = [...produtos.preco, 9.99, 4.79]

//usando spreed operator em objetos const
carro.marcas = [...carro.marcas, 'wv']
carro.modelos = [...carro.modelos, 'fusca']
carro.ano = [...carro.ano, '1977']

