window.addEventListener('DOMContentLoaded', () => {

    const setDate = () => {
        const hourHand = document.querySelector('.hour-hand'),
        minuteHand = document.querySelector('.min-hand'),
        secondHand = document.querySelector('.second-hand'),
        now = new Date(),
        hours = now.getHours(),
        minutes = now.getMinutes(),
        seconds = now.getSeconds();
        let hoursHalf;

        if (hours > 11)  hoursHalf = hours - 12;

        hourHand.style.transform = `rotate(${90 + hoursHalf * 30}deg)`;
        minuteHand.style.transform = `rotate(${90 + minutes * 6}deg)`;
        secondHand.style.transform = `rotate(${90 + seconds * 6}deg)`;
        console.log(hours)
    }

    setInterval(()=> {
        setDate()
    }, 1000);

});
