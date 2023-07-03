let [sec,min,hr] = [0,0,0];
let time = document.querySelector(".timer");
let int = null;

document.getElementById("start").addEventListener("click",()=>{
    if(int!=null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,1000);
})

document.getElementById("stop").addEventListener("click",()=>{
    clearInterval(int);
})

document.getElementById("reset").addEventListener("click",()=>{
        clearInterval(int);
        [sec,min,hr] = [0,0,0];
        time.innerHTML = "00:00:00";
})

function displayTimer(){
    sec+=1;
    if(sec==60)
    {
        sec = 0;
        min+=1;
        if(min==60)
        {
            min = 0;
            hr+=1;
        }
    }

    let h = hr<10?"0"+hr : hr;
    let m = min<10?"0"+min : min;
    let s = sec<10?"0"+sec : sec;

    time.innerHTML = `${h}:${m}:${s}`;
}