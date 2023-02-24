
const yearEl = document.getElementById("year");
const dateEl = document.getElementById("date-number");
const monthEl = document.getElementById("month-name");
const dayEl = document.getElementById("day-name");



const date=new Date();

monthEl.innerText=date.toLocaleString("en",{month:"long"});

dateEl.innerText=date.getDate();

dayEl.innerText=date.toLocaleString("en",{weekday:"long"});

yearEl.innerText=date.getFullYear();