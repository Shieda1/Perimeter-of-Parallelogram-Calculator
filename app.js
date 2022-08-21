// https://calculator.swiftutors.com/perimeter-of-parallelogram-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const perimeterofParallelogramRadio = document.getElementById('perimeterofParallelogramRadio');
const widthoftheParallelogramRadio = document.getElementById('widthoftheParallelogramRadio');
const lengthoftheParallelogramRadio = document.getElementById('lengthoftheParallelogramRadio');

let perimeterofParallelogram;
let widthoftheParallelogram = v1;
let lengthoftheParallelogram = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

perimeterofParallelogramRadio.addEventListener('click', function() {
  variable1.textContent = 'Width of the Parallelogram';
  variable2.textContent = 'Length of the Parallelogram';
  widthoftheParallelogram = v1;
  lengthoftheParallelogram = v2;
  result.textContent = '';
});

widthoftheParallelogramRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of Parallelogram';
  variable2.textContent = 'Length of the Parallelogram';
  perimeterofParallelogram = v1;
  lengthoftheParallelogram = v2;
  result.textContent = '';
});

lengthoftheParallelogramRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of Parallelogram';
  variable2.textContent = 'Width of the Parallelogram';
  perimeterofParallelogram = v1;
  widthoftheParallelogram = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(perimeterofParallelogramRadio.checked)
    result.textContent = `Perimeter of Parallelogram = ${computePerimeterofParallelogram().toFixed(2)}`;

  else if(widthoftheParallelogramRadio.checked)
    result.textContent = `Width of the Parallelogram = ${computeWidthoftheParallelogram().toFixed(2)}`;

  else if(lengthoftheParallelogramRadio.checked)
    result.textContent = `Length of the Parallelogram = ${computeLengthoftheParallelogram().toFixed(2)}`;
})

// calculation

function computePerimeterofParallelogram() {
  return 2 * (Number(widthoftheParallelogram.value) + Number(lengthoftheParallelogram.value));
}

function computeWidthoftheParallelogram() {
  return (Number(perimeterofParallelogram.value) / 2) - Number(lengthoftheParallelogram.value);
}

function computeLengthoftheParallelogram() {
  return (Number(perimeterofParallelogram.value) / 2) - Number(widthoftheParallelogram.value);
}