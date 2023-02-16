function generate4digit(){
    const digits = Math.round(Math.random() * 10000);
    return digits;
}

function generatePin (){
    const pin = generate4digit();
    const pinString = pin + '';
    if (pinString.length === 4){
        return pinString;
    }
    else {
        return generatePin();
    }
}

document.getElementById('generate-btn').addEventListener('click', function(){
    const generatedPin = generatePin ();
    const showPinElement = document.getElementById('show-pin');
    showPinElement.value = generatedPin;
})


document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calField = document.getElementById('cal-field');
    const typedNumber = calField.value;
    if(isNaN(number)){
        if (number === 'C'){
            calField.value = '';
        }
        else if (number === '<'){
            const typedDigit = typedNumber.split('');
            typedDigit.pop();
            const remainingDigit = typedDigit.join('');
            calField.value = remainingDigit;
        }
    }
    else{
        const newTypedNumber = typedNumber + number;
        calField.value = newTypedNumber;
    }
})


document.getElementById('pin-submit').addEventListener('click', function(){
    const genPin = document.getElementById('show-pin').value;
    const typedPin = document.getElementById('cal-field').value;

    const correctMessage = document.getElementById('correct');
    const incorrectMessage = document.getElementById('incorrect');

    if (genPin === typedPin) {
        correctMessage.style.display = 'block';
        incorrectMessage.style.display = 'none';
    }

    else{
        incorrectMessage.style.display = 'block';
        correctMessage.style.display = 'none';
    }
})