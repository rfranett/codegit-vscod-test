/*arquivos js aula 03 operadores e operações */

let n1 = 10 // numero inteiro 
let n2 = 2 // mumero inteiro 
let n3 ="2" // string ou texto

document.write(`n1 ${n1}<br>`)
document.write(`n2 ${n2}<br>`)
document.write(`n3 ${n3}<br>`)

console.log(n1 + n2) // adicao
console.log(n1 - n2) //subtracao
console.log(n1 * n2) //multiplicacao
console.log(n1 / n2) // divisao
console.log(n1 % n2) // resto ou modulo

console.log(n2 == n3) // igual a
console.log(n2 ===n3) //identico a
console.log(n2 != n3) //diferente de ,ou nao igual
console.log(n2 !== n3) //nao e identico

console.log(n1 > n2)  // maior que 
console.log(n1 < n2)  //menor que
console.log(n2 >= n2) //maior ou igual a 
console.log(n1 <= n2) //menor ou igual a

let a = true
let b = false
console.log(a && b)  //e and
console.log(a || b) // ou or
console.log(!a) // nao ,not ,negacao
console.log(!b)  // verdadeiro 
