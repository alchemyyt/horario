let mondayTab = document.getElementsByClassName("monday")
let tuesdayTab = document.getElementsByClassName("tuesday")
let wednesdayTab = document.getElementsByClassName("wednesday")
let thursdayTab = document.getElementsByClassName("thursday")
let fridayTab = document.getElementsByClassName("friday")
let saturdayTab = document.getElementsByClassName("saturday")
let sundayTab = document.getElementsByClassName("sunday") 
let button=document.getElementById("button");
button.addEventListener("click",sendForm);
function sendForm(){
    let subject = document.getElementById("subject");
    subject = subject.value;
    let day = document.getElementById("daySelector");
    day = day.value;
    let start = document.getElementById("start");
    start = start.value;
    let finish = document.getElementById("finish");
    finish = finish.value;
    let color = document.getElementById("color");
    color = color.value;
    let positionStart = 0;
    let positionFinish = 0;
    //finish
    if (finish == 7) {
        positionFinish = 0;
    }
    else if (finish == 8) {
        positionFinish = 1;
    }
    else if (finish == 9) {
        positionFinish = 2;
    }
    else if (finish == 10) {
        positionFinish = 3;
    }
    else if (finish == 11) {
        positionFinish = 4;
    }
    else if (finish == 12) {
        positionFinish = 5;
    }
    else if (finish == 13) {
        positionFinish = 6;
    }
    else if (finish == 14) {
        positionFinish = 7;
    }
    else if (finish == 15) {
        positionFinish = 8;
    }
    else{
        alert("Escriba solo numeros del 7 al 15")
    }
    //start
    if (start == 7) {
        positionStart = 0;
        
    }
    else if (start == 8) {
        positionStart = 1;
    }
    else if (start == 9) {
        positionStart = 2;
    }
    else if (start == 10) {
        positionStart = 3;
    }
    else if (start == 11) {
        positionStart = 4;
    }
    else if (start == 12) {
        positionStart = 5;
    }
    else if (start == 13) {
        positionStart = 6;
    }
    else if (start == 14) {
        positionStart = 7;
    }
    else if (start == 15) {
        positionStart = 8;
    }
    else{
        alert("Escriba solo numeros del 7 al 15")
    }
    if (day == "monday") {
        while (positionStart < positionFinish) {
            mondayTab[positionStart].innerHTML=subject;
            mondayTab[positionStart].style.borderColor = color;
            positionStart++
        }
    } 
    else if (day == "tuesday") {
        while (positionStart < positionFinish) {
            tuesdayTab[positionStart].innerHTML=subject;
            tuesdayTab[positionStart].style.borderColor = color;
            positionStart++
        }
    } 
    else if (day == "wednesday") {
        while (positionStart < positionFinish) {
            wednesdayTab[positionStart].innerHTML=subject;
            wednesdayTab[positionStart].style.borderColor = color;
            positionStart++
        }
    } 
    else if (day == "thursday") {
        while (positionStart < positionFinish) {
            thursdayTab[positionStart].innerHTML=subject;
            thursdayTab[positionStart].style.borderColor = color;
            positionStart++
        }
    } 
    else if (day == "friday") {
        while (positionStart < positionFinish) {
            fridayTab[positionStart].innerHTML=subject;
            fridayTab[positionStart].style.borderColor = color;
            positionStart++
        }
    } 
    else if (day == "saturday") {
        while (positionStart < positionFinish) {
            saturdayTab[positionStart].innerHTML=subject;
            saturdayTab[positionStart].style.borderColor = color;
            positionStart++
        }
    } 
    else if (day == "sunday") {
        while (positionStart < positionFinish) {
            sundayTab[positionStart].innerHTML=subject;
            sundayTab[positionStart].style.borderColor = color;
            positionStart++
        }
    } 
}
let save = document.getElementById("save");
save.addEventListener("click",clickOnSave)
function clickOnSave() {
    let schedule = document.getElementById("schedule");
    let scheduleHTML = schedule.innerHTML;
    console.log("variable"+scheduleHTML)
    localStorage.setItem('scheduleStorage',scheduleHTML);
}
window.onload=function carga() {
    let scheduleLocalStorage = localStorage.getItem('scheduleStorage');
    let savedSchedule = document.getElementById("savedSchedule");
    if (scheduleLocalStorage===null) {
        savedSchedule.innerHTML='<h3>No Schedule Saved</h3>';
    }
    else{
        savedSchedule.innerHTML+=scheduleLocalStorage;
    }
}
let deleteStorage=document.getElementById("delete");
deleteStorage.addEventListener("click",clickOnDelete);
function clickOnDelete() {
    console.log('lola')
    localStorage.removeItem('scheduleStorage')
}