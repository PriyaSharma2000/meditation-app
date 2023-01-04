const circleProgress = document.querySelector('.circle-progress');
const numberOfBreaths = document.querySelector('.breath-input');
const start = document.querySelector('.start');
const instructions = document.querySelector('.instructions');
const breathsText = document.querySelector('.breaths-text');

let breathsLeft = 5;

//watching for selected breaths from user
numberOfBreaths.addEventListener('change',()=>{
    breathsLeft = numberOfBreaths.value;
    breathsText.innerText = breathsLeft;
});

// grow/shrink circle
const growCircle = () => {
    circleProgress.classList.add("circle-grow");
    setTimeout(() => {
        circleProgress.classList.remove("circle-grow");
    },8000)
};

//breathing instructions
const breathTextUpdate = () => {
    breathsLeft--;
    breathsText.innerText = breathsLeft;
    instructions.innerText = "Breath in";
    setTimeout(()=>{
        instructions.innerText = "Hold breath for 4 seconds";
        setTimeout(() => {
            instructions.innerText = "Breath out through your mouth"
        }, 4000);
    },4000)
}

// Breathing App Function
const breathingApp = () => {
    const breathingFunc = setInterval(() => {
        if (breathsLeft === 0) {
            clearInterval(breathingFunc);
            instructions.innerText = "Breathing session completed. Click 'Begin' to start another session!";
            start.classList.remove("button-inactive");
            breathsLeft = numberOfBreaths.value;
            breathsText.innerText = breathsLeft;
            return;
        }
        growCircle();
        breathTextUpdate();
    },12000)
}

// Start breathing
start.addEventListener('click',()=>{
    start.classList.add("button-inactive");
    breathingApp();
    growCircle();
    breathTextUpdate();
})