const evento = document.querySelector('.teste');
const corpo = document.getElementsByClassName('noite')[0]
const img = document.getElementsByClassName('config')[0]
const img2 = document.getElementsByClassName('config2')[0]

evento.addEventListener("click", function (){
    corpo.classList.toggle('noite')[0]
    img.classList.toggle('hidden')
    img2.classList.toggle('hidden')
})
