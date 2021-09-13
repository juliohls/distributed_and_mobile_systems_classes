




// async function hello(nome) {
//     return "Hello " + nome
// }

// const boasVindas = hello("José")
// console.log(boasVindas)

// boasVindas.then(result => console.log(result))


// const axios = require("axios");
// // chave de acesso
// const appid = "2b7e389170e0125ff415d77e33683b83";
// // cidade
// const q = "Botucatu";
// // padrão unidade de medida
// const units = "metric";
// //idioma da página
// const lang = "pt-BR";
// //qtdade de resultados
// const cnt = "10";
// // requisição
// const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=${appid}&units=${units}&lang=${lang}
//                 &cnt=${cnt}`;

// //realizando requisição
// axios.get(url)
//     .then(result => {
//         //mostrar resultado da consulta e devolver o que interessa
//         console.log(result);
//         return result.data;
//     })
//     //Encadeando resultados
//     .then(result => {
//         console.log("Contador= " + result.cnt);
//         return result;
//     })
//     .then(result => {
//         //verificar o que recebemos e passar somente a lista de previsão
//         console.log("New Result: ", result);
//         return result["list"];
//     })
//      .then(result => {
//          //varrer a lista de previsões e pegar o necessário
//          for(let previsao of result) {
//              console.log (`
//                  ${new Date(+previsao.dt*1000).toLocaleString()},
//                  ${'Min: ' + previsao.main.temp_min}\u00B0C,
//                  ${'Max: ' + previsao.main.temp_max}\u00B0C,
//                  ${previsao.weather[0].description}`);
//          }
//          return result;
//      });





// function calculoRapidinhoComVerificacao (numero) {
//     return numero >= 0
//         ? Promise.resolve((numero * (numero + 1))/2)
//         : Promise.reject("Numero precisa ser positivo")
// }
// calculoRapidinhoComVerificacao(10)
//     .then (resultado => {
//         console.log(resultado);
//     })
//     .catch( err => {
//         console.log(err);
//     });
// calculoRapidinhoComVerificacao(-1)
//     .then (resultado => {
//         console.log(resultado);
//     })
//     .catch( err => {
//         console.log(err);
//     })

//quero somar 1 + 2 + 3 + ... + n
//function calculoRapidinho (numero){
//    return Promise.resolve ((numero * (numero + 1)) / 2)
//}
//
//calculoRapidinho(10000).then (res => {
//    console.log (res)
//})



// function calculoDemorado (numero){
//     return new Promise (function (resolve, reject){
//         let res = 0
//         for (let i = 1; i <= numero; i++){
//             res += i
//         }
//         resolve(res)
//     })
// }

// let p = calculoDemorado(10)

// p.then((res) => { console.log ("Res: " + res)})




// const soma = calculoDemorado (10)
// console.log(soma)


// const fs = require ('fs')

//1 abrir o arquivo
//2 ler e exibir o conteudo
//3 calcular o dobro e escrever no arquivo dobro.txt
//4 dizer que tudo deu certo



//inferno de callbacks
// const abrirArquivo = function (nomeArquivo){
//     const exibirConteudo = function (erro, conteudo){
//         if (erro){
//             console.log (`Deu erro: ${erro}`)
//         }
//         else{
//             console.log (`Conteúdo: ${conteudo.toString()}`)
//             const dobro = +conteudo.toString() * 2
//             const finalizar = function (erro){
//                 console.log (`${erro ? 'Deu erro' : 'Ok, dobro armazenado'}`)
//             }
//             fs.writeFile ('dobro.txt', dobro.toString(), finalizar)
//             console.log ('Depois de escrever o arquivo')
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
//     console.log("Depois de ler o arquivo")
// }

// abrirArquivo("arquivo.txt")





// const fs = require ('fs')
// const abrirArquivo = function (nomeArquivo){

//     //função callback
//     const exibirConteudo = function (erro, conteudo){
//         if (erro){
//             console.log (`Deu erro: ${erro}`)
//         }
//         else{
//             console.log(conteudo.toString())
//         }
//     }

//     fs.readFile (nomeArquivo, exibirConteudo)
//     console.log ("Depois do readFile")
// }

// abrirArquivo('arquivo.txt')


// function demorada (){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2Segundos); //NO-OP
//     const d = 8 + 4
//     return d
// }

// const a = 2 + 3
// const b = 5 + 9

// setTimeout (function (){
//     const d = demorada()
//     console.log("d: " + d)
// }, 0)

// const e = a + b
// console.log("e: " + e)



// function demorada (){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2Segundos); //NO-OP
//     const d = 8 + 4
//     return d
// }

// const a = 2 + 3
// const b = 5 + 9
// const d = demorada()

// const e = 2 + a + b
// console.log(e)
