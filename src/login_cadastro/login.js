function logar() {
    var email = document.getElementById("name");
    var senha = document.getElementById("password");
  
    if (email.value == "admin" && senha.value == "admin") {
      window.open("/homepage.html", "_self");
  
    } else {
      alert("Usuário ou senha inválidos!")
    }
  
  
  }