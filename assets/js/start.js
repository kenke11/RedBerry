
// ==== start page ====

let welcomeImg = document.querySelector('.welcome_img img');

let welcome_img = document.querySelector('.welcome_img');

let start_img_container = document.querySelector('.start_img_container');
let start_button_link = document.querySelector('.start_button_link');

setTimeout(function (){


    welcomeImg.style.width = '100px'
    welcomeImg.style.height = '100px'
    welcomeImg.style.borderRadius = '50%'
    welcomeImg.style.marginBottom = '251px'

    setTimeout(function (){
        start_img_container.style.display = 'flex'
        welcomeImg.style.display = 'none'
        welcomeImg.style.marginBottom = ' '
        welcome_img.style.display = 'none'
    }, 800)

    setTimeout(function (){

        start_button_link.classList.add('active_btn')

    }, 1000)


}, 2000)

sessionStorage.clear();

let date = document.querySelector('.date');
let number = /^[-+]?[0-9]+$/;


// function dateA() {
//
//     date.maxLength = 8;
//
//
//
//     date.addEventListener('keyup', () => {
//         console.log(date.value.length);
//
//         if (!date.value.match(number)){
//             date.value.substr(0, 1);
//         }
//
//         if (date.value.length === 2 || date.value.length === 5) {
//             date.value = date.value + '/';
//         }
//
//     })
// }
//
// dateA()