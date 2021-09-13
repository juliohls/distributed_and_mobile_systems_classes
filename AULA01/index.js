//Variáveis - let, const, var
//const - constante, não muda e precisa ser inicializado
const nome = "josé"

const sobrenome = "guilherme"

//const resultado = nome + ' ' + sobrenome
const resultado = `${nome} ${sobrenome}`
console.log(resultado)

// let - variáveis, não precisa ser inicializado
let a = 2
a = 3
let b

// var - declarar qualquer variável, permite que a variavel seja redeclarada
var linguagem = "Javascript"
console.log(`Aprendendo ${linguagem}`)

var idade = 18
console.log(`Oi, ${nomes}`)
if (idade >= 18){
    var nomes = "João e Maria"
    console.log(`Parabéns ${nomes}, você pode dirigir`)
}
console.log("Até logo, " + nomes)

//coerção implícita

const n1 = 2
const n2 = "3"

//const n3 = n1 + n2
const n3 = n1 + Number(n2)
console.log(n3)

// vetores
v1 = []
v1[0] = 3.4
v1[10] = 2
v1[2] = "abc"
console.log(v1.length)
console.log(v1)

const v2 = [2, "abc", `10`]
console.log(v2)
for (let i = 0; i < v2.length; i++){
    console.log(v2[i])
}

// funções
function hello (){
    console.log("Hello")
}
hello()
function hello (nome){
    console.log(`Hello ${nome}`)
}
hello ("José")

const dobro = function (n){
    return n*2
}
console.log(dobro(7))


const dobroArrow = valor => valor * 2  //arrow function
const resultado2 = dobroArrow(9)
console.log(resultado2)

const triplo = valor => {
    return valor * 3
}
const resultado3 = triplo (4)
console.log(resultado3)


const soma = (a, b) => a + b
console.log(soma(2,3))

const ehPar = n => {
    return n % 2 === 0 ? "Sim, eh par" : "Não, não eh par"
}
console.log(ehPar(9))


const nomes2 = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
const apenasComA = nomes2.filter(n => n.startsWith('A') || n.startsWith('a'))
const resultado4 = nomes2.every(nome2 => nome2.startsWith('A'))
console.log(resultado4)
console.log(apenasComA)
console.log(nomes2.filter(x => x.includes('N') || x.includes('n')))

const numeros = [1, 2, 3, 4]
const adicao = numeros.reduce((ac, v) => ac + v)
console.log(adicao)