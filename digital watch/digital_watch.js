setInterval(() => {
   let time = new Date();
   let hour = time.getHours();
   let min = time.getMinutes();
   let sec = time.getSeconds();

   hour = hour < 10 ? '0' + hour : hour;
   min = min < 10 ? '0' + min : min;
   sec = sec < 10 ? '0' + sec : sec;

   document.querySelector('.hours').innerHTML = hour;
   document.querySelector('.minutes').innerHTML = min;
   document.querySelector('.seconds').innerHTML = sec;
}, 1000);