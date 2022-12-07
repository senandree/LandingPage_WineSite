// console.log("Olá Mundo.");

// Variável que pode mudar ao longo do código
/*
let nome = "Daniel";
console.log(nome);

nome = "Costa";
console.log(nome);
*/

// const nome = "Rafael";
// console.log(nome);

// nome = "Costa";
// console.log(nome);

// 'botao-enviar'
const botaoAmarelo = document.getElementById('botao-enviar');
// console.log(botaoAmarelo);

// function botaoFoiClicado() {
//     console.log('O botão foi clicado.');
// }

// const botaoFoiClicado = () => {
//     console.log('O botão foi clicado.');
// }

const formulario = document.getElementById('formulario-assinatura');
botaoAmarelo.addEventListener( 'click', () => {
        // console.log('O botão foi clicado.');

        const campoEmail = document.getElementById('campo-email');
        // console.log(campoEmail.value);

        const conteudoCampoEmail = campoEmail.value;
        if( conteudoCampoEmail.indexOf('@') >= 1 ) {
            // E-mail ok.
            formulario.submit();
        } else {
            // E-mail não ok.
            alert('Confira o teu e-mail.');
        }
    } 
);

// function soma(param1, param2) {
//     return param1 + param2;
// }

// // const soma = (param1, param2) => {
// //     return param1 + param2;
// // }

// const resultado = soma(10 ,30);
// console.log(resultado);

