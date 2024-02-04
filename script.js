
const totalArea = document.querySelector('.totalArea');
const answerButton = document.querySelectorAll('.getAnswer');

// let answer 

function getNumberValue (selector) {
    const element =document.querySelector(selector);
    return parseFloat(element.value) || 0;
}



function calculate () {
    const number1 = getNumberValue('.number1');
    const number2 = getNumberValue('.number2');
    return number1 * number2;
};

function updateDisplay () {
    answerButton.forEach (answered => {
        answered.addEventListener("click", function () {
            const answer = calculate();
            totalArea.textContent = answer;
            console.log(answer)
        })
    })
    
};



updateDisplay();











