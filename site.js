//alert("Hello")

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcomeBanner = document.querySelector('#welcome p')
if(isMorning) {welcomeBanner.textContent='Good Morning and Have a Great Day!'}
else if (isAfternoon){welcomeBanner.textContent='Keep on Keeping on! Almost Done With The Work Day!'}
else {welcomeBanner.textContent='Have a Great Night and Try to Relax and Unwind!'}