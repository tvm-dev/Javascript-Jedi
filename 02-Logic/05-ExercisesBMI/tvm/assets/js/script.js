function calcule(){
  //This code below prevent form to be send!
  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    
  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value;
  let bmi = ( weight / (height * height));

   
  
  if (bmi <= 18.5) {
    document.getElementById('bmi').innerHTML = `Your BMI is ${bmi.toPrecision(4)} -> Under Weight ):`;

   } else if (bmi >=18.6 && bmi <=24.9 ) {
     document.getElementById('bmi').innerHTML = `Your BMI is ${bmi.toPrecision(4)} -> Normal Weight :)`;

   } else if (bmi >= 25 && bmi <= 29.9 ){
     document.getElementById('bmi').innerHTML = `Your BMI is ${bmi.toFixed(2)} -> OverWeight :(`;

   } else if (bmi >= 30 && bmi <= 34.9 ){
     document.getElementById('bmi').innerHTML = `Your BMI is ${bmi.toFixed(2)} -> Obesity Level 1 :( `;

   } else if (bmi >= 35 && bmi <= 39.9){
      document.getElementById('bmi').innerHTML = `Your BMI is ${bmi.toFixed(2)} -> Obesity Level 2 :( `;

   } else if (bmi >= 40){
    document.getElementById('bmi').innerHTML = `Your BMI is ${bmi.toFixed(2)} -> Obesity Level 3`;

   } else {
     document.getElementById('bmi').innerHTML = `Your BMI is ${bmi.toFixed(2)} -> Strange Value, try again!`;
   }



})

}