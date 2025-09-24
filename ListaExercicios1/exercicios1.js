/* 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if. */

/* const prompt = require('prompt-sync')()


function verificaParOuImpar(numInt){
    if(numInt % 2 === 0 ) {
        console.log(`O número ${numInt} é Par! `)
    } else {
        console.log(`O número ${numInt} é Impar! `)
    }
}

verificaParOuImpar(parseInt(prompt(`Digite um número inteiro `)));
 */
/* ------------------------------------------------------------------------------------------------------------------------*/

/* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
    adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
    controle if-else. */

    /* const prompt = require('prompt-sync')()

    function faixaEtaria(idade) {
        if (idade >= 0 && idade <= 12) {
          console.log("Criança");
        } else if (idade >= 13 && idade <= 17) {
          console.log("Adolescente");
        } else if (idade >= 18 && idade <= 59) {
          console.log("Adulto");
        } else if (idade >= 60) {
          console.log("Idoso");
        } else {
          console.log("Idade inválida");
        }
      }
      
    faixaEtaria(parseInt(prompt(`Digite uma idade:  `))) */

/* ------------------------------------------------------------------------------------------------------------------------*/

/*  3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
 "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.     */

    
    /* const prompt = require('prompt-sync')()
    
    function resultadoFinal(nota) {
      if (nota >= 7) {
        console.log("Aprovado!");
      } else if (nota >= 5) {
        console.log("Recuperação!");
      } else {
        console.log("Reprovado");
      }
    }

    resultadoFinal(prompt(`Digite uma nota:  `)); */
    
/* ------------------------------------------------------------------------------------------------------------------------*/

/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */


/*   const prompt = require('prompt-sync')() 

  let opcao = Number(prompt("Insira um a Menu: " + "\n1- Cadastrar" + "\n2- Editar"  + "\n3- Excluir" + "\nMenu desejado: "))
  
    switch (opcao) {
        case 1:
            console.log("Cadastrar")
            break
        case 2:
            console.log("Editar")
            break1
        case 3:
            console.log("Excluir")
            break
        default:
            console.log("Opção inválida")
    }
  */

/* ------------------------------------------------------------------------------------------------------------------------*/

/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
 */

/* const promptImc = require('prompt-sync')() 

  let peso = Number(promptImc("Insira seu peso: "))
  let altura = Number(promptImc("Insira sua altura: "))

  let calculoImc = peso / (altura*altura);
  console.log(calculoImc)

  if(calculoImc >= 40) {
    console.log("Obesidade Grave");
  } else if (calculoImc >= 30 && calculoImc <= 39.9){
    console.log("Obesidade");
  } else if (calculoImc >= 25 && calculoImc <= 29.9){
    console.log("Sobrepeso");
  } else if (calculoImc >= 18.5 && calculoImc <= 24.9){
    console.log("peso normal");
  } else {
    console.log("baixo peso");
  } */

/* ------------------------------------------------------------------------------------------------------------------------*/

/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */

/* const prompTriangulo = require('prompt-sync')() 

  let ladoA = Number(prompTriangulo("Lado A: "))
  let ladoB = Number(prompTriangulo("Lado B: "))
  let ladoC = Number(prompTriangulo("Lado C: "))

  if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB ) {
    if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
      console.log("Triângulo isósceles: possui dois lados iguais")
    } else if (ladoA !== ladoB && ladoB !== ladoC){
      console.log("Triângulo escaleno: possui todos os lados diferentes")
    } else {
      console.log("Triângulo eqüilátero: possui todos os lados iguais")
    }
  } else {
    console.log("Não é um triângulo")
  }
 */

/* ------------------------------------------------------------------------------------------------------------------------*/

/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

/* const prompValor = require('prompt-sync')() 

function calcularValorMacas(quantidadeMacas){
  const precoPorUnidade = quantidadeMacas >= 12 ? 0.25 : 0.30;
  const valorTotal = quantidadeMacas * precoPorUnidade
  console.log("valor total " + valorTotal)
}

calcularValorMacas(Number(prompValor("Quantidades de Maças: "))) */

/* ------------------------------------------------------------------------------------------------------------------------*/

/* 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */

/* const prompt = require('prompt-sync')();

let numero1 = Number(prompt('Digite o primeiro número: '));
let numero2 = Number(prompt('Digite o segundo número: '));

if(numero1 !== numero2) {
  if(numero1 < numero2){
    console.log(`Ordem crescente: ${numero1}, ${numero2}`);
  }
} else {
  console.log("Os números são iguais")
} */

/* ------------------------------------------------------------------------------------------------------------------------*/

/* 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
utilizando um loop for. */

/* for(let i = 10; i >= 1; i--){
  console.log(i)
}
 */

/* ------------------------------------------------------------------------------------------------------------------------*/

/* 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. */

/* const prompRepeticao = require('prompt-sync')() 

for(let i = 0; i <= 10; i++){
  console.log(`Repetição ${i + 1 }: ${prompRepeticao}`);
  
} */

/* ------------------------------------------------------------------------------------------------------------------------*/

/* 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for. */

/* const prompt = require('prompt-sync')();

let somaTotal = 0

for(let i = 0; i <= 4; i++){
  let numero = parseInt(prompt(`Digite o ${i + 1}º número: `));
  somaTotal+=numero;
}

console.log(`Valor total: ${somaTotal}`); */


/* ------------------------------------------------------------------------------------------------------------------------*/

/* 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for. */

/* const prompt = require('prompt-sync')();

let numero = parseInt(prompt(`Qual tabuada gostaria de visualizar: `));

for(let i = 1; i <= 10; i++){
  console.log(`${numero} x ${i} = ${i * numero}`) 
};
*/

/* ------------------------------------------------------------------------------------------------------------------------*/

/* 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números. */

/* const prompt = require('prompt-sync')();

let numeroInt;
let numeroTotal = 0;
let quantidadeNumeros = 0;

do {
  numeroInt = parseInt(prompt(`Digite um número decimal (0 para sair): `)); 
    if(numeroInt !==0){
    numeroTotal += numeroInt;
    quantidadeNumeros++;
    }  
  
} while (numeroInt !== 0)

if (quantidadeNumeros > 0) {
  let media = numeroTotal / quantidadeNumeros;
  console.log(`A média aritmética dos números digitados é: ${media}`);
} else {
  console.log(`Nenhum número foi inserido para calcular a média.`);
}
*/

/* ------------------------------------------------------------------------------------------------------------------------*/

/* 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while. */

/* const prompt = require('prompt-sync')();

function calcularFatorial(numero) {
  let fatorial = 1;
  for( i = 1; i <= numero; i++ ) {
    fatorial = fatorial * i;  

  }
  console.log(fatorial)
  
}
calcularFatorial(numero = parseInt(prompt(`Calcular Fatorial do número: `))) */

/* ------------------------------------------------------------------------------------------------------------------------*/

/* 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for. */

/* function fibonacci(num) {
    let a = 0, b = 1;

    console.log(a); 
    console.log(b); 

    for (let i = 2; i < num; i++) {
        let temp = a + b;
        console.log(temp);
        a = b;
        b = temp;
    }
}

fibonacci(10);  */