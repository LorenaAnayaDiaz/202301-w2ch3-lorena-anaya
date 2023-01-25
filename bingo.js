let userName 
let randomNumber
let carton = []
let usedNumbers =[]
let linea1Checked = false
let linea2Checked = false
let linea3Checked = false
let bingo = false
let points
let userNames = []
let totalPoints = []
let ranking= []


//Función para preguntar el nombre/ saludar/ indicar al usuario el sistema de puntos
const askForNameAndGreet = () => {
    userName = prompt('Por favor, indique su nombre de usuario.')
    if(!userName){
      alert('Por favor, introduzca un nombre válido.')
      askForNameAndGreet()
    }else{
    alert(`${userName}, bienvenido/a al juego del Bingo! 
    El sistema de puntos de este juego depende del número de turnos que necesite para tachar todos los números de su cartón. 
    Si lo completa en 15 turnos, obtendrá 1000 puntos; entre 16 y 30 turnos, 500 puntos; entre 30 y 45 turnos, 200 puntos; entre 45 y 70 turnos, 100 puntos; entre 70 y 85 turnos, 50 puntos; y entre 85 y 90 turnos serán solo 10 puntos. `)
   
  }

userNames.push(userName)
  }


//Función que genera un cartón y pregunta al usuario si lo quiere o no para generar otro  
const generateCarton = () => {
let cantidadNumeros = 15;
while(carton.length < cantidadNumeros ){
  let numeroAleatorio = 1 + Math.floor(Math.random()*90);
  let existe = false;
  for(var i=0;i<carton.length;i++){
	if(carton [i] == numeroAleatorio){
        existe = true;
        break;
    }
  }
  if(!existe){
    carton[carton.length] = numeroAleatorio;
  }
}
alert(userName + ' su cartón en este turno es:  Línea 1: ' + carton[0] + '-' + carton[1] + '-' + carton[2] + '-' + carton[3]+ '-' +carton[4]+

' Línea 2: ' +  carton[5] + '-' + carton[6] + '-' + carton[7] + '-' + carton[8] + '-' + carton[9]+

' Línea 3: ' + carton[10] + '-' + carton[11] + '-' + carton[12] + '-' + carton[13] + '-' + carton[14])

let change = confirm('Si desea continuar con este cartón pulse aceptar; si desea cambiarlo pulse cancelar.' )
if (change === false){
    carton = []
    generateCarton()
}
}


//Función que genera el número aleatorio de la bola del bingo
const generateRandomNumber = () => {
  randomNumber = 1 + Math.floor(Math.random()*90)

    if (usedNumbers.includes(randomNumber)){
        return generateRandomNumber()
    }

    usedNumbers.push(randomNumber)
    
    return alert('Ha salido el número ' + randomNumber)
    
}


// Función para el primer turno
const primerTurno = () => {
    generateRandomNumber()

    if(carton.includes(randomNumber)===false){
        alert('Ninguno de sus números coincide con el número que ha salido.')
    }
        

    for (let i = 0; i < carton.length; i++){
        if(carton[i]=== randomNumber){
        carton[i] = 'X';
        alert('¡El número coincide con uno de su cartón! Lo tachamos de su cartón con un X: ' + carton)
      }
      }

    }
 

// Función para los siguientes turnos consecutivos
const siguienteTurno = () => {
    alert(userName + ' su cartón es: Línea 1: ' + carton[0] + '-' + carton[1] + '-' + carton[2] + '-' + carton[3]+ '-' +carton[4]+

    ' Línea 2: ' +  carton[5] + '-' + carton[6] + '-' + carton[7] + '-' + carton[8] + '-' + carton[9]+
    
    ' Línea 3: ' + carton[10] + '-' + carton[11] + '-' + carton[12] + '-' + carton[13] + '-' + carton[14])
    
    generateRandomNumber()

    if(carton.includes(randomNumber)===false){
        alert('Ninguno de sus números coincide con el número que ha salido.')
    }

    for (let i = 0; i < carton.length; i++){
        if(carton[i]=== randomNumber){
        carton[i] = 'X';
        alert('¡El número coincide con uno de su cartón! Lo tachamos de su cartón con un X:  Línea 1: ' + carton[0] + '-' + carton[1] + '-' + carton[2] + '-' + carton[3]+ '-' +carton[4]+

        ' Línea 2: ' +  carton[5] + '-' + carton[6] + '-' + carton[7] + '-' + carton[8] + '-' + carton[9]+
        
        ' Línea 3: ' + carton[10] + '-' + carton[11] + '-' + carton[12] + '-' + carton[13] + '-' + carton[14])
      }
    }

    checkLinea()
    checkBingo()

}


//Función para preguntar al usuario si quiere seguir jugando
function keepPlaying(){   
if(bingo === true){
    const playAgain = confirm('¿Desea volver a jugar?')
    if(playAgain === true){
        carton = []
        usedNumbers = []
        linea1Checked = false
        linea2Checked = false
        linea3Checked = false
        bingo = false
        return playBingo()
    }else{
        alert('Hasta luego ' + userName + ' ! Vuelve para jugar al Bingo cuando quieras.') 
}
}
    
 if(bingo === false){
    let continuar = confirm('¿Desea jugar otro turno?')
    if (continuar === true){
        siguienteTurno()
        keepPlaying()
    }else{
           alert('Hasta luego ' + userName + ' ! Vuelve para jugar al Bingo cuando quieras.') 
        
    }        
}

}


// Función que comprueba si hay línea
const checkLinea = () => {
if(carton[0] === 'X' && carton[1] === 'X' && carton[2] === 'X'&& carton[3] === 'X' && carton[4] === 'X' && linea1Checked === false){
    alert('¡Líneaaaaaaaaaaaaaaaaaa! Enhorabuena, ha conseguido tachar los 5 primeros números del cartón.')
    linea1Checked = true
    linea2Checked = true
    linea3Checked = true

}
if(carton[5] === 'X' && carton[6] === 'X' && carton[7] === 'X'&& carton[8] === 'X' && carton[9] === 'X' && linea2Checked === false){
    alert('¡Líneaaaaaaaaaaaaaaaaaa! Enhorabuena, ha conseguido tachar los 5 números centrales del cartón.')
    linea1Checked = true
    linea2Checked = true
    linea3Checked = true
}
if(carton[10] === 'X' && carton[11] === 'X' && carton[12] === 'X'&& carton[13] === 'X' && carton[14] === 'X' && linea3Checked === false){
    alert('¡Líneaaaaaaaaaaaaaaaaaa! Enhorabuena, ha conseguido tachar los 5 últimos números del cartón.')
    linea1Checked = true
    linea2Checked = true
    linea3Checked = true
}
}


//Función que comprueba si hay bingo
const checkBingo = () => {
    if(carton[0] === 'X' && carton[1] === 'X' && carton[2] === 'X'&& carton[3] === 'X' && carton[4] === 'X' && carton[5] === 'X' && carton[6] === 'X' && carton[7] === 'X' && carton[8] === 'X'&& carton[9] === 'X' && carton[10] === 'X' && carton[11] === 'X' && carton[12] === 'X' && carton[13] === 'X' && carton[14] === 'X'){
    alert('¡¡¡¡¡¡¡¡¡BINGOOOOOOOOOO!!!!!!!!! Enhorabuena, ' + userName + ', ha ganado en ' + usedNumbers.length + ' turnos!!')
    bingo = true
    showPoints()
    } 
}


//Función que muestra la puntuación al usuario
const showPoints = () => {
    if(usedNumbers.length === 15){
        alert('Ha completado el cartón en el menor número de turnos posible, por lo que gana 1.000 puntos. ')
    }else if(usedNumbers.length > 15 && usedNumbers.length <= 30){
        points = 500
        alert('Ha ganado ' + points +' puntos.')
    }else if(usedNumbers.length > 30 && usedNumbers.length <= 45){
        points = 200
        alert('Ha ganado ' + points +' puntos.')
    }else if(usedNumbers.length > 45 && usedNumbers.length <= 70){
        points = 100
        alert('Ha ganado ' + points +' puntos.')
    }else if(usedNumbers.length > 70 && usedNumbers.length <= 85){
        points = 50
        alert('Ha ganado ' + points +' puntos.')
    }else{
        points = 10
        alert('Ha ganado ' + points +' puntos.')
}

totalPoints.push(points)

showRanking()

}

//Función que muestra el ranking de usuarios al final de cada partida
const showRanking = () => {
    for(let i = 0; i< userNames.length; i++){
      const object = {
       nombre: userNames[i],
       puntos: totalPoints[i]
      }
      ranking.push(object)
    }

    ranking.sort(function (a, b){
        return (b.puntos - a.puntos)
    })
    
    alert('El ranking de usuarios aparecerá por consola, de mayor a menor puntuación.')
    for(let i = 0; i< ranking.length; i++){   
    console.log(ranking[i].nombre + ' con ' + ranking[i].puntos + ' puntos.')
}
console.log('****************************************************************************')
}


//Función del juego
function playBingo () {
    askForNameAndGreet()
    generateCarton()
    primerTurno()
    keepPlaying()
    
}

playBingo()
