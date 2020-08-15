const refs = {
    daysFace: document.querySelector('span[data-value="days"]'),
   hoursFace: document.querySelector('span[data-value="hours"]'),
    minsFace: document.querySelector('span[data-value="mins"]'),
    secsFace: document.querySelector('span[data-value="secs"]'),
  };

  class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
      this.intervalId = null;
      this.start();
    };

    start() {
    const startTime = this.targetDate;
    const currentTime = Date.now();
    const deltaTime = startTime - currentTime;

    this.updateClockFace(deltaTime);
    
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;

      this.updateClockFace(deltaTime);
    }, 1000);
    };

    updateClockFace (time) {  
     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
     const secs = pad(Math.floor((time % (1000 * 60)) / (1000)));
    
    refs.daysFace.textContent = days;
    refs.hoursFace.textContent = hours;
    refs.minsFace.textContent = mins;
    refs.secsFace.textContent = secs;
    };
};

function pad(value) {
    return String(value).padStart(2, '0');
  };


const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 24, 2020'),
});


