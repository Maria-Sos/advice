const button = document.querySelector('#btn');
button.addEventListener('click', getAdvice);
const par = document.querySelector('#par');


async function getAdvice() {
    const randomAdvice = await fetch('https://api.adviceslip.com/advice');
    const res = await randomAdvice.json()
    par.style.display = "block";
    par.textContent = res.slip.advice;
}

const text = "Get advice for today 📜";
let i = 0;
const speed = 100;
const textSize = text.length;

function type () {
    if (i < text.length) {
        document.querySelector('#title').textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}

type();