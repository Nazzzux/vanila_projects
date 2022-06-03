let deadline = document.querySelector('.countdown__inner').dataset.time;

let interval;
const updateClock = () => {
   const date = new Date().getTime();
   const dateDeadLine = new Date(deadline).getTime();
   const timeRemaining = (dateDeadLine - date) / 1000;

   const days = Math.floor(timeRemaining / 60 / 60 / 24);
   const hours = Math.floor((timeRemaining / 60 / 60) % 24);
   const minutes = Math.floor((timeRemaining / 60) % 60)
   const seconds = Math.floor(timeRemaining % 60);

   const fDays = days < 10 ? '0' + days : days;
   const fHours = hours < 10 ? '0' + hours : hours;
   const fMinutes = minutes < 10 ? '0' + minutes : minutes;
   const fSeconds = seconds < 10 ? '0' + seconds : seconds;

   document.querySelector('.countdown__inner').innerHTML = `
      <div class="countdown__wrapper">
         <div class="countdown__values">${fDays}</div>
         <div class="countdown__text">days</div>
      </div>:
      <div class="countdown__wrapper">
         <div class="countdown__values">${fHours}</div>
         <div class="countdown__text">hours</div>
      </div>:
      <div class="countdown__wrapper">
         <div class="countdown__values">${fMinutes}</div>
         <div class="countdown__text">minutes</div>
      </div>:
      <div class="countdown__wrapper">
         <div class="countdown__values">${fSeconds}</div>
         <div class="countdown__text">seconds</div>
      </div>
      `
   document.querySelector('.countdown__span').innerHTML = ` ${deadline}`

   if (timeRemaining <= 0) {
      clearInterval(interval)
      document.querySelector('.countdown__inner').innerHTML = `<div class="countdown__values">00:00:00</div>`
   }
}
interval = setInterval(updateClock, 500);