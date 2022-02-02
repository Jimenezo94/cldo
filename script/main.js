console.log("sii");
window.addEventListener("load", () => {
  /*escucha el doc*/

  /*guardar elemntos que necesitanmos*/
  const display = document.querySelector(".resultado");

  const colorActual = localStorage.getItem("coleccion");
  const contenedor = document.getElementById("calculadora");
  const pantalla = document.getElementById("resultado");
  const keypadButtons = document.getElementsByClassName("keyButton");

  
  const keypadButtonsArray = Array.from(keypadButtons);

  if (colorActual == "hsl(222, 26%, 31%)") {
    document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
    pantalla.style = "background:hsl(223, 31%, 20%); color:white";
    contenedor.style = "background: hsl(224, 36%, 15%)";
    keypadButtonsArray.forEach((button) => {
        button.style = "color:hsl(223, 31%, 20%)"
    })

  } else if (colorActual == "hsl(268, 75%, 9%)") {
    document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    pantalla.style = "background:hsl(268, 71%, 9%); color:hsl(52, 100%, 62%)"
    contenedor.style = "background:hsl(268, 71%, 12%)"
    keypadButtonsArray.forEach((button) => {
        button.style = "color: hsl(52, 100%, 62%)"
    })


  } else if (colorActual == "hsl(0, 0%, 90%)") {
    document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    pantalla.style = "background:hsl(0, 5%, 81%) ; color:black" ;
    contenedor.style = "background: hsl(0, 0%, 93%); ";
    keypadButtonsArray.forEach((button) => {
        button.style = "color: :hsl(0, 0, 100%)"
    })
    
  }
  

  /**/
 
  /**/
  keypadButtonsArray.forEach((button) => {
    /*a cada boton se le agrega el escuchador de evento*/
    button.addEventListener("click", () => {
      calculadora(button, display);
    });
  });
});

function calculadora(button, display) {
  switch (button.innerHTML) {
    case "DEL":
      borrar2(display);
      break;
    case "RESET":
      borrar(display);
      break;
    case "=":
      calcular(display);
    default:
      actualizar(display, button);
      break;
  }
}

function calcular(display) {
  display.innerHTML = eval(display.innerHTML);
  //
  setTimeout(function () {
    borrar2(display);
  }, 20);
}

function actualizar(display, button) {
  if (display.innerHTML == 0) {
    display.innerHTML = "";
  }
  display.innerHTML += button.innerHTML;
}
function borrar2(display) {
  display.innerHTML = display.innerHTML.substring(
    0,
    display.innerHTML.length - 1
  );
  // console.log(display2)
}

function borrar(display) {
  display.innerHTML = 0;
}
