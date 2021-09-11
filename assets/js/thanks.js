let star = document.querySelectorAll('.star');
let thank = document.querySelector('.thank');
setTimeout(function (){

    thank.style.opacity = '1'

    setTimeout(function (){
        star.forEach(e => {
            e.style.opacity = '1'
        })
    }, 2000)

}, 2000)





let name,
    lastName,
    email,
    sufferedCovid,
    antibodyCurrently,
    antibodyDate,
    qualityAntibody,
    covidDate,
    vaccinateStatus,
    vaccinateStage,
    whatYouWaiting,
    onlineMeeting,
    work_from_the_office,
    physical_gatherings,
    current_environment;

let surveyAnswers = [];



function submitSurvey() {

    // page 1 - identification - //
    name = sessionStorage.getItem('name');
    surveyAnswers.name = name;

    lastName = sessionStorage.getItem('last_name');
    surveyAnswers.lastName = lastName;

    email = sessionStorage.getItem('email');
    surveyAnswers.email = email;

    // page 2 - questionnaire - //

    sufferedCovid = sessionStorage.getItem('sufferedCovid19');
    surveyAnswers.sufferedCovid = sufferedCovid;

    if (sessionStorage.getItem('sufferedCovid19') === 'yes'){
        antibodyCurrently = sessionStorage.getItem('antibodyCurrently');
        surveyAnswers.antibodyCurrently = antibodyCurrently;
    }



    if (sessionStorage.getItem('antibodyDate') && sessionStorage.getItem('qualityAntibody')) {
        antibodyDate = sessionStorage.getItem('antibodyDate');
        surveyAnswers.antibodyDate = antibodyDate;

        qualityAntibody = sessionStorage.getItem('qualityAntibody');
        surveyAnswers.qualityAntibody = qualityAntibody;

    } else if (sessionStorage.getItem('covidDate')) {

        covidDate = sessionStorage.getItem('covidDate');
        surveyAnswers.covidDate = covidDate;

    }

    // page 3 - vaccination - //

    vaccinateStatus = sessionStorage.getItem('vaccinateStatus')
    surveyAnswers.vaccinateStatus = vaccinateStatus;

    if (sessionStorage.getItem('vaccinateStatus') === 'yes') {
        vaccinateStage = sessionStorage.getItem('vaccinateStage')
        surveyAnswers.vaccinateStage = vaccinateStage;
    } else if (sessionStorage.getItem('vaccinateStatus') === 'no') {
        whatYouWaiting = sessionStorage.getItem('whatYouWaiting')
        surveyAnswers.whatYouWaiting = whatYouWaiting;
    }






    // page 4 - tips - //

    onlineMeeting = sessionStorage.getItem('onlineMeeting')
    surveyAnswers.onlineMeeting = onlineMeeting;

    work_from_the_office = sessionStorage.getItem('work_from_the_office')
    surveyAnswers.work_from_the_office = work_from_the_office;

    if (sessionStorage.getItem('physical_gatherings')) {
        physical_gatherings = sessionStorage.getItem('physical_gatherings')
        surveyAnswers.physical_gatherings = physical_gatherings;
    }

    if (sessionStorage.getItem('current_environment')) {
        current_environment = sessionStorage.getItem('current_environment')
        surveyAnswers.current_environment = current_environment;
    }


    sessionStorage.clear();
}

submitSurvey()

console.log(surveyAnswers)