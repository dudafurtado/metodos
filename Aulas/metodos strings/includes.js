let sobreMim = "Eu gosto de ouvir músicas de pop americano, pop coreano e R&B no meu fone de ouvido";

console.log(sobreMim.includes("Eu" || "eu"));
console.log(sobreMim.includes("você" || "Você"));
console.log(sobreMim.includes("meu", 8));
console.log(sobreMim.includes("seu", 10));

// começa a procurar por padrão no indice 0, mas se um segundo argumento (numeber) for passado, então ele procura a partir desse número
// para chamar metódo é preciso usar o ponto, nome do metódo e abrir o parentese que tera argumentos

// retorna true ou false para caso o elemento do primeiro arguemnto existir na frase ou palavra de analise
// existe um argumento opcional para definir de qual index começar a procurar