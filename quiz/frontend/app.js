const mainDiv = document.querySelector('.main');
const homePg = createHomePg()
const quesPg = createQuesPg()
const endPg = createEndPg();
mainDiv.appendChild(homePg);

//global values
let noOfQues = 5;
let quesArr, currentQuestion = -1;
let score = 0, timeSec, timerAddress;


function createHomePg() {
    let homeDiv = document.createElement('div');
    homeDiv.style.height = '100%'

    let modeDiv = document.createElement('div');
    modeDiv.classList.add('modeDiv');
    let easyLbl = createRadioLbl('easy', 'mode');
    let mediumLbl = createRadioLbl('medium', 'mode');
    let hardLbl = createRadioLbl('hard', 'mode');
    easyLbl.classList.add('mode');
    mediumLbl.classList.add('mode');
    hardLbl.classList.add('mode');
    modeDiv.appendChild(easyLbl);
    modeDiv.appendChild(mediumLbl);
    modeDiv.appendChild(hardLbl);
    homeDiv.appendChild(modeDiv);

    let startDiv = document.createElement('div');
    startDiv.setAttribute('id', 'startDiv');
    startDiv.classList.add('flex');
    let startBtn = document.createElement('button');
    startBtn.setAttribute('id', 'startBtn');
    startBtn.appendChild(document.createTextNode('START'));
    startBtn.addEventListener('click', startHandler)
    startDiv.appendChild(startBtn);
    homeDiv.appendChild(startDiv)

    return homeDiv;
}
function createRadioLbl(id, name) {
    let label = document.createElement('label');
    label.setAttribute('id', `${id}`);
    label.setAttribute('for', `${id}Radio`);

    let radio = document.createElement('input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', `${name}`);
    radio.setAttribute('id', `${id}Radio`);
    radio.setAttribute('value', `${id}`);
    label.appendChild(radio)

    //create div in label
    let divLbl = document.createElement('div');
    divLbl.classList.add('divLbl');
    divLbl.innerText = id;
    label.appendChild(divLbl);

    return label;
}
function createQuesPg() {
    //quesDiv parent for all tags of this page
    let quesDiv = document.createElement('div');
    quesDiv.setAttribute('id', 'quesDiv');
    quesDiv.style.height = '100%';

    //create p element for question
    let quesP = document.createElement('p');
    quesP.setAttribute('id', 'quesP');
    quesDiv.appendChild(quesP);

    //option div for having various radio buttons
    let optionDiv = document.createElement('div');
    optionDiv.setAttribute('id', 'optionDiv');
    let option1 = createRadioLbl('0', 'option')
    let option2 = createRadioLbl('1', 'option')
    let option3 = createRadioLbl('2', 'option')
    let option4 = createRadioLbl('3', 'option')
    optionDiv.appendChild(option1);
    optionDiv.appendChild(option2);
    optionDiv.appendChild(option3);
    optionDiv.appendChild(option4);
    quesDiv.appendChild(optionDiv);

    //two buttons for submit and next
    let bottomDiv = document.createElement('div');
    bottomDiv.setAttribute('id', 'bottomDiv');
    let timer = document.createElement('div');
    timer.setAttribute('id', 'timer');
    let resultP = document.createElement('p');
    resultP.setAttribute('id', 'bottomResult');
    // resultP.style.width = '40%'
    // resultP.innerHTML = 'he'

    let submitBtn = document.createElement('button');
    submitBtn.setAttribute('id', 'submitBtn');
    submitBtn.innerText = 'Submit';
    submitBtn.style.width = '20%'
    submitBtn.addEventListener('click', submit);
    let nextBtn = document.createElement('button');
    nextBtn.setAttribute('id', 'nextBtn');
    nextBtn.disabled = true;
    nextBtn.innerText = 'Next';
    nextBtn.style.width = '20%'
    nextBtn.addEventListener('click', changeQues);
    bottomDiv.appendChild(timer);
    bottomDiv.appendChild(resultP);
    bottomDiv.appendChild(submitBtn);
    bottomDiv.appendChild(nextBtn);
    quesDiv.appendChild(bottomDiv);
    return quesDiv;
}
function createEndPg() {
    let endDiv = document.createElement('div');
    endDiv.style.height = '100%';
    endDiv.classList.add('flex-vertical');

    //Result
    let result = document.createElement('div');
    result.setAttribute('id','resultScreen');

    //home button
    let homeBtn = document.createElement('button');
    homeBtn.setAttribute('id', 'homeBtn');
    homeBtn.innerHTML = '<h2>Home</h2>'
    homeBtn.addEventListener('click', goToHome);

    endDiv.appendChild(result);
    endDiv.appendChild(homeBtn);

    return endDiv;
}



async function startHandler() {
    let mode;
    try {
        mode = document.querySelector('input[name="mode"]:checked').value;
        //fetch the questions
        try {
            let response = await fetch(`http://localhost:3000/ques?mode=${mode}&&n=${noOfQues}`)
            quesArr = await response.json();
            mainDiv.removeChild(homePg);
            mainDiv.appendChild(quesPg);

            //update the questions
            changeQues();

            //set Timer
            let timerDisplay = document.querySelector('#timer');
            timerDisplay.innerHTML = `Time left : ${timeSec}`;
            timerAddress = setInterval(() => {
                timeSec--;
                timerDisplay.innerHTML = `Time left : ${timeSec}`;
                if (timeSec <= 0) {
                    changeQues();
                }
            }, 1000)

        }
        catch (err) {
            console.log(err);
        }
    }
    catch {
        alert("Select level")
    }


}

function changeQues() {
    currentQuestion++;
    if (currentQuestion < noOfQues) {

        //update the question on screen
        let quesP = document.querySelector('#quesP');
        quesP.innerText = `${quesArr[currentQuestion].ques}`;
        //update options
        let options = document.querySelectorAll('.divLbl');
        options.forEach((element, i) => {
            element.innerText = `${quesArr[currentQuestion].options[i]}`
            // element.style.backgroundColor = 'orange';
            // element.classList -= 'correct';
            element.classList.remove('correct');
            element.classList.remove('wrong');
        })

        //disable the next button
        document.querySelector('#nextBtn').disabled = true;
        document.querySelector('#submitBtn').disabled = false;

        //ResetTimer
        timeSec = 30;
        let timerDisplay = document.querySelector('#timer');
        timerDisplay.innerHTML = `Time left : ${timeSec}`;
    }
    else {
        //show result screen
        mainDiv.removeChild(quesPg);
        mainDiv.appendChild(endPg);
        let resultScreen = document.getElementById('resultScreen');
        resultScreen.innerHTML = `<h2>You scored ${score} out of ${noOfQues}</h2>`
    }
}

function submit() {
    try {
        let radioSelected = document.querySelector('input[name="option"]:checked');
        let ans = radioSelected.value;
        if (ans == quesArr[currentQuestion].ans) {
            radioSelected.parentElement.children[1].classList.add('correct');

            //increment score
            score++;
        }
        else {
            radioSelected.parentElement.children[1].classList.add('wrong')

        }
        //Set radio's and buttons
        radioSelected.checked = false;
        document.querySelector('#submitBtn').disabled = true;
        document.querySelector('#nextBtn').disabled = false;

    } catch {
        alert("Choose any option");
    }
}

function goToHome() {
    currentQuestion = -1;
    score = 0;
    clearInterval(timerAddress);    
    mainDiv.removeChild(endPg);
    mainDiv.appendChild(homePg);
}