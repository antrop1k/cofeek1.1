let vector = [];
let net; // глобальная переменная для сети
let trainingData = [];

function loading() {
  document.querySelector('.container-loading').style.display = 'block';
  console.log('loading...');
}

// Сначала показываем блок
loading();

// Затем начинаем загрузку и обучение
fetch('trainData.json')
  .then(response => response.json())
  .then(data => {
    trainingData = data;
    trainNetwork();
    loadingEnd()
  });

function trainNetwork() {
  net = new brain.recurrent.LSTM(); // создаем сеть
  net.train(trainingData, {
    iterations: 200,
    errorThresh: 0.005,
    log: true,
    logPeriod: 10
  });
}

// Обучение при запуске скрипта
// trainNetwork();

function neyroBrain(inputText) {
  const response = net.run(inputText);
  handleNeyroSend(response);
}




function loading(){
    document.querySelector('.container-loading').style.display = 'block'; // или 'block'
    console.log('loading...')
    container.style.display = 'none';
}

function loadingEnd(){
  container.style.display = 'flex';
  document.querySelector('.container-loading').style.display = 'none';
}