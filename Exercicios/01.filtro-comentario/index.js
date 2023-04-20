// const comentario = "Esse COVID é muito perigoso!";
// const comentario = "Será que pode postar isso?"
const comentario = "E vamos de falar sobre a PANDEMIA"

// let palavraProibida = comentario.includes("pandemia").includes("PANDEMIA").includes("covid").includes("COVID")

if (comentario.includes("pandemia") === true || comentario.includes("PANDEMIA") === true || comentario.includes("covid") === true || comentario.includes("COVID") === true) {
    console.log("Comentário bloqueado por conter palavras proibidas")
} else {
    console.log("Comentário autorizado")
}