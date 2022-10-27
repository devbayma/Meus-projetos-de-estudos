let valores = [1,2,3,4,5,6,7,8,9,0]
valores.sort()

//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])



for(let num=0; num < valores.length; num++) {
    console.log(`A posição ${num} tem o valor ${valores[num]}`)
}
*/
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}