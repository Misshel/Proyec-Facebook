//usuarios con acceso

var cuentas =[{usuario:"leo@gmail.com",password:"123"},
              {usuario:"daniel@gmail.com",password:"456"},
              {usuario:"hector@gmail.com",password:"789"},
              {usuario:"camilo@gmail.com",password:"234"},
              {usuario:"albert@gmail.com",password:"567"}];

function validateForm(){
//Obteniendo los valores ingresados
  var usuario= document.getElementById("usuario").value;
  var password= document.getElementById("password").value;
  var msm= document.getElementById("mensaje");

//condiciones
  var correo= /[a-z]*@gmail.com/;
  var contraseña=/\d{3}/;

//validando usuario y password
  if(usuario == undefined ){
    msm.innerHTML= "El campo de usuario no puede estar en blanco";
  }
for(var i=0;i<cuentas.length;i++){
  if(correo.test(usuario) !== cuentas[i] && contraseña.test(password) !== cuentas[i]){
    alert("Por favor ingrese el formato valido.");
  } else{validar();}
}

}

function validar(){
  var usuario= document.getElementById("usuario").value;
  var password= document.getElementById("password").value;
  var newUsuario= {usuario:usuario,password:password};

          for(var i =0;i<cuentas.length;i++){
            if(newUsuario !== cuentas[i]){
              alert("Por favor ingresar cuenta valida");
            }else{
              return true;
            }

          }
}
