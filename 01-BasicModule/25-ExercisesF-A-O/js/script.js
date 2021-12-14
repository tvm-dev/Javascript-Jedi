//Don't udpdate page after clicmk button 
function myScope(){
  const form = document.querySelector('.form');
  const result = document.querySelector('.result');
  //Create a empty array person:
  const person = [];

  // form.onsubmit = function (eventTVM) {
  //   //Prevent submint form:
  //   eventTVM.preventDefault();
  //   //alert(1);
  //   console.log('Sent')
  // };

 //But, let's go use a new resource:
//let count = 0
 // function receiveEventForm (eventTVM) {
// eventTVM.preventDefault();
// console.log(`Form do not sent - ${count}`);
// count++;

function receiveEventForm (eventTVM) {
  eventTVM.preventDefault();
  const namee = form.querySelector('.namee');
  const lastname = form.querySelector('.lastname');
  const weight = form.querySelector('.weight');
  const height = form.querySelector('.height');
  console.log(namee.value, lastname, weight, height);

  //Add data to resulv div  by tvm:
  //  result.innerHTML += `${namee.value} `;
  // result.innerHTML += `${lastname.value} `;
  // result.innerHTML += `${weight.value}Kg `;
  // result.innerHTML += `${height.value} m`;
  //  result.innerHTML += `<hr>`;

  //Add by teacher:
  person.push({
    namee: namee.value,
    lastname: lastname.value,
    weight: weight.value,
    height: height.value
  });
  console.log(person);

  result.innerHTML += `<p> ${namee.value} ${lastname.value} ` +
  `${weight.value} ${height.value}</p>`;
  }
form.addEventListener ('submit', receiveEventForm);
  }

myScope();