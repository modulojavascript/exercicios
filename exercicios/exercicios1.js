// Fixando manipulação de variáveis//
/* 1 - Escreva um código em JavaScript e crie uma frase mosntrando
 cada palavra separadamente no console. 
 Use o método split() para fazer isso.*/


// Recebe uma frase como entrada
//const frase = "Esta é uma frase simples para dividir em palavras";

// Use o método split() para dividir a frase em palavras
const palavras = frase.split("");
//console.log(palavras)

/* Cortando uma string

2- Crie um código em JavaScript que recebe a string "Essa frase será cortada" como entrada e 
usa o método slice() para cortar uma parte da string. 
Em seguida, exiba a parte cortada no console.*/

// Recebe uma string como entrada
//const texto = "Essa frase será cortada";

// Use o método slice() para cortar uma parte da string
const fraseCortada = texto.slice(8,11);

// Exiba a parte cortada no console
//console.log("A frase cortada foi:" + fraseCortada);

//Obtendo dígitos de um número

/* 3- Crie um pseudocódigo em JavaScript que recebe um número inteiro 
como entrada e usa o método slice() para obter dígitos
individuais desse  número.
Em seguida, imprima os dígitos no console.*/

// Recebe um número como entrada
let numero = "12345";

// Use o método slice() para obter dígitos individuais
let numerosIndividuais = numero.slice(2);
//console.log(numerosIndividuais)

//Substituindo palavras em uma frase

/* 4 -Crie um programa em JavaScript que recebe uma frase como entrada 
e usa o método replace() para substituir uma palavra específica na frase por outra palavra. 
Em seguida, exiba a frase modificada no console.*/

// Recebe uma frase como entrada
let fraseOriginal = "Esta é uma frase de exemplo para substituir uma palavra.";

// Use o método replace() para substituir uma palavra
let fraseModificada = fraseOriginal.replace("exemplo", "exercicio");

// Exiba a frase modificada no console
//console.log(fraseModificada);

//Obtendo uma parte de uma string

/*Crie um programa em JavaScript que pega uma parte específica de
 uma string e a mostra no console. 
 Use o método substr().*/

 // Recebe uma string como entrada
let frase1 = "Esta é uma string de exemplo para obter uma parte dela.";

// Use o método substr() para obter uma parte da string
let frase2 = frase1.substring(5, 10);

// Exiba a parte obtida no console
console.log(frase2);











