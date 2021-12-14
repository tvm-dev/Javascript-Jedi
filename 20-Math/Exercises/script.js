const n = Number(prompt('Type a number:'))
document.getElementById('titleNumber').innerHTML = n
const text = document.getElementById('text')

text.innerHTML += `<li>The square root from ${n} is: <strong> ${n ** (0.5)} </strong></li>`;
text.innerHTML += `<li>The Number ${n} is integer? <strong> ${Number.isInteger(n)} </strong></li>`;
text.innerHTML += `<li>Is NaN: <strong> ${Number.isNaN(n)} </strong></li>`;
text.innerHTML += `<li>The ${n} around down is: <strong> ${Math.floor(n)} </strong></li>`;
text.innerHTML += `<li>The ${n} around up is: <strong> ${Math.ceil(n)} </strong></li>`;
text.innerHTML += `<li>The ${n} with two decimal places is: <strong> ${n.toFixed(2)} </strong></li>`;







