const inputRef = document.getElementById("input_ref")
const subtrair = document.getElementById('btn_menos')
const adicionar = document.getElementById('btn_mais')

let valor = 1 

function menos () {
  valor -= 1 

if (valor <=0) {
  valor = 0
}

  inputRef.value = valor
}


function mais () {
  valor += 1
  inputRef.value = valor
}

subtrair.addEventListener("click",menos)
adicionar.addEventListener("click",mais)