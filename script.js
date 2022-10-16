document.getElementById("start").addEventListener("click", stage1Oprtn);
let problemsEle = document.getElementsByClassName("problems")[0];
let calculateEle = document.getElementById("calculate");
calculateEle.addEventListener('click',stage2Operation);


function stage1Oprtn() {
    let operationEle = document.getElementById("operation"),
        rangeEle = document.getElementById("range"), randomNumber1, randomNumber2,
        operation = operationEle.value,
        range = parseInt(rangeEle.value);

    resetproblemsEle();
    for (i = 1; i <= 16; i++) {
        randomNumber1 = generateRandomNumber(range);
        randomNumber2 = generateRandomNumber(range);

        updateProblem(randomNumber1, randomNumber2, operation);
    }
    enableCalculate();
}
function stage2Operation(){
    // console.log("Hiii");
    let probele =document.getElementsByClassName("problem"),mark=0;
    // console.log(probele.length);
    for(i=0;i<probele.length;i++){
        // console.log(probele[i]);
        // console.log(document);
       let prob1Ele=probele[i],
        numb1Ele,numb2Ele,numbValue1,numbValue2,expectedAns,actual,actualAns,
       
        // To find Operation
        oprEle=prob1Ele.getElementsByClassName("operations")[0],
        opType=oprEle.innerText;
    // console.log(oprEle);
        // console.log(opType);

        // Get Number1
        numb1Ele=prob1Ele.getElementsByClassName("number1")[0];
        numbValue1=parseInt(numb1Ele.innerText);
        console.log(numbValue1);

        // Get Number2
        numb2Ele=prob1Ele.getElementsByClassName("number2")[0];
        numbValue2=parseInt(numb2Ele.innerText);
        console.log(numbValue2);

        // Find Expected answer
        if(opType=="+"){
            expectedAns=numbValue1 + numbValue2;
        }
        else if(opType=="-"){
            expectedAns=numbValue1 - numbValue2;
        }
        else if(opType=="*"){
            expectedAns=numbValue1 * numbValue2;
        }
        else {
            expectedAns=numbValue1/numbValue2;
        }

    // //Get Actual Answer 
        actual=prob1Ele.getElementsByClassName("answer")[0];
        actualAns=(actual.value);
        console.log(actualAns);
        console.log(expectedAns);
        // Comparing Answers
        if(expectedAns==actualAns){
            mark++;
        }
        //if true add mark
        
    }
    alert("Your Mark is "+mark)
    
}

function generateRandomNumber(max) {
    return parseInt(Math.random() * max);
}
function enableCalculate() {
    calculateEle.removeAttribute('disabled');
}
function texttosymbol(text) {
    switch (text) {
        case "add":
            return '+'
            break;
        case "sub":
            return '-'
            break;
        case "multiplication":
            return '*'
            break;
        case "division":
            return '/'
            break;
        default:
            return '/'
            break;
    }
}
function resetproblemsEle() {
    problemsEle.innerHTML = "";
}
function updateProblem(number1, number2, operation) {
    // create Problem div
    let problemEle = document.createElement('div');
    problemEle.setAttribute("class", "problem");

    // Create h3 for number1
    let number1Ele = document.createElement('h3');
    number1Ele.setAttribute("class","number1")

    // update value foe number1
    number1Ele.innerText = number1;
    // console.log(number1Ele);

    // Create h3 for number2 
    let number2Ele = document.createElement('h3');
    number2Ele.setAttribute("class","number2")

    // update value for number2
    number2Ele.innerText = number2;
    // console.log(number2Ele);

    // Create h3 for operation
    let oprtnEle = document.createElement("h3");
    oprtnEle.setAttribute("class","operations");

    // update symbol for Operation
    oprtnEle.innerText = texttosymbol(operation);
   // console.log(oprtnEle);

    // create hr
    let hrEle = document.createElement('hr');

    // create input box 
    let inptEle = document.createElement('input');

    //Update input class name
    inptEle.setAttribute("class", 'answer');

    // create input type text
    inptEle.setAttribute("type", 'text');

    // append(add)hr,h3's,input inside problem

    problemEle.append(number1Ele);
    problemEle.append(oprtnEle);
    problemEle.append(number2Ele);
    problemEle.append(inptEle);

    // Append Inside Problems 
    problemsEle.append(problemEle)
}

