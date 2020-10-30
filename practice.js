//! Вебинар 21

//! setTimeout() setInterval()

//? Выводим нотификашку и закрываем по клику на нее или через 3 сек исчезает сама
// const refs = {
//     notification: document.querySelector('.js-notification'),
// };
// let timeuotId = null;

// refs.notification.addEventListener('click', notificationClickHandler);

// showNotification();

// function notificationClickHandler () {
//     hideNotification();
//     clearTimeout(timeuotId);
// };

// function showNotification () {
//     refs.notification.classList.add('is-visible');

//     timeuotId = setTimeout(() => {
//         hideNotification();
//     }, 3000);
// };

// function hideNotification () {
//     refs.notification.classList.remove('is-visible');
// }








//! Таймеры

// const date = new Date();
// console.dir(date); // object

// console.log(date.getSeconds()); // 40

// const date = Date.now()
// console.dir(date); // 1603732853738



// const date = new Date(500000000000);
// console.log(date.getTime()); // 500000000000

// const currentDate = Date.now();
// console.log(currentDate);

// const delta = currentDate - date;
// console.log(delta);




const refs = {
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    clockface: document.querySelector('.js-clockface'),
};

const timer = {
    intervalId: null,
    isActive: false,

    start(){
        if (this.isActive) {
            return;
        };

        this.isActive = true;
        const startTime = Date.now();
        updateClockface(0);

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            updateClockface(deltaTime);
        }, 1000);
    },

    stop(){
        clearInterval(this.intervalId);
        this.isActive = false;
        this.intervalId = null;
        updateClockface(0);
    }
};

refs.startBtn.addEventListener('click', timer.start.bind(timer)); //! при передачи метода, как коллбека в обработчик события необходимо привязать контекст
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockface (time) {
    const hours = pad(Math.floor((time%(1000*60*60*24))/(1000*60*60)));
    const mins= pad(Math.floor((time%(1000*60*60))/(1000*60)));
    const secs = pad(Math.floor((time%(1000*60))/1000));
    
    refs.clockface.textContent = `${hours}:${mins}:${secs}`;
};

function pad (value) {
    return String(value).padStart(2, '0'); // до какого количества символов забить строку и чем забить 
};