// ===Funções Basicas===
// 1.
function mostrarMensagem() {
    console.log("Bem-vindo ao estudo de funções em JavaScript!");
}

mostrarMensagem();


// 2.
function somaSimples() {
    let resultado = 4 + 6;
    console.log(resultado);
}

somaSimples();


// 3.
function imprimirNome() {
    let nome = "João";
    console.log(nome);
}

imprimirNome();

// ===Funções com retorno===
// 4.
function quadrado(numero) {
    return numero * numero;
}

console.log(quadrado(5));


// 5.
function converterParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log(converterParaCelsius(86));

// 6.
function concatenaPalavras(palavra1, palavra2) {
    return palavra1 + " " + palavra2;
}

console.log(concatenaPalavras("Olá", "mundo"));

