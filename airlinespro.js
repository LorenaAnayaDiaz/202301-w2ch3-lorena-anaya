const flights = [
  { id: 0, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 1, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 2, to: "Paris", from: "Barcelona", cost: 21, scale: false },
  { id: 3, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 4, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 5, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 6, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 7, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 8, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 9, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

const askForNameAndGreet = () => {
  const userName = prompt("Por favor, indique su nombre de usuario.");
  if (userName === null) {
    alert("Por favor, introduzca un nombre válido.");
    askForNameAndGreet();
  } else {
    alert(`${userName}, bienvenido/a a la aplicación de Anaya Airlines. `);
  }
};

const showFlights = () => {
  alert("Los vuelos de hoy de Anaya Airlines aparecerán por consola.");
  let today = new Date();
  console.log(
    "Los vuelos programados para el día de hoy " +
      today +
      " son los siguientes:"
  );
  console.log("-----------------------------------------------------");
  flights.forEach((flight) => {
    console.log(
      `El vuelo número ${flight.id} con origen ${flight.from}
    y destino ${flight.to} tiene un coste de ${flight.cost} euros.`
    );
    if (flight.scale === true) {
      console.log("Este vuelo realiza escala.");
      console.log("-----------------------------------------------------");
    } else {
      console.log("Este vuelo no realiza ninguna escala.");
      console.log("-----------------------------------------------------");
    }
  });
};

function averageCost() {
  averageCost = confirm("¿Desea ver el coste medio de los vuelos de hoy?");
  if (averageCost) {
    let sum;
    let firstCost = flights[0].cost;
    for (let i = 0; i < flights.length; i++) {
      sum = firstCost += flights[i].cost;
    }
    let average = sum / flights.length;

    console.log(
      "El coste medio de los vuelos de hoy es de " + average + " euros."
    );
  }
}

function scale() {
  scale = confirm("¿Desea ver el número de vuelos que realizan escala hoy?");
  if (scale) {
    let counter = 0;
    let acc = 1;
    flights.forEach((flight) => {
      if (flight.scale === true) {
        counter += acc;
      }
    });
    console.log(`El número de vuelos que realizan escala es de ${counter}.`);
  }
}

function lastMinFlights() {
  lastMinFlights = confirm(
    "Si solamente puede volar en los últimos vuelos del día, ¿desearía ver los destinos de los 5 últimos vuelos de nuestra compañía?"
  );
  if (lastMinFlights) {
    console.log(
      `Los destinos de los 5 últimos vuelos para el día de hoy son: ${flights[4].to}, ${flights[5].to}, ${flights[6].to}, ${flights[7].to}, ${flights[8].to} y  ${flights[9].to}.`
    );
  }
}

function userFunctions() {
  const userPrice = prompt(
    "Si desea buscar por precio, por favor, introduzca un precio y le mostraremos los vuelos disponibles con ese precio o más baratos."
  );
  const suitableFlights = [];
  flights.forEach((flight) => {
    if (flight.cost <= userPrice) {
      suitableFlights.push(flight);
    }
  });

  if (suitableFlights.length > 0) {
    console.log("-----------------------------------------------------");
    console.log(
      "Los vuelos programados con ese precio o más baratos son los siguientes:"
    );

    suitableFlights.forEach((flight) => {
      console.log(
        `El vuelo número ${flight.id} con origen ${flight.from}
    y destino ${flight.to} tiene un coste de ${flight.cost} euros.`
      );
    });
  } else if ((suitableFlights.length = 0)) {
    console.log(
      "Lo sentimos, no hay vuelos disponibles por ese precio para el día de hoy."
    );
  }
}

function addFlights() {
  let add = confirm("¿Desea añadir algún vuelo?");
  if (add === true && flights.length < 16) {
    const newFlight = { id: 10, from: "", to: "", cost: "", scale: true };
    newFlight.id = +prompt("Indique el ID del nuevo vuelo.");
    newFlight.from = prompt("Indique el origen del nuevo vuelo.");
    newFlight.to = prompt("Indique el destino del nuevo vuelo.");
    newFlight.cost = prompt("Indique el precio del nuevo vuelo.");
    newFlight.scale = confirm("¿El vuelo realiza escala?");
    flights.splice(10, 0, newFlight);
    addFlights();
  } else if (add === true && flights.length === 16) {
    alert("No se pueden añadir más vuelos.");
  }
  alert("Los vuelos aparecerán por consola.");
  console.log("Los vuelos, con los que ha añadido, son: ");
  flights.forEach((flight) => {
    console.log(
      `El vuelo número ${flight.id} con origen ${flight.from}
    y destino ${flight.to} tiene un coste de ${flight.cost} euros.`
    );
    if (flight.scale === true) {
      console.log("Este vuelo realiza escala.");
      console.log("-----------------------------------------------------");
    } else {
      console.log("Este vuelo no realiza ninguna escala.");
      console.log("-----------------------------------------------------");
    }
  });
}

function deleteFlights() {
  let deleteFlight = confirm("¿Desea eliminar algún vuelo?");

  if (deleteFlight === true) {
    let chosenId = +prompt("Indique el ID del vuelo que desea eliminar.");
    if (flights.some((flight) => flight.id === chosenId)) {
      const i = flights.findIndex((e) => e.id === chosenId);
      alert(
        "Ha eliminado el vuelo con origen " +
          flights[i].from +
          " y destino a " +
          flights[i].to +
          "."
      );
      flights.splice(i, 1);
      deleteFlights();
    } else {
      alert("No existe ningún vuelo con ese ID.");
      deleteFlights();
    }
  }
}

function sayByeUser() {
  alert(
    "Gracias por usar esta aplicación, ¡Anaya Airlines estará encantando de volar con usted próximamente!"
  );
}

function sayByeAdmin() {
  alert(
    "Si quiere volver a realizar cambios reinicie la aplicación. Hasta luego!"
  );
}

function askForRoleAndPlayApp() {
  const role = prompt("Por favor, introduzca si es USUARIO o ADMINISTRADOR.");
  if (role === null) {
    askForRoleAndPlayApp();
  } else if (role === "usuario" || role === "USUARIO") {
    askForNameAndGreet();
    showFlights();
    averageCost();
    scale();
    lastMinFlights();
    userFunctions();
    sayByeUser();
  } else if (role === "administrador" || role === "ADMINISTRADOR") {
    showFlights();
    addFlights();
    deleteFlights();
    sayByeAdmin();
  } else {
    alert("Indique una opción válida.");
    askForRoleAndPlayApp();
  }
}

askForRoleAndPlayApp();
