let prevBtn = document.querySelector('.prev_btn'),
    nextBtm = document.querySelector('.next_btn');

prevBtn.onclick = function () {
    location.href = 'identification.html';
}


let form = document.querySelector('form');

let covidStatusYes = document.querySelector('#covid-19-status_yes'),
    covidStatusNo = document.querySelector('#covid-19-status_no'),
    covidStatusNow = document.querySelector('#covid-19-status_now');


let antibody = document.querySelector('.antibody'),
    antibodyStatusYes =  document.querySelector('#antibody_yes'),
    antibodyStatusNo =  document.querySelector('#antibody_no');


let testAntibody = document.querySelector('.test_antibody'),
    dateAntibody = document.querySelector('.antibodyNumber'),
    antibodyQuantity = document.querySelector('.antibodyQuantity');


let covid19Date = document.querySelector('.covid19_number'),
    dateCovid19 = document.querySelector('.dateCovid19');




let covid19Transferred,
    antibodyCurrently,
    antibodyDate,
    qualityAntibody,
    covidDate;

let antibodyDateValid = false;
let qualityAntibodyValid = false;
let covidDateValid = false;




function questInpValue(){

    if (sessionStorage.getItem('sufferedCovid19')) {

        if (sessionStorage.getItem('sufferedCovid19') === 'yes') {


            antibody.style.display = 'block';
            covidStatusYes.checked = true
            // covidStatusYes.value = sessionStorage.getItem('sufferedCovid19');
            covid19Transferred = sessionStorage.getItem('sufferedCovid19');

            if (sessionStorage.getItem('antibodyCurrently') === antibodyStatusYes.value){
                testAntibody.style.display = 'block'
                antibodyStatusYes.checked = true

                antibodyCurrently = antibodyStatusYes.value
                console.log(antibodyCurrently)

                dateAntibody.value = sessionStorage.getItem('antibodyDate');
                antibodyDate = dateAntibody.value;

                antibodyQuantity.value = sessionStorage.getItem('qualityAntibody');
                qualityAntibody = antibodyQuantity.value;

                antibodyDateValid = true;
                qualityAntibodyValid = true;

                nextBtm.classList.remove('invalid');


            } else if (sessionStorage.getItem('antibodyCurrently') === antibodyStatusNo.value) {
                covid19Date.style.display = 'block'
                antibodyStatusNo.checked = true

                antibodyCurrently = antibodyStatusNo.value

                dateCovid19.value = sessionStorage.getItem('covidDate');
                covidDate = dateCovid19.value;
                covidDateValid = true;

                nextBtm.classList.remove('invalid');

            }

        } else if(sessionStorage.getItem('sufferedCovid19') === 'no') {

            covidStatusNo.checked = true
            covidStatusNo.value = sessionStorage.getItem('sufferedCovid19');
            covid19Transferred = sessionStorage.getItem('sufferedCovid19');

            nextBtm.classList.remove('invalid');
        } else if (sessionStorage.getItem('sufferedCovid19') === 'now') {
            covidStatusNow.checked = true
            covidStatusNow.value = sessionStorage.getItem('sufferedCovid19');
            covid19Transferred = sessionStorage.getItem('sufferedCovid19');

            nextBtm.classList.remove('invalid');
        }

    }

}



function covid19Status() {

    covidStatusYes.addEventListener('change', () => {
        if (covidStatusYes.checked) {
            antibody.style.display = 'block';
            covid19Transferred = covidStatusYes.value;

            nextBtm.classList.add('invalid');
        }
    })
    covidStatusNo.addEventListener('change', () => {
        if (covidStatusNo.checked) {
            antibody.style.display = 'none';
            testAntibody.style.display = 'none'
            covid19Date.style.display = 'none'
            covid19Transferred = covidStatusNo.value;

            sessionStorage.removeItem('antibodyCurrently');
            sessionStorage.removeItem('antibodyDate');
            sessionStorage.removeItem('qualityAntibody');
            sessionStorage.removeItem('covidDate');

            nextBtm.classList.remove('invalid');

        }
    })
    covidStatusNow.addEventListener('change', () => {
        if (covidStatusNow.checked) {
            antibody.style.display = 'none';
            testAntibody.style.display = 'none'
            covid19Date.style.display = 'none'
            covid19Transferred = covidStatusNow.value;

            sessionStorage.removeItem('antibodyCurrently');
            sessionStorage.removeItem('antibodyDate');
            sessionStorage.removeItem('qualityAntibody');
            sessionStorage.removeItem('covidDate');

            nextBtm.classList.remove('invalid');

        }
    })

}

function antibodyStatus(){
    antibodyStatusYes.addEventListener('change', () => {
        if (antibodyStatusYes.checked) {
            testAntibody.style.display = 'block'
            covid19Date.style.display = 'none'
            antibodyCurrently = antibodyStatusYes.value;
            nextBtm.classList.add('invalid');

            if (sessionStorage.getItem('covidDate')) {
                sessionStorage.removeItem('covidDate')
            }

            if (dateAntibody.value !== ' ' || antibodyQuantity.value !== ' '){
                dateAntibody.value = '';
                antibodyQuantity.value = '';
            }

        }
    })

    antibodyStatusNo.addEventListener('change', () => {
        if (antibodyStatusNo.checked) {
            testAntibody.style.display = 'none'
            covid19Date.style.display = 'block'
            antibodyCurrently = antibodyStatusNo.value;
            nextBtm.classList.add('invalid');

            if (sessionStorage.getItem('qualityAntibody') && sessionStorage.getItem('antibodyDate')) {
                sessionStorage.removeItem('qualityAntibody');
                sessionStorage.removeItem('antibodyDate');
            }

            if (dateCovid19.value !== ' ') {
                dateCovid19.value = '';
            }

        }
    })
}

function antibodyQuality() {



    dateAntibody.addEventListener('change', () => {
        antibodyDate = dateAntibody.value;

        // console.log(Date.parse(new Date()));

        if (dateAntibody.value !== ''){
            antibodyDateValid = true;
        } else {
            antibodyDateValid = false;
        }

        if (antibodyDateValid === true && qualityAntibodyValid === true) {
            nextBtm.classList.remove('invalid');
        } else {
            nextBtm.classList.add('invalid');
        }

    })

    antibodyQuantity.addEventListener('input', () => {
        const value = antibodyQuantity.value;
        antibodyQuantity.value = value.replace(/\D/g, '');
    })

    antibodyQuantity.addEventListener('change', () => {
        qualityAntibody = antibodyQuantity.value;
        if (antibodyQuantity.value !== ''){
            qualityAntibodyValid = true;
        } else {
            qualityAntibodyValid = false;
        }

        if (antibodyDateValid === true && qualityAntibodyValid === true) {
            nextBtm.classList.remove('invalid');
        } else {
            nextBtm.classList.add('invalid');
        }

    })

}

function dateCovid() {
    dateCovid19.addEventListener('change', () => {
        covidDate = dateCovid19.value;

        if (dateCovid19.value !== ''){
            covidDateValid = true;
            nextBtm.classList.remove('invalid');
        } else {
            covidDateValid = false;
            nextBtm.classList.add('invalid');
        }
    })
}

function questSubmit() {

    nextBtm.addEventListener('click', () => {

        if (covid19Transferred !== covidStatusYes.value) {

            if (covid19Transferred === covidStatusNo.value || covid19Transferred === covidStatusNow.value ) {
                sessionStorage.setItem('sufferedCovid19', covid19Transferred);
                // alert(1)
                form.submit();
            }


        } else if (covid19Transferred === covidStatusYes.value) {

            sessionStorage.setItem('sufferedCovid19', covidStatusYes.value);

            if (antibodyCurrently === antibodyStatusYes.value) {

                if (qualityAntibodyValid === true &&  antibodyDateValid === true){

                    // sessionStorage.setItem('sufferedCovid19', covid19Transferred);

                    sessionStorage.setItem('antibodyCurrently', antibodyCurrently);

                    sessionStorage.setItem('antibodyDate', antibodyDate);

                    sessionStorage.setItem('qualityAntibody', qualityAntibody);

                    form.submit();

                }

            } else if (antibodyCurrently === antibodyStatusNo.value) {

                if (covidDateValid === true){

                    // sessionStorage.setItem('sufferedCovid19', covid19Transferred);

                    sessionStorage.setItem('antibodyCurrently', antibodyCurrently);

                    sessionStorage.setItem('covidDate', covidDate);

                    form.submit();

                }

            }

        }

    })

}


questInpValue()
dateCovid()
antibodyQuality()
covid19Status();
antibodyStatus()

questSubmit();