var ok = document.getElementById('green_button')
var no = document.getElementById('red_button')
var warning_box = document.getElementById('warning_message')
var video = document.getElementById('konami_video')

ok.addEventListener('click', function(){
    warning_box.classList.add('transparent')
    setTimeout(function (){
        warning_box.remove()
        video.classList.remove('hidden')
    } ,400)
    setTimeout(function (){
        video.classList.remove('transparent')
    }, 450)
})

no.addEventListener('click', function(){
    warning_box.classList.add('transparent')
    setTimeout(function (){
        warning_box.remove()
        video.classList.remove('hidden')
    } ,400)
    setTimeout(function (){
        video.classList.remove('transparent')
    }, 450)
})