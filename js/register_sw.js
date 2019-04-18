//Checks if the registration of the service worker worked
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./js/sw.js')
  .then(function(){
    console.log("Registration of the service worker worked!");
  })
  .catch(function(){
    console.log("Registration of the service worker failed!")
  })
}
