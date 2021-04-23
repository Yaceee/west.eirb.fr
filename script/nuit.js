let button = document.getElementById('night_button');
let night = false

button.addEventListener('click', function(){
    let img_day = document.getElementsByClassName('day_img');
    let img_night = document.getElementsByClassName('night_img');
    let bg = document.getElementsByClassName('bg-fond');
    if (!night){
        for (let i = 0 ; i < img_day.length ; i++){
            img_day[i].classList.add("hidden");
        }
        for (let i = 0 ; i < img_night.length ; i++){
            img_night[i].classList.remove("hidden");
        }
        bg[0].classList.add('bg-fond_nuit');
        night = true;
    } else {
        for (let i = 0 ; i < img_night.length ; i++){
            img_night[i].classList.add("hidden");
        }
        for (let i = 0 ; i < img_day.length ; i++){
            img_day[i].classList.remove("hidden");
        }
        bg[0].classList.remove('bg-fond_nuit');
        night = false;
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});