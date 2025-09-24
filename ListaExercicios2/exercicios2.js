/* 1. Validação de Datas 
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores 
formarem  uma  data  real  (meses  de  28–31  dias,  ano  bissexto  para 
fevereiro) e false caso contrário. */


/*     function ehDataValida(dia, mes, ano) {
    // Verifica se o mês é válido
    if (mes < 1 || mes > 12) return false;

    // Verifica se o ano é bissexto
    const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

    // Definição dos dias máximos por mês
    const diasPorMes = {
        1: 31,
        2: ehBissexto ? 29 : 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    };

    // Verifica se o dia é válido
    return dia >= 1 && dia <= diasPorMes[mes];
}


console.log(ehDataValida(29, 2, 2024)); //bisexto
console.log(ehDataValida(31, 4, 2023));
console.log(ehDataValida(29, 2, 2025)); // não é bisexto
console.log(ehDataValida(0, 2, 2052)); 
 */

/* 
2. Jogo de Adivinhação 
Escreva  um  script  que  gere um número aleatório de 1 a 100 e peça ao 
usuário,  para  adivinhar.  Use  while  para  repetir  até  acertar,  contando 
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado. */

/* const prompt = require('prompt-sync')()

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let sorteio = getRandomInt(1, 100)
console.log("Numero sorteado: " + sorteio)

let digiteNumero = 0
let contador = 0

while(digiteNumero !== sorteio) {
    digiteNumero = parseInt(prompt(`Digite um número inteiro `));
    contador++;

    if(sorteio > digiteNumero ){
        console.log("mais alto");
    } else if (sorteio < digiteNumero ) {
        console.log("mais baixo");
    } else
    console.log(`Você acertou o número sorteado: ${sorteio}, tentou ${contador} vezes`);

} */

/* 
3. Palavras Únicas 
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair 
todas as palavras únicas e exibi-las em um array.
 */

/*const string = "olá olá mundo mundo"

 function palavrasUnicas(string) {
    let palavrasUnicas = [];
    let palavrasExtraidas = string.split(" ");


    return string
}

console.log(palavrasUnicas(string))

 */

/* let string = "olá olá mundo mundo";

function palavrasUnicas(str) {
    let palavras = str.split(" "); // Divide a string em palavras
    console.log(palavras)
    let PalavrasUnicas = []; 


    for (let i = 0; i < palavras.length; i++) {
        if (!PalavrasUnicas.includes(palavras[i])) { // está no array?
            PalavrasUnicas.push(palavras[i]); // Adiciona se for única
        }
    }

    return PalavrasUnicas;
}

console.log(palavrasUnicas(string));  */



/* 4. Fatorial Recursivo 
Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando 
um Error, e n === 0 retornando 1. */

/* function fatorial(n) {
    if (n < 0) {
        throw new Error("O valor não pode ser negativo.");
    } else if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

console.log(fatorial(-1)) 
 */


/* 5. Debounce 
Crie function debounce(fn, delay) que receba uma função fn e um delay 
em  ms,  retornando  uma  nova  função  que  só  executa  fn  se  não  for 
chamada novamente dentro do intervalo.  */


/* function debounce(fn, delay) {
    let timer = null;

    return function(fn) {
        clearTimeout(timer); // zera
        timer = setTimeout(() => console.log("Debounce Executado"), delay); // Executa Debounce 
    };
}

// Função após debounce
function loadTime() {
    console.log("Função executada após o debounce!");
}

// função debounced
const debouncedLoadTime = debounce(loadTime, 5000);


debouncedLoadTime(); // Executa após 5 seg */


/* 

6. Memoization 
Implemente  function  memoize(fn)  que  armazene  em  cache  chamadas 
anteriores de fn (por argumentos), retornando resultados instantâneos em 
repetidas invocações. 
 */

/* const memoize = {}
const fibonacci = (n, memoize) => {
    if(memoize[n]) {
        return memoize[n]
    }
    if(n <= 1) {
        return 1;
    }
    return memoize[n] = fibonacci(n - 1, memoize) + fibonacci(n - 2, memoize);
}
console.log(`fibonacci: ${fibonacci(40, memoize)}`);
console.log(`fibonacci: ${fibonacci(41, memoize)}`);
console.log(`fibonacci: ${fibonacci(42, memoize)}`);
console.log(`fibonacci: ${fibonacci(43, memoize)}`);
console.log(`fibonacci: ${fibonacci(50, memoize)}`);
console.log(`fibonacci: ${fibonacci(1, memoize)}`); */



/* 7. Mapeamento e Ordenação 
Dado  um  array  produtos  =  [{  nome,  preco  },  ...],  crie  uma  função  que 
retorne  um  novo  array  apenas  com  os  nomes,  ordenados  por  preço 
crescente, usando map, sort. */

/* produtos  =  [
    {  nome: "Arroz",  preco: 8.49 },
    {  nome: "Feijão",  preco: 5.50 },
    {  nome: "Miojo",  preco: 1.99 },
    {  nome: "Óleo de Soja",  preco: 6.50 },
    {  nome: "Farinha de Trigo",  preco: 3.98 },
    {  nome: "Farinha de Milho",  preco: 6.89 },
    {  nome: "Bolacha",  preco: 3.45 },
]

function ordenacaoCrescente(array) {
  const nomesOrdenados = array
    .sort((a, b) => a.preco - b.preco) // ordena por preço
    .map(produto => produto.nome); // extrai os nomes

  console.log(nomesOrdenados);
}

ordenacaoCrescente(produtos); */

/* 8. Agrupamento por Propriedade 
Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde 
cada chave é um cliente e o valor é a soma de todos os seus total. */

/* const vendas = [
  { cliente: "João", total: 100 },
  { cliente: "Maria", total: 150 },
  { cliente: "João", total: 50 },
  { cliente: "José", total: 80 },
  { cliente: "Maria", total: 70 },
  { cliente: "José", total: 80 },
];

const agrupandoCliente = vendas.reduce((acc, venda) => {
    if (!acc[venda.cliente]) {
    acc[venda.cliente] = 0;
  }
 
  acc[venda.cliente] += venda.total;

  return acc;
}, {});

console.log(agrupandoCliente); */

/* 9. Conversão Entre Formatos 
Escreva duas funções: 
- paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente. 
- objetoParaPares(obj)  faz  o  inverso,  retornando  um  array  de pares. */


/* const pares = [['nome', 'Oséias'], ['idade', 35], ['cidade', 'Gravataí']];

// Função para objeto
function paresParaObjeto(pares) {
  const resultado = {};
  for (const [chave, valor] of pares) {
    resultado[chave] = valor;
  }
  return resultado;
}

const objeto = paresParaObjeto(pares);
console.log(objeto);

//Função para Array
function objetoParaArray(objeto) {
    return Object.entries(objeto);
}

console.log(objetoParaArray(objeto)) 
 */

