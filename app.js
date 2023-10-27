let button = document.querySelectorAll('.button')
let toggle = true

button.forEach((element) =>{
    element.addEventListener('click',()=>{
        if(toggle){
            toggle = !toggle
            element.textContent = 'скрыть ответ'
            element.parentNode.querySelector('.answer').classList.add('open')
        }else{
            toggle =!toggle
            element.parentNode.querySelector('.answer').classList.remove('open')
        }
    })
})

