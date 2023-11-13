let btnConvert = document.querySelector(`[data-conv]`);

btnConvert.addEventListener(`click`, calcConversion);

let display = document.querySelector(`[data-fahr]`);

function calcConversion(){
    let celsiusNumber = document.querySelector(`[data-celc]`).value;

    let answer = eval(`${celsiusNumber} * 9/5 + 32`);
    console.log(answer);
    display.value = answer;
}