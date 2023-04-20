function imprimirData(dia, mes, ano) {

    const diaString = `${dia}`.padStart(2, "0")

    const mesString = `${mes}`.padStart(2, "0")

    console.log(`${diaString}/${mesString}/${ano}`)
}


imprimirData(1, 5, 2020)
imprimirData(7, 9, 2479)
imprimirData(3, 6, 1990)