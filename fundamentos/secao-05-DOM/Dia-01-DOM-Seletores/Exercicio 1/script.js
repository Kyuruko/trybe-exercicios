document.querySelector(".emergency-tasks").style.background = "#ff9f84"
document.querySelector(".no-emergency-tasks").style.background = "#f9db5e"

let sub1 = document.querySelectorAll(".emergency-tasks h3")
for(let i=0; i<sub1.length;i++){
    sub1[i].style.background = "#a500f3"
}

let sub2 = document.querySelectorAll(".no-emergency-tasks h3")
for(let i=0; i<sub2.length;i++){
    sub2[i].style.background = "#232525"
}

document.querySelector('header').style.background = "#00b069"

document.querySelector('footer').style.background = "#003533"
