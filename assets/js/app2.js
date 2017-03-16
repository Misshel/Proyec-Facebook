var cuentas =[{usuario:"leo@gmail.com",password:"123"},
              {usuario:"daniel@gmail.com",password:"456"},
              {usuario:"hector@gmail.com",password:"789"},
              {usuario:"camilo@gmail.com",password:"234"},
              {usuario:"albert@gmail.com",password:"567"}];

function validateForm(){
var cont =0;
cuentas.forEach(function (e){
  //Obteniendo los valores ingresados
    var usuario= document.getElementById("usuario").value;
    var password= document.getElementById("password").value;
    var msm= document.getElementById("mensaje");

                if(usuario == e.usuario && password == e.password){
            cont ++;
                }
                });

if(cont == 1){
    window.location="index_muro";

}
}
