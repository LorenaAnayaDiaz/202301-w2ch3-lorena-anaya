//Variables
let firstValue 
let operation
let secondValue

const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const valueElement = document.querySelector('.value');

const clearAllNumbers = document.querySelector('.ac');
const changeNumberSign = document.querySelector('.pm');
const percent = document.querySelector('.percent');

const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const equal = document.querySelector('.equal');

const decimal = document.querySelector('.decimal');
const number0 = document.querySelector('.number-0');
const number1 = document.querySelector('.number-1');
const number2 = document.querySelector('.number-2');
const number3 = document.querySelector('.number-3');
const number4 = document.querySelector('.number-4');
const number5 = document.querySelector('.number-5');
const number6 = document.querySelector('.number-6');
const number7 = document.querySelector('.number-7');
const number8 = document.querySelector('.number-8');
const number9 = document.querySelector('.number-9');


//Eventos
decimal.addEventListener('click', ()=> {
    valueElement.textContent = valueElement.textContent + '.'
})
number0.addEventListener('click', ()=> {
    valueElement.textContent = valueElement.textContent + '0'
})
number1.addEventListener('click', ()=> {
    valueElement.textContent = valueElement.textContent + '1'
})
number2.addEventListener('click', ()=> {
    valueElement.textContent = valueElement.textContent + '2'
})
number3.addEventListener('click', ()=> {
    valueElement.textContent = valueElement.textContent + '3'
})
number4.addEventListener('click', ()=> {
    valueElement.textContent = valueElement.textContent + '4'
})
number5.addEventListener('click', ()=> {
    valueElement.textContent = valueElement.textContent + '5'
})
number6.addEventListener('click', ()=> {
    valueElement.textContent = valueElement.textContent + '6'
})
number7.addEventListener('click', ()=> {
    valueElement.textContent = valueElement.textContent + '7'
})
number8.addEventListener('click', ()=> {
    valueElement.textContent = valueElement.textContent + '8'
})
number9.addEventListener('click', ()=> {
    valueElement.textContent = valueElement.textContent + '9'
})

clearAllNumbers.addEventListener('click', ()=> {
   resetCalculator()
})

addition.addEventListener('click', ()=> {
  firstValue =  valueElement.textContent
  operation= '+'
  clearNumbers()
 })

 subtraction.addEventListener('click', ()=> {
    firstValue =  valueElement.textContent
    operation= '-'
    clearNumbers()
   })

multiplication.addEventListener('click', ()=> {
    firstValue =  valueElement.textContent
    operation= '*'
    clearNumbers()
   })

 division.addEventListener('click', ()=> {
    firstValue =  valueElement.textContent
    operation= '/'
    clearNumbers()
   })

equal.addEventListener('click', ()=> {
    secondValue =  valueElement.textContent
    solve()
   })

percent.addEventListener('click', ()=> {
    valueElement.textContent =  parseFloat(valueElement.textContent)/100
})

changeNumberSign.addEventListener('click', ()=> {
    if(parseFloat(valueElement.textContent)>0){
       valueElement.textContent = parseFloat(-valueElement.textContent) 
    }else{
        valueElement.textContent = parseFloat(-valueElement.textContent) 
    }
    
})

//Funciones
const clearNumbers = () => {
    valueElement.textContent = "";
  }

const resetCalculator = () => {
    valueElement.textContent = "";
    firstValue = 0;
    secondValue = 0;
    operation = "";
  }

const solve = () =>{
  let result = 0;
  switch(operation){
    case "+":
      result = parseFloat(firstValue) + parseFloat(secondValue);
      break;
    case "-":
        result = parseFloat(firstValue) - parseFloat(secondValue);
        break;
    case "*":
      result = parseFloat(firstValue) * parseFloat(secondValue);
      break;
    case "/":
      result = parseFloat(firstValue) / parseFloat(secondValue);
      break;
  }
  resetCalculator();
  valueElement.textContent = result;
}


//Función para la hora
const updateTime = () => {
    const currentTime = new Date();
  
    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
  
    
    hour.textContent = currentHour.toString();
    minute.textContent = currentMinute.toString().padStart(2, '0');
  }
  setInterval(updateTime, 1000);
  updateTime();