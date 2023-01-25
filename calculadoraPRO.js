alert('¡Bienvenido a su calculadora! Tendrá dos opciones: calcular la suma, resta, multiplicación y división de los valores numéricos introducidos; o calcular solo la raíz cuadrada de un valor numérico.')

let numbers=[]
let num
let more


function getNumbers(){  
let num = prompt('Por favor, inserte valores numéricos.');
  if(isNaN(num)){
    alert('¡La calculadora solo acepta valores numéricos!')
  }else if(!isNaN(num)){
     numbers.push(parseFloat(num));
  }
  more = confirm('¿Quieres añadir valores numéricos?');
  while(more===true){
  let num = prompt('Por favor, inserte valores numéricos.');
   if(isNaN(num)){
    alert('¡La calculadora solo acepta valores numéricos!')
  }else if(!isNaN(num)){
     numbers.push(parseFloat(num));
  }
  more = confirm('¿Quieres añadir más valores?');
}
return numbers
}

getNumbers()


function showList(){
if (numbers.length > 1){
console.log('Los valores introducidos son: ' + numbers)
}else if(numbers.length ===1){
  console.log('El único valor introducido es: ' + ' ' + numbers)
}
}
showList()


function calculate (){
if(numbers.length ===1){
  raiz = Math.sqrt(numbers[0])
  raiz = Math.round(raiz * 1000) / 1000
  console.log('La raiz cuadrada de ' + numbers[0] + ' es '  + raiz)

}else if(numbers.length > 1){
let numberArray = numbers.map(Number)

let sum = 0;
numberArray.forEach(number => sum += number);
sum = Math.round(sum * 1000) / 1000
console.log('La suma de los valores introducidos es: ' + sum)

let rest
let firstNumber = numberArray[0]
for(let i =1; i<numberArray.length; i++) {
  rest = firstNumber -= numberArray[i]
}
   rest= Math.round(rest * 1000) / 1000
   console.log('La resta de los valores introducidos es: ' + rest)

let mult = 1;
numberArray.forEach(number => mult *= number);
mult = Math.round(mult * 1000) / 1000
console.log('La multiplicación de los valores introducidos es: ' + mult)

let div
let startNumber = numberArray[0]
for(let i =1; i<numberArray.length; i++) {
  div = startNumber /= numberArray[i]
} 
if(isFinite(div)){
  div = Math.round(div * 1000) / 1000
  console.log('La división de los valores introducidos es: ' + div)
}else{
console.log('Lo siento, no se puede dividir entre cero.')
}
}
  
alert('Sus resultados aparecerán por consola.')
}


calculate()


function resetArray(){
 numbers.length= 0
 return numbers
  }


function calculateMore(){
  let yes = confirm('¿Quiere volver a usar la calculadora?')
  if (yes === true){
    resetArray()
    getNumbers()
    showList()
    calculate()
    calculateMore()
  }else{
   alert('Muchas gracias por usar esta calculadora :)')
}
}

calculateMore()
