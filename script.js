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

// ===Funções Parametrizadas===
// 7.
function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

console.log(calcularMedia(7, 8, 9));


// 8.
function desconto(valor, percentual) {
    return valor - (valor * percentual / 100);
}

console.log(desconto(100, 20));


// 9.
function saudacaoPersonalizada(nome) {
    console.log(`Olá, ${nome}! Seja bem-vindo.`);
}

saudacaoPersonalizada("Maria");

// ===Funções Anonimas===
// 10.
const multiplicar = function(numero1, numero2) {
    return numero1 * numero2;
};

console.log(multiplicar(5, 4));


// 11.
const dividir = function(numero1, numero2) {
    return numero1 / numero2;
};

console.log(dividir(10, 2));

// ===Arrow Functions===
// 12.
const dobro = (numero) => {
    return numero * 2;
};

console.log(dobro(6));


// 13.
const ehPar = (numero) => {
    return numero % 2 === 0;
};

console.log(ehPar(8));
console.log(ehPar(7));

//===Funções dentro de Funções===
// 14.
function calculadora(numero1, numero2) {

    function soma(x, y) {
        return x + y;
    }

    function subtrair(x, y) {
        return x - y;
    }

    console.log("Soma:", soma(numero1, numero2));
    console.log("Subtração:", subtrair(numero1, numero2));
}

calculadora(10, 5);


// 15.
function operacoesAvancadas(numero1, numero2) {

    function produto() {
        return numero1 * numero2;
    }

    function potencia() {
        return numero1 ** numero2;
    }

    return {
        produto: produto(),
        potencia: potencia()
    };
}

console.log(operacoesAvancadas(2, 3));
