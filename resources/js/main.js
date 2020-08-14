// Adivina el número

let count = 0;
let mysterious_number = Math.floor(Math.random() * 101);
let result_alert = document.getElementById('result-alert');
let alert_bootstrap = document.getElementById('alert');
let try_alert = document.getElementById('try-alert');
try_alert.className = 'alert alert-info'
try_alert.innerHTML = "Intentos hasta ahora: " + count;
let btn_try = document.getElementById('btn-try');
btn_try.disabled = true;
let number_received = document.getElementById('number').value;
let message_validation = document.getElementById('message-validation');
let more_or_less = '';
const regex = /^\d*$/;

function partialGuessNumber() {
    number_received = document.getElementById('number').value;
    count = count + 1;

    if (number_received) {
        if (mysterious_number == number_received) {
            result_alert.className = '';
            alert_bootstrap.innerHTML = "¡Correcto! El número secreto es " + number_received + ".";
            alert_bootstrap.className = 'alert alert-success'
        } else {
            result_alert.className = '';
            alert_bootstrap.className = 'alert alert-danger'

            more_or_less = mysterious_number > number_received ? 'mayor' : 'menor';

            alert_bootstrap.innerHTML = "Fallaste, el número secreto es " + more_or_less + " a " + number_received + ".";
        }

        try_alert.innerHTML = "Intentos hasta ahora: " + count;
    }
}

function guessNumber(e) {
    if (e) {
        if (e.keyCode === 13) {
            this.partialGuessNumber();
        }
    } else {
        this.partialGuessNumber();
    }
}

function reset() {
    number_received = document.getElementById('number').value = '';
    count = 0;
    try_alert.innerHTML = "Intentos hasta ahora: " + count;
    mysterious_number = Math.floor(Math.random() * 101);
    result_alert.className = 'alert-hidden';
    btn_try.disabled = true;
    message_validation.className = '';
}

function inputValidation() {
    number_received = document.getElementById('number').value;

    if (regex.test(number_received)) {
        if (number_received > 0 && number_received < 101) {
            btn_try.disabled = false;
            message_validation.className = '';
        } else {
            btn_try.disabled = true;
            message_validation.className = 'fail-validation';
        }
    } else {
        btn_try.disabled = true;
        message_validation.className = '';
    }
}