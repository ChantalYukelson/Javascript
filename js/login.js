let btn= document.getElementById("guardar"),
checkbox= document.getElementById("check");
const email= document.getElementById("email");
const password= document.getElementById("password"),
h5 = document.querySelector("h5");
btn.innerText= "Registrar";
h3= document.getElementById("h3");


function guardar (valor) {
   
let user = { usuario: email.value, pass: password.value };

if (user.usuario=="" || user.pass==""){
h5.innertext = "Los campos no deben estar vacíos";
return;

}

else {
if (valor ==="sessionStorage"){
sessionStorage.setItem("item", JSON.stringify(user));
}

if(valor==="localStorage"){
    localStorage.setItem("item", JSON.stringify(user));

}
}
return user;

    }

    function recuperarDatos(datos){
if (datos){
    email.value= datos.usuario;
    password.value= datos.pass;
    btn.innerText= "Ingresar";
    h3.innerText= "Ingresá";
    
        }
    }

recuperarDatos(JSON.parse(localStorage.getItem("item")));
btn.addEventListener("click", (e) => {
    e.preventDefault()
    if (checkbox.checked){
        guardar("localStorage");
        window.location = "index.html";
    }
else {
guardar("sessionStorage");
window.location = "index.html";
}
});



AOS.init({
    offset: 400, 
    delay: 0, 
    duration: 1000 
  });








