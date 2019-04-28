//Session wizard - Here we put anything related to current session management

function doLogin(){
  alert(usrMail.value + usrPass.value)
  firebase.auth().signInWithEmailAndPassword(usrMail.value, usrPass.value).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  alert("Error! " + errorCode + " " + errorMessage);
});
usrMail.value = "";
usrPass.value = "";
}

function doLogout(){
  firebase.auth().signOut().then(function() {
    alert("Sesión terminada con éxito");
  }).catch(function(error) {
    // An error happened.
  });
}

function loginActuator(){
  var usrMail = document.getElementById("usrMail");
  var usrPass = document.getElementById("usrPass");
  doLogin();
}
