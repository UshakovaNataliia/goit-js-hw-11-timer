//! ---------Решение обычными ф-циями--------- 

// const refs = {
//   daysFace: document.querySelector('span[data-value="days"]'),
//   hoursFace: document.querySelector('span[data-value="hours"]'),
//   minsFace: document.querySelector('span[data-value="mins"]'),
//   secsFace: document.querySelector('span[data-value="secs"]'),
// };

// setInterval(() => {
//    const startTime = new Date('Nov 15, 2020');
//    const currentTime = Date.now();
//    const deltaTime = startTime - currentTime;

//    updateClockFace(deltaTime);
// }, 1000);

// function updateClockFace (time) {  
//    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//    const secs = pad(Math.floor((time % (1000 * 60)) / (1000)));

//    refs.daysFace.textContent = days;
//    refs.hoursFace.textContent = hours;
//    refs.minsFace.textContent = mins;
//    refs.secsFace.textContent = secs;
// };

// function pad(value) {
//     return String(value).padStart(2, '0');
// };


//! ------------Решение через класс------------

class CountdownTimer{
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
  }
  start(){
    setInterval(() => {
    const startTime = this.targetDate;
    const currentTime = Date.now();
    const deltaTime = startTime - currentTime;

    this.updateClockFace(deltaTime);
   }, 1000);
  }

  updateClockFace (time) {  
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / (1000)));

    this.insertMarkup({days, hours, mins, secs});
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  insertMarkup({ days, hours, mins, secs }){
    const div = `<div class="timer" id=${this.selector}></div>`;
    const markUp= `
      <div class="field">
        <span class="value" data-value="days">${days}</span>
        <span class="label">Days</span>
      </div>
      <div class="field">
        <span class="value" data-value="hours">${hours}</span>
        <span class="label">Hours</span>
      </div>
      <div class="field">
        <span class="value" data-value="mins">${mins}</span>
        <span class="label">Minutes</span>
      </div>
      <div class="field">
        <span class="value" data-value="secs">${secs}</span>
        <span class="label">Second</span>
      </div>`;
  document.querySelector('body').insertAdjacentHTML('beforeend', div);
  document.getElementById(`${this.selector}`).innerHTML = markUp;
  }
};

const timer = new CountdownTimer({
selector: '#timer-1',
targetDate: new Date('Nov 15, 2020'),
});

const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Nov 20, 2020'),
});

const timer3 = new CountdownTimer({
  selector: '#timer-3',
  targetDate: new Date('Dec 31, 2020'),
});

