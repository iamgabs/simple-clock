const hours = document.querySelector(".hours__numbers");
const minutes = document.querySelector(".minutes__numbers");
const seconds = document.querySelector(".seconds__numbers");

const clock = setInterval(function time(){
    const dateToday = Date.now();
    const hr = new Date(dateToday).getHours();
    const min = new Date(dateToday).getMinutes();
    const sec = new Date(dateToday).getSeconds();

    // check if the hours, minutes and seconds are less than 10
    // cause if it is, it will come only like 9 or 8 
    // we are adding a formater to add a 0 before
    hours.textContent = hr < 10 ? `0${hr}` : hr;
    minutes.textContent = min < 10 ? `0${min}` : min;
    seconds.textContent = sec < 10 ? `0${sec}` : sec; 
});
