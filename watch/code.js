let hours = document.querySelector('h1');
let minutes = document.querySelector('h3');
let seconds = document.querySelector('h5');



setInterval(()=>{
    let time = new Date();
    hours.innerHTML = time.getHours()
    minutes.innerHTML = time.getMinutes()
    seconds.innerHTML = time.getSeconds()
}, 1000)


