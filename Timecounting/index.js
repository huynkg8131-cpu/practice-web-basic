const display = document.querySelector(".display");
const Start = document.querySelector(".PressStart");
const End = document.querySelector(".PressEnd");
const Pause = document.querySelector(".PressPause");

let timer = null;
let elapsed = 0;
let startedAt = null;

function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let hour = 0;
  let min  = 0;
  let sec  = 0;

  while (totalSeconds != 0) {
    if (totalSeconds >= 3600) {
      hour++;
      totalSeconds -= 3600;
    } else if (totalSeconds >= 60) {
      min++;
      totalSeconds -= 60;
    } else {
      sec = totalSeconds; 
      totalSeconds = 0;   
    }
  }

  return [hour, min, sec]
    .map(v => String(v).padStart(2, '0'))
    .join(':');
}

Start.addEventListener('click',()=>{
    startedAt = Date.now() - elapsed;
    timer = setInterval(() =>{
        elapsed = Date.now() - startedAt;
        display.textContent = formatTime(elapsed)
    },10);
    Start.disabled = true;
    Pause.disabled = false;
});

Pause.addEventListener('click',()=>
{
    clearInterval(timer);

    Start.disabled = false;
    Pause.disable = true;
    Start.textContent = "Continue";
});

End.addEventListener('click',() =>{
    clearInterval(timer);
    elapsed = 0;
    display.textContent = "00:00:00";
    Start.disabled = false;
    Pause.disabled = true;
    Start.textContent = "Start";

})