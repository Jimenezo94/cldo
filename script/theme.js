document.getElementById("theme1").onclick = setBlue;
document.getElementById("theme2").onclick = setwhite;
document.getElementById("theme3").onclick = setpurple;



const contenedor = document.getElementById("calculadora")
const pantalla = document.getElementById("resultado")
const keypadButtons = document.getElementsByClassName("keyButton");
const keypadButtonsArray = Array.from(keypadButtons);




function setBlue() {
    localStorage.setItem("coleccion","hsl(222, 26%, 31%)")
    document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
    
    localStorage.setItem("contendor", "hsl(223, 31%, 20%)")
    contenedor.style = "background:hsl(224, 36%, 15%)"

    localStorage.setItem("display","hsl(223, 31%, 20%)")
    pantalla.style = "background:hsl(223, 31%, 20%); color: white"
    keypadButtonsArray.forEach((button) => {
        button.style = "color: black"
    })

}
function setpurple() {
  document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
  localStorage.setItem("coleccion","hsl(268, 75%, 9%)")

  localStorage.setItem("contenedor","hsl(268, 71%, 12%)")
  contenedor.style = "background:hsl(268, 71%, 12%)"

  localStorage.setItem("display","hsl(268, 71%, 12%)")
pantalla.style = "background:hsl(268, 71%, 9%); color:  hsl(52, 100%, 62%)"
keypadButtonsArray.forEach((button) => {
    button.style = "color:  hsl(52, 100%, 62%) "
})

}

function setwhite() {
    localStorage.setItem("coleccion","hsl(0, 0%, 90%)")
    document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    contenedor.style = "background:hsl(0, 5%, 81%)";
    pantalla.style = "background:hsl(0, 0%, 93%); color:hsl(0, 0, 100%)";
    keypadButtonsArray.forEach((button) => {
        button.style = "color: :hsl(0, 0, 100%)"
    })

}
