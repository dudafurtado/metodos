const a = ['duda', 'dudinha', 'dudão']
const b = [12, 14, 15, 20]
const c = ['oi', 'oii', 'oiii']

const primeiraOpcao = a.concat(b, c)
console.log(primeiraOpcao)
const segundaOpcao = b.concat(a, c)
console.log(segundaOpcao)
const terceiraOpcao = c.concat(b, a)
console.log(terceiraOpcao)