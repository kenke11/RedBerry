let prevBtn = document.querySelector('.prev_btn');


let form = document.querySelector('form');
let form_btn = document.querySelector('.form_btn');

prevBtn.onclick = function () {
    location.href = 'vaccination.html';
}

let twice_a_week = document.querySelector('#twice_a_week'),
    once_a_week = document.querySelector('#once_a_week'),
    once_a_two_weeks = document.querySelector('#once_a_two_weeks'),
    once_a_month = document.querySelector('#once_a_month');

let zero = document.querySelector('#zero'),
    one = document.querySelector('#one'),
    two = document.querySelector('#two'),
    three = document.querySelector('#three'),
    four = document.querySelector('#four'),
    five = document.querySelector('#five');


let physical_gatherings = document.querySelector('#physical_gatherings');
let current_environment = document.querySelector('#current_environment');

let onlineMeeting;
let work_from_the_office;

let onlineMeetingValid = false,
    work_from_the_officeValid = false;




function tipsOnlineMeeting () {

    twice_a_week.addEventListener('change', () => {
        if (twice_a_week.checked){
            onlineMeeting = twice_a_week.value;
            console.log('onlineMeeting ', onlineMeeting)
            onlineMeetingValid = true;
        }
    })

    once_a_week.addEventListener('change', () => {
        if (once_a_week.checked){

            onlineMeeting = once_a_week.value;
            console.log('onlineMeeting ', onlineMeeting)
            onlineMeetingValid = true;
        }
    })

    once_a_two_weeks.addEventListener('change', () => {
        if (once_a_two_weeks.checked){

            onlineMeeting = once_a_two_weeks.value;
            console.log('onlineMeeting ', onlineMeeting)
            onlineMeetingValid = true;
        }
    })

    once_a_month.addEventListener('change', () => {
        if (once_a_month.checked){

            onlineMeeting = once_a_month.value;
            console.log('onlineMeeting ', onlineMeeting)
            onlineMeetingValid = true;
        }
    })

}

function tipsWorkOffice() {

    zero.addEventListener('change', () => {
        if (zero.checked){
            work_from_the_office = zero.value;
            console.log('work_from_the_office ', work_from_the_office)
            work_from_the_officeValid = true;
        }
    })

    one.addEventListener('change', () => {
        if (one.checked){
            work_from_the_office = one.value;
            console.log('work_from_the_office ', work_from_the_office)
            work_from_the_officeValid = true;
        }
    })

    two.addEventListener('change', () => {
        if (two.checked){
            work_from_the_office = two.value;
            console.log('work_from_the_office ', work_from_the_office)
            work_from_the_officeValid = true;
        }
    })

    three.addEventListener('change', () => {
        if (three.checked){
            work_from_the_office = three.value;
            console.log('work_from_the_office ', work_from_the_office)
            work_from_the_officeValid = true;
        }
    })

    four.addEventListener('change', () => {
        if (four.checked){
            work_from_the_office = four.value;
            console.log('work_from_the_office ', work_from_the_office)
            work_from_the_officeValid = true;
        }
    })

    five.addEventListener('change', () => {
        if (five.checked){
            work_from_the_office = five.value;
            console.log('work_from_the_office ', work_from_the_office)
            work_from_the_officeValid = true;
        }
    })

}


function tipsSubmit() {

    form_btn.addEventListener('click', () => {

        if (onlineMeetingValid === true &&  work_from_the_officeValid === true) {

            sessionStorage.setItem('onlineMeeting', onlineMeeting);

            sessionStorage.setItem('work_from_the_office', work_from_the_office);

            if (physical_gatherings.value !== '') {
                sessionStorage.setItem('physical_gatherings', physical_gatherings.value);
            }

            if (current_environment.value !== '') {
                sessionStorage.setItem('current_environment', current_environment.value);

                console.log(sessionStorage.getItem('current_environment'))
            }

            console.log('valid');
            form.submit();
        } else {
            console.log('invalid');
        }

    })

}


tipsOnlineMeeting();
tipsWorkOffice();

tipsSubmit();