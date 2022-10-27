

function carregar(){
    const msg = window.document.getElementById('msg')
    const img = window.document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12 ) {
        img.src = 'manha.png'
        document.body.style.background = '#fce48f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#f6ab5c'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#3e81b8'
    }
}
