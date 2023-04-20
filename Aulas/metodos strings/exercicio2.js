let numeroGrande = "1,906,700"

let correcao = ""

for (let d of numeroGrande) {
    if (numeroGrande[d] === ",") {
        correcao = numeroGrande.replace(",", ".")
    }
}
console.log(correcao)

