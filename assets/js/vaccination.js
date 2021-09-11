let prevBtn = document.querySelector('.prev_btn'),
    nextBtm = document.querySelector('.next_btn');

prevBtn.onclick = function () {
    location.href = 'questionnaire.html';
}

let form = document.querySelector('form');

let vaccinStatusYes = document.querySelector('#vaccination-status_yes'),
    vaccinStatusNo = document.querySelector('#vaccination-status_no');

let vaccinationStage = document.querySelector('.vaccination_stage'),
    firstDoseAndReg = document.querySelector('#first_dose_and_reg'),
    fullDose = document.querySelector('#full_dose'),
    onlyFirstDose = document.querySelector('#only_first_dose');


let form_reference_onl_first = document.querySelector('.form_reference_onl_first');



let whatYouWait = document.querySelector('.what_you_wait'),
    im_reg_and_w8 = document.querySelector('#im_reg_and_w8'),
    i_do_not_plan = document.querySelector('#i_do_not_plan'),
    i_plan_to_get_vaccinated = document.querySelector('#i_plan_to_get_vaccinated');


let form_reference_not_plan = document.querySelector('.form_reference_not_plan'),
    form_reference_get_vaccinated = document.querySelector('.form_reference_get_vaccinated');

let vaccinateStatus;

let vaccinateStage;

let whatYouWaiting;

var myReq = new Request('tips.html');

console.log(myReq.url)

let link = myReq.url

form.action = link

function vaccinateInpValue() {

    if (sessionStorage.getItem('vaccinateStatus')){

        if (sessionStorage.getItem('vaccinateStatus') === vaccinStatusYes.value) {

            vaccinationStage.style.display = 'block';
            vaccinStatusYes.checked = true
            vaccinateStatus = vaccinStatusYes.value;

            if (sessionStorage.getItem('vaccinateStage') === firstDoseAndReg.value) {

                firstDoseAndReg.checked = true
                vaccinateStage = firstDoseAndReg.value
                nextBtm.classList.remove('invalid');

            } else if (sessionStorage.getItem('vaccinateStage') === fullDose.value) {

                fullDose.checked = true
                vaccinateStage = fullDose.value
                nextBtm.classList.remove('invalid');

            } else if (sessionStorage.getItem('vaccinateStage') === onlyFirstDose.value) {

                onlyFirstDose.checked = true
                vaccinateStage = onlyFirstDose.value
                form_reference_onl_first.style.display = 'block';
                nextBtm.classList.remove('invalid');

            }


        } else if (sessionStorage.getItem('vaccinateStatus') === vaccinStatusNo.value) {

            whatYouWait.style.display = 'block';
            vaccinStatusNo.checked = true
            vaccinateStatus = vaccinStatusNo.value;

            if (sessionStorage.getItem('whatYouWaiting') === im_reg_and_w8.value) {

                im_reg_and_w8.checked = true
                whatYouWaiting = im_reg_and_w8.value
                nextBtm.classList.remove('invalid');

            } else if (sessionStorage.getItem('whatYouWaiting') === i_do_not_plan.value) {

                i_do_not_plan.checked = true
                form_reference_get_vaccinated.style.display = 'block';
                whatYouWaiting = i_do_not_plan.value
                nextBtm.classList.remove('invalid');

            } else if (sessionStorage.getItem('whatYouWaiting') === i_plan_to_get_vaccinated.value) {

                i_plan_to_get_vaccinated.checked = true
                form_reference_not_plan.style.display = 'block';
                whatYouWaiting = i_plan_to_get_vaccinated.value

                nextBtm.classList.remove('invalid');

            }


        }

    }

}

function vaccinationStatus () {

    vaccinStatusYes.addEventListener('change', () => {
        if (vaccinStatusYes.checked){
            vaccinationStage.style.display = 'block';
            whatYouWait.style.display = 'none';
            form_reference_get_vaccinated.style.display = 'none';
            form_reference_not_plan.style.display = 'none';

            vaccinateStatus = vaccinStatusYes.value;
            sessionStorage.removeItem('whatYouWaiting')

            nextBtm.classList.add('invalid');

        }
    })

    vaccinStatusNo.addEventListener('change', () => {
        if (vaccinStatusNo.checked){
            vaccinationStage.style.display = 'none';
            whatYouWait.style.display = 'block';
            form_reference_onl_first.style.display = 'none';

            vaccinateStatus = vaccinStatusNo.value;

            sessionStorage.removeItem('vaccinateStage')

            nextBtm.classList.add('invalid');
        }
    })

}


function vaccStage () {

    firstDoseAndReg.addEventListener('change', () => {
        if (firstDoseAndReg.checked){
            form_reference_onl_first.style.display = 'none';

            vaccinateStage = firstDoseAndReg.value;
            console.log(vaccinateStage)

            nextBtm.classList.remove('invalid');

        }
    })

    fullDose.addEventListener('change', () => {
        if (fullDose.checked){
            form_reference_onl_first.style.display = 'none';

            vaccinateStage = fullDose.value;
            console.log(vaccinateStage)

            nextBtm.classList.remove('invalid');
        }
    })

    onlyFirstDose.addEventListener('change', () => {
        if (onlyFirstDose.checked){
            form_reference_onl_first.style.display = 'block';

            vaccinateStage = onlyFirstDose.value;
            console.log(vaccinateStage)

            nextBtm.classList.remove('invalid');
        }
    })

}

function whatUWait() {

    im_reg_and_w8.addEventListener('change', () => {
        if (im_reg_and_w8.checked){
            form_reference_get_vaccinated.style.display = 'none';
            form_reference_not_plan.style.display = 'none';

            whatYouWaiting = im_reg_and_w8.value

            console.log(whatYouWaiting)

            nextBtm.classList.remove('invalid');
        }
    })

    i_do_not_plan.addEventListener('change', () => {
        if (i_do_not_plan.checked){
            form_reference_get_vaccinated.style.display = 'block';
            form_reference_not_plan.style.display = 'none';

            whatYouWaiting = i_do_not_plan.value

            console.log(whatYouWaiting)

            nextBtm.classList.remove('invalid');
        }
    })

    i_plan_to_get_vaccinated.addEventListener('change', () => {
        if (i_plan_to_get_vaccinated.checked){
            form_reference_get_vaccinated.style.display = 'none';
            form_reference_not_plan.style.display = 'block';

            whatYouWaiting = i_plan_to_get_vaccinated.value

            console.log(whatYouWaiting)

            nextBtm.classList.remove('invalid');
        }
    })

}

function vaccSubmit() {

    nextBtm.addEventListener('click', () => {

        if (vaccinStatusYes.value === vaccinateStatus){

            sessionStorage.setItem('vaccinateStatus', vaccinateStatus);

            if (vaccinateStage === firstDoseAndReg.value) {

                sessionStorage.setItem('vaccinateStage', vaccinateStage);

                form.submit();
            } else if (vaccinateStage === fullDose.value) {

                sessionStorage.setItem('vaccinateStage', vaccinateStage);

                form.submit();
            } else if (vaccinateStage === onlyFirstDose.value) {

                sessionStorage.setItem('vaccinateStage', vaccinateStage);

                form.submit();

            }


        } else if (vaccinStatusNo.value === vaccinateStatus) {

            sessionStorage.setItem('vaccinateStatus', vaccinateStatus);

            if (whatYouWaiting === im_reg_and_w8.value) {

                sessionStorage.setItem('whatYouWaiting', whatYouWaiting);

                form.submit();
            } else if (whatYouWaiting === i_do_not_plan.value) {

                sessionStorage.setItem('whatYouWaiting', whatYouWaiting);

                form.submit();
            } else if (whatYouWaiting === i_plan_to_get_vaccinated.value) {

                sessionStorage.setItem('whatYouWaiting', whatYouWaiting);

                form.submit();

            }
        }

    })

}

vaccinateInpValue();

vaccinationStatus();
vaccStage();
whatUWait();

vaccSubmit();