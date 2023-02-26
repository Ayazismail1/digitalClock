let hours = document.getElementById("hours");
let minuts = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let daypart = document.getElementById("daypart");

function getTime() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "Am"

    if (h> 12) {
        h = h - 12
        ampm = "PM"
    }
    h = h<10 ? "0"+h : h;
    m = m<10 ? "0"+m : m;
    s = s<10 ? "0"+s : s;


    hours.innerText = h
    minuts.innerText = m
    seconds.innerText = s
    daypart.innerText = ampm
    setTimeout(() => {
        getTime()
    },1000)

}
getTime()
