// ==== identification page ====

let name = document.querySelector('#name'),
    lastName = document.querySelector('#last-name'),
    email = document.querySelector('#email'),
    identErrorName = document.querySelector('.identification_error_name'),
    identErrorLastName = document.querySelector('.identification_error_last-name'),
    identErrorEmail = document.querySelector('.identification_error_email'),
    btnNext = document.querySelector('#submit_form'),
    form = document.querySelector('form');

let valid = false;
let emailValid = false

let nameValid = false




function inpValue() {
    if (sessionStorage.getItem('name') &&
        sessionStorage.getItem('last_name') &&
        sessionStorage.getItem('email')) {

        valid = true;
        emailValid = true
        nameValid = true

        btnNext.classList.remove('invalid')

        name.value = sessionStorage.getItem('name');
        lastName.value = sessionStorage.getItem('last_name');
        email.value = sessionStorage.getItem('email');
    }
}
inpValue();

function submit(){



        btnNext.addEventListener('click', (e) => {
            if (valid === true && emailValid === true && nameValid === true){
                sessionStorage.setItem('name', name.value);
                sessionStorage.setItem('last_name', lastName.value);
                sessionStorage.setItem('email', email.value);

                form.submit();
            }
        })

}


function identValidation (){



    lastName.addEventListener('change', () => {

        let txt = lastName.parentElement.children[0].innerHTML;
        txt = txt.slice(0, -1);

        let latgeo = /^[A-Za-zა-ჰ]+$/
        let numbers = /^[-+]?[0-9]+$/;

        if (!lastName.value.match(latgeo)) {
            identErrorLastName.innerHTML = txt + 'ს ' + 'ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს';
            // btnNext.disabled = true
            valid = false;
            btnNext.classList.add('invalid')
        } else if (lastName.value.length > 255) {
            identErrorLastName.innerHTML = txt + 'ს ' + 'ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან';
            // btnNext.disabled = true
            valid = false;
            btnNext.classList.add('invalid')
        } else if (lastName.value.length <= 2 || lastName.value === ' ') {
            identErrorLastName.innerHTML = txt + 'ს ' + 'ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან';
            // btnNext.disabled = true
            valid = false;
            btnNext.classList.add('invalid')
        } else {
            identErrorLastName.innerHTML = ' '
            valid = true;

            if (valid === true && nameValid === true && emailValid === true) {
                btnNext.classList.remove('invalid')
            } else {
                btnNext.classList.add('invalid')
            }

        }
    })

    name.addEventListener('change', () => {

        let txt = name.parentElement.children[0].innerHTML;
        txt = txt.slice(0, -1);

        let latgeo = /^[A-Za-zა-ჰ]+$/
        let numbers = /^[-+]?[0-9]+$/;

        if (!name.value.match(latgeo)) {
            identErrorName.innerHTML = txt + 'ს ' + 'ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს';
            // btnNext.disabled = true
            nameValid = false;
            btnNext.classList.add('invalid')
        } else if (name.value.length > 255) {
            identErrorName.innerHTML = txt + 'ს ' + 'ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან';
            // btnNext.disabled = true
            nameValid = false;
            btnNext.classList.add('invalid')
        } else if (name.value.length <= 2 || name.value === ' ') {
            identErrorName.innerHTML = txt + 'ს ' + 'ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან';
            // btnNext.disabled = true
            nameValid = false;
            btnNext.classList.add('invalid')
        } else {
            identErrorName.innerHTML = ' '
            nameValid = true;

            if (valid === true && nameValid === true && emailValid === true) {
                btnNext.classList.remove('invalid')
            } else {
                btnNext.classList.add('invalid')
            }

        }
    })




}

function emailValidation(form_id, email){

    email.addEventListener('change', () => {


        let mail = email.value;
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let regx = /^([A-Za-z0-9\._]+)@redberry.ge$/;

        if(!mail.match(reg)) {
            identErrorEmail.innerHTML = 'თქვენ მიერ შეყვანილი მეილი არასწორია'
            emailValid = false;
            btnNext.classList.add('invalid')
        } else if(!mail.match(regx)) {
            identErrorEmail.innerHTML = 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)';
            emailValid = false;
            btnNext.classList.add('invalid')
        } else {
            identErrorEmail.innerHTML = ' ';
            emailValid = true;

            if (valid === true && nameValid === true && emailValid === true) {
                btnNext.classList.remove('invalid')
            } else {
                btnNext.classList.add('invalid')
            }

        }
    })


}



emailValidation(form, email);

identValidation();
identValidation();


submit();