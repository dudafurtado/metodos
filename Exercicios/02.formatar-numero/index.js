const cpf = "12345678900";
const cnpj = "12345678900";

if (cpf.length !== 11) {
    console.log("CPF Inválido")
} else {
    let cpfDividido = cpf.split("")
    let cpfCorreto1 = cpfDividido.splice(3, 0, '.')
    let cpfCorreto2 = cpfCorreto1.splice(7, 0, '.')
    let cpfCorreto3 = cpfCorreto2.splice(11, 0, '-')
    let cpfCorretoOficial = cpfCorreto3.join('')

    console.log(cpfCorretoOficial)
}