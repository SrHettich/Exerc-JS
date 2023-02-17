let conta
function contar()
{
    conta = setInterval(carregar, 1000)
}


function carregar()
{
var msg2 = document.getElementById('msg2')
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
var seg = data.getSeconds()


msg.innerHTML = `Agora são ${hora}:${min}:${seg}`


if(hora >= 0 && hora < 12 )
{
    img.src = 'manha.png'
    msg2.innerHTML = 'Bom Dia!'
    document.body.style.backgroundColor = '#fde4c5'
}
else if(hora >= 12 && hora < 19)
{
img.src = "tarde.png"
    msg2.innerHTML = 'Boa Tarde!'
    document.body.style.backgroundColor = '#f1b55f'
}

else
{
    img.src = "noite.png"
    msg2.innerHTML = "Boa Noite!"
    document.body.style.backgroundColor ='#051A33'
}
}