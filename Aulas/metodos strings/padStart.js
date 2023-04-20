// adiciona uma informação no inicio 

let musicas = 'Eu gosto das musicas do The Weekend'
let adicionando = musicas.padStart(58, "Is there someone else? ")
// primeiro argumento é o comprimento que a informação vai ter e o segundo é a sting que será adicionada
console.log(adicionando)
// targetLength = "Eu gosto das músicas do The Weekend".length     +    "Is there someone else?".length

const str1 = 'Eu gosto muito das músicas de Weekend';
const str2 = "Is there someone else? ";

const tamanho = str1.length + str2.length


console.log(str1.padStart(tamanho, str2));

// Se o tamanho for inferior, vai retornar a string original
