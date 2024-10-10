//Callbacks:
function callbackuno(callback) {
    console.log("Yo todo lo doy...");
    callback();  
  }
  
  function miCallback() {
    console.log("O mejor dicho lo daba por hecho porque esto se va a acabar hoy");
  }
  
  callbackuno(miCallback);
  
  