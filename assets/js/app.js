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
  //
  // if(correo.test(usuario) !== cuentas.usuario || contraseña.test(password) !== cuentas.password){
  //   alert("Por favor ingrese el formato valido.");
  // } else{validar();}
  var cont =0;
  cuentas.forEach(function (e){
                  if(usuario == e.usuario && password == e.password){
              cont ++;
                  }
                  });
      if(cont == 1){
          window.locationf="index_muro";

      }

}
//
// function validar(){
//   var usuario= document.getElementById("usuario").value;
//   var password= document.getElementById("password").value;
//   var newUsuario= {usuario:usuario,password:password};
//
//           for(var i =0;i<cuentas.length;i++){
//             if(newUsuario !== cuentas[i]){
//               alert("Por favor ingresar cuenta valida");
//             }else{
//
//             }
//
//           }
// }


//para los post
function createPost(texto) {
  var post = document.createElement('div');
  var texto = document.createElement('p');
  texto.innerHTML = texto;
  var eliminar = document.createElement('a');
  eliminar.innerHTML = "Eliminar"
  eliminar.addEventListener('click',function(e) {
    e.preventDefault();
    var postParent = e.target.parent; // Devuelve el padre
  });
  post.appendChild(texto);
  post.appendChild(eliminar);
  return post;
}


var resultado = document.getElementById('resultado');
resultado.appendChild(createPost("Gian"));
