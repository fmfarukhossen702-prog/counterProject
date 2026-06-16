


let counter = document.querySelectorAll('.counter');
let arr = Array.from(counter)
   
function handleClick () { arr.forEach((data)=>{
    let count = 0    
    console.log(data.dataset.number);

  let stopp = (()=>{ 

     count++
    data.innerHTML = count;    
   
    if (count == data.dataset.number){
        clearInterval(stopInterval);
    }})
    let stopInterval = setInterval(() => {
        stopp()
    },data.dataset.number/100)
   })
}



function waingMove(){
  let message = document.getElementById("message");
  let count = 10;

  let time = setInterval(() => {
    message.classList.add("pop");
    setTimeout(() => {
      message.classList.remove("pop");
    }, 300);

    message.innerHTML = count;
    count--;
    if (count < 0) {
      clearInterval(time);
      message.innerHTML = " ";
      message.classList.add("text-black");
      message.style.backgroundImage = "url('/image/arz.jpg')";
      message.style.backgroundSize = "cover";
      message.style.backgroundPosition = "center";
      message.style.backgroundRepeat = "no-repeat";
    }
  }, 1000);

  let messag = document.getElementById("sevenUp");

  let counte = 10;

  let timee = setInterval(() => {
    messag.classList.add("pop");
    setTimeout(() => {
      messag.classList.remove("pop");
    }, 300);

    messag.innerHTML = counte;
    counte--;
    if (counte < 0) {
      clearInterval(timee);
      messag.innerHTML = "";
      // messag.classList.add("text-black");
      messag.style.backgroundImage = "url('/image/brazil.jpg')";
      messag.style.backgroundSize = "cover";
      messag.style.backgroundPosition = "center";
      messag.style.backgroundRepeat = "no-repeat";
    }
  }, 1000);
}
