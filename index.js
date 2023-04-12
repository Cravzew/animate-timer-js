const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = (timestamp) => {

    const interval = setInterval(() => {

        const hours = Math.floor(timestamp / 60 / 60);
        const minutes = Math.floor(timestamp / 60) - (hours * 60);
        const seconds = timestamp % 60;

        const formatted = [
            hours.toString().padStart(2, '0'),
            minutes.toString().padStart(2, '0'),
            seconds.toString().padStart(2, '0')
        ].join(':');

        timerEl.innerHTML = formatted

        if (inputEl.value) clearInterval(interval)

        if (timestamp !== 0) {
            timestamp--;
        } else {
            clearInterval(interval)
        }

    }, 1000)
};

buttonEl.addEventListener('click', () => {
    const timestamp = Number(inputEl.value)

    createTimerAnimator(timestamp);

    inputEl.value = '';
});
