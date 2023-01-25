//VARIABLES
let index = 0

const input = document.querySelector('.text-input')

let points = 0

const userPoints = document.querySelector('.points');

const words = document.querySelector('.words');

const letterA = document.querySelector('.letter-a');
const letterB = document.querySelector('.letter-b');
const letterC = document.querySelector('.letter-c');
const letterD = document.querySelector('.letter-d');
const letterE = document.querySelector('.letter-e');
const letterF = document.querySelector('.letter-f');
const letterG = document.querySelector('.letter-g');
const letterH = document.querySelector('.letter-h');
const letterI = document.querySelector('.letter-i');
const letterJ = document.querySelector('.letter-j');
const letterK = document.querySelector('.letter-k');
const letterL = document.querySelector('.letter-l');
const letterM = document.querySelector('.letter-m');
const letterN = document.querySelector('.letter-n');
const letterÑ = document.querySelector('.letter-ñ');
const letterO = document.querySelector('.letter-o');
const letterP = document.querySelector('.letter-p');
const letterQ = document.querySelector('.letter-q');
const letterR = document.querySelector('.letter-r');
const letterS = document.querySelector('.letter-s');
const letterT = document.querySelector('.letter-t');
const letterU = document.querySelector('.letter-u');
const letterV = document.querySelector('.letter-v');
const letterW = document.querySelector('.letter-w');
const letterX = document.querySelector('.letter-x');
const letterY = document.querySelector('.letter-y');
const letterZ = document.querySelector('.letter-z');

const lettersArray = [letterA, letterB, letterC, letterD, letterE, letterF, letterG, letterH, letterI, letterJ, letterK, letterL, letterM, letterN, letterÑ, letterO, letterP, letterQ, letterR, letterS, letterT, letterU, letterV, letterW, letterX, letterY, letterZ]

let seconds = 120

const startGameButton = document.querySelector('.start-game');
const clearButton = document.querySelector('.clear-button');
const sendButton = document.querySelector('.send-button');
const pasapalabraButton = document.querySelector('.pasapalabra-button');

const questions = [
    {
      letter: "a",
      answer: "abducir",
      question:
        "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
    },
    {
      letter: "b",
      answer: "bingo",
      question:
        "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    },
    {
      letter: "c",
      answer: "churumbel",
      question: "CON LA C. Niño, crío, bebé",
    },
    {
      letter: "d",
      answer: "diarrea",
      question:
        "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
    },
    {
      letter: "e",
      answer: "ectoplasma",
      question:
        "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
    },
    {
      letter: "f",
      answer: "facil",
      question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
    },
    {
      letter: "g",
      answer: "galaxia",
      question:
        "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
    },
    {
      letter: "h",
      answer: "harakiri",
      question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
    },
    {
      letter: "i",
      answer: "iglesia",
      question: "CON LA I. Templo cristiano",
    },
    {
      letter: "j",
      answer: "jabali",
      question:
        "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    },
    {
      letter: "k",
      answer: "kamikaze",
      question:
        "CON LA K. Persona que se juega la vida realizando una acción temeraria",
    },
    {
      letter: "l",
      answer: "licantropo",
      question: "CON LA L. Hombre lobo",
    },
    {
      letter: "m",
      answer: "misantropo",
      question:
        "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
    },
    {
      letter: "n",
      answer: "necedad",
      question: "CON LA N. Demostración de poca inteligencia",
    },
    {
      letter: "ñ",
      answer: "señal",
      question:
        "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
    },
    {
      letter: "o",
      answer: "orco",
      question:
        "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
    },
    {
      letter: "p",
      answer: "protoss",
      question:
        "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
    },
    {
      letter: "q",
      answer: "queso",
      question:
        "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
    },
    { letter: "r", 
    answer: "raton", 
    question: "CON LA R. Roedor" 
  },
    {
      letter: "s",
      answer: "stackoverflow",
      question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
    },
    {
      letter: "t",
      answer: "terminator",
      question:
        "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
    },
    {
      letter: "u",
      answer: "unamuno",
      question:
        "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    },
    {
      letter: "v",
      answer: "vikingos",
      question:
        "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
    },
    {
      letter: "w",
      answer: "sandwich",
      question:
        "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
    },
    {
      letter: "x",
      answer: "botox",
      question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
    },
    {
      letter: "y",
      answer: "peyote",
      question:
        "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
    },
    {
      letter: "z",
      answer: "zen",
      question:
        "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
    },
  ];



//EVENTOS
function validar(e) {
  tecla = (document.all) ? e.keyCode : e.which;
  if (tecla==13){
    checkAnswer()
  };
}

 startGameButton.addEventListener('click', (event)=> {
    event.preventDefault()
    startGame()
})


clearButton.addEventListener('click', (event)=> {
       event.preventDefault()
       clearInputBox()  
 })

sendButton.addEventListener('click', (event) =>{
  event.preventDefault()
  checkAnswer()   
})



pasapalabraButton.addEventListener('click', (event) =>{
  event.preventDefault()
  clearInputBox()
  pasarPalabra()
})



//FUNCIONES
const startGame = () => {
    startGameButton.style.visibility = 'hidden';
    clearButton.style.visibility = 'visible';
    sendButton.style.visibility = 'visible';
    pasapalabraButton.style.visibility = 'visible';
    input.style.visibility = 'visible';
    document.querySelector('.definiciones-container').style.visibility='visible';
    document.querySelector('.container').style.visibility='visible';
    words.style.visibility = 'visible';
    timer()
    showQuestion()
}

const clearInputBox = () =>{
    input.value = ''
}

const showQuestion = () => {
    document.querySelector('.definiciones-container').textContent = questions[index].question
    lettersArray[index].style.backgroundColor= 'deepskyblue'
  }


const checkAnswer = () => {
    const inputText = input.value
    const userAnswer = inputText.toLowerCase()
	if(userAnswer === questions[index].answer){
		points++
    lettersArray[index].style.backgroundColor= 'green'
		userPoints.textContent = 'PUNTUACIÓN: ' + points
        alert('Correcto')
        clearInputBox()

	}else if(userAnswer !== questions[index].answer){
    lettersArray[index].style.backgroundColor= 'red'
        alert('Error!')
        clearInputBox()

	}else{
        clearInputBox()
		showQuestion();
	}
   
	index = index + 1;
	return showQuestion();
}


const pasarPalabra = () =>{
  lettersArray[index].style.backgroundColor= '#0066FF'
	const wordPased = questions.splice(index, 1)[0];
	questions.push(wordPased)
  const letterPased = lettersArray.splice(index, 1)[0]
  lettersArray.push(letterPased)
	showQuestion();
} 

const timer = () =>{
  document.querySelector('.timer').innerHTML = 'TIEMPO RESTANTE: ' + seconds + ' segundos'
  if(seconds==0){
    alert('Se terminó el tiempo!')
    endGame()
  }else{
    seconds--
    setTimeout("timer()", 1000)
  }
}

const endGame = () => {
  location.reload()
}
