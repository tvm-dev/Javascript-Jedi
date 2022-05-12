//Working with times in JS

function showHour(){
  let date = new Date();
  return date.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}

/* function intervalFunction(){
  console.log(showHour());  
}
setInterval( intervalFunction, 1000); */

const timer = setInterval( function () {
  console.log(showHour());
}, 1000);

//setTimeOut -> fixe on time for timer stop, only executed one time:
setTimeout(function(){
  clearInterval(timer);
}, 3000 );

setTimeout(function(){
  console.log('Hello World');
}, 5000);