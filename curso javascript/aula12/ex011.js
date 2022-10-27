var idade = 15
console.log(`Voce tem ${idade} anos.`)
if (idade < 16) {
    console.log('E não vota')
} else if (idade < 18 || idade > 65) {
            console.log('E o Voto é opcional')
} else {
    console.log('E o Voto é obrigatorio')
}

