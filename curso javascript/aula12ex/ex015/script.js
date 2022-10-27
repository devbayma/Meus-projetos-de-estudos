function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        alert('Verificar os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebe2.png')
            } else if (idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem2.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'adulto1.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso1.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebe1.png')
            } else if (idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem1.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'adulto2.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso2.png')
            }
          

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}