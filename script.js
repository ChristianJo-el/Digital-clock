const clock = document.querySelector(".clock");

setInterval(() => {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();


    const time = `<span>${hour}</span> :
                  <span>${min}</span> :
                  <span>${sec}</span>`;
    clock.innerHTML = time;
}, 1000);





