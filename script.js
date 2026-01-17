let input = document.getElementById('input-panel');

let button = document.getElementById('button-arrow');
let main = document.getElementById('main');
let container = document.getElementById('container');

async function handleMySend() {
    if (input.value !== "") {
        let messageMy = document.createElement('div');
        messageMy.classList.add('message', 'myMessage');
        messageMy.textContent = input.value;
        main.appendChild(messageMy);
        const currentInput = input.value;
        input.value = "";

        // запуск нейросети с текущим вводом
        neyroBrain(currentInput);
    }
}

button.addEventListener('click', handleMySend);

input.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        handleMySend();
    }
});

function handleNeyroSend(response){
    let messageNeyro = document.createElement('div');
    messageNeyro.classList.add('message', 'neyroMessage');
    messageNeyro.textContent = response;
    main.appendChild(messageNeyro);
}