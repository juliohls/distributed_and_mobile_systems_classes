function fatorial (n){
    if (n < 0) return Promise.reject("Olha, não dá pra calcular fatorial disso")
    let res = 1
    for (let i = 2; i <= n; i++)
        res *= i
    return Promise.resolve(res)
}

async function chamadaComAsyncAwait(){
    try{
        const f1 = await fatorial(5)
        console.log(f1)
        const f2 = await fatorial(-1)
        console.log(f2)
    }
    catch (erro){
        console.log("Tratando o erro: " + erro)
    }
}
chamadaComAsyncAwait()

function chamadaComThenCatch(){
    fatorial(5)
    .then (res => console.log(res))
    .catch (erro => console.log(erro))

    fatorial(-1)
    .then (res => console.log(res))
    .catch (erro => console.log(erro))
}
//chamadaComThenCatch()




async function soma (a, b){
    return a + b
}

const result = soma (2, 3)
result.then(result => console.log(result))



async function hello (nome){  // Faz a função ser assíncrona sem ter que escrever codigo de promise abaixo
    return `Oi, ${nome}`
}

// function hello (nome){
//     return Promise.resolve(`Oi, ${nome}`)
// }

// function hello (nome) {
//     return `Oi, ${nome}`
// }

const boasVindas = hello ('José')
boasVindas.then((resultado) => {
    console.log(resultado)
})