/* arquivos js aula 04 array */

let produtos = ['arroz','feijao','farinha']
var codigo = Array(10, 20, 30)
var test = Array(10)
test[0] = "Oi"
test[9] = "Tudo Bem ?"
test[10] = "opa!"
let messes = ['1','2','3','4','5','6','7','8','9','10','11','12',]
messes [0] ='janeiro'
messes [1] ='fevereiro'
messes [2] ='março'
messes [3] ='abril'
messes [4] ='maio'
messes [5] ='junho'
messes [6] ='julho'
messes [7] ='agosto'
messes [8] ='setembro'
messes [9] ='outubro'
messes [10] ='novembro'
messes [11] ='dezenbro'

//adicionar no final o modo push = empurrar
produtos.push('açucar','Sal')
codigo.push(40, 50, 60, 70)
//messes.push('mai','jun','ago', '07')

//remover do final pop = estourar
produtos.pop()
codigo.pop()
//messes.pop()

// remover do  final pop = estourar
produtos.pop()
codigo.pop()
//messes.pop()

// adicionar no inicio unshift
produtos.unshift('uva' ,'maçã')

//remover do inicio shift
produtos.shift()

//remover de uma posicao esppecifica splice
//splice = emendar
//posicao iniciial, quantos remover
codigo.splice(1, 3)

//copiar array slice = fatiar porção
//posicao inicial, quantos copiar
let messes1 = messes.slice()
let messes2 = messes.slice(0,3)

// ver tamanho do  array .length utilizar para saber o tamanho do  comprimento
// ex 
//messes.length
//messes1.length
//messes2.length

// spreed operator ... serve para copiar todo conteudo de uma array
// aqui diz que dentro de produtos tudo que la tiver sera copiado para teste
let teste = [...produtos, 'ovo', 'pera']
