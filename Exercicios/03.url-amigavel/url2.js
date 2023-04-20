const texto = "Aprenda programar do zero na Cubos Academy";

function urlAmigavel(texto) {
    let url = texto.toLowerCase().split(' ').join('-')
    console.log(url)
}

urlAmigavel(texto)