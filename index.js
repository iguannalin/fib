window.addEventListener("load", () => {
  let fib = [0,1];
  let container = document.getElementById("container");
  let timer;
  let btimer;
  let breath = 500;

  function display(num) {
    const p = document.createElement("p");
    p.innerHTML = "";
    for (let i = 0; i < num; i++) {
      p.innerHTML += Math.random()>0.5 ? "-" : "*";
    }
    p.style.lineHeight = `${num > 10 ? num / 2 : num}px`;
    container.appendChild(p);
  }

  function backwards() {
    let array = Array.from(document.getElementsByTagName("p"));
    if (array.length) container.removeChild(array[array.length-1]);
    else {
      clearInterval(btimer);
      timer = setInterval(calculate, breath);
    }
  }
  
  function calculate() {
    fib.push(fib[fib.length-1]+fib[fib.length-2]);
    display(fib[fib.length-1]);
    if (fib.length > 15) {
      btimer = setInterval(backwards, breath);
      fib = [0,1];
      clearInterval(timer);
    }
  }

  display(fib[0]);
  display(fib[1]);
  timer = setInterval(calculate, breath);
});