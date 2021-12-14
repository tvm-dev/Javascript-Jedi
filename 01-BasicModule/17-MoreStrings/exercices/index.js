document.body.innerHTML += '=== Starting ... ===< <br /><br />'
const namee = prompt('What is your full name')

document.body.innerHTML += `1. Your name is  <strong> ${namee} </strong><br />`;
document.body.innerHTML += `2. Your name have ${namee.length} letters <br />`
document.body.innerHTML += `3. The second letter from your name is  ${namee[1]} <br /> `
document.body.innerHTML += `4. The first index (a) from your name is ${namee.indexOf('a')}  <br />`
document.body.innerHTML += `5. The last index from your name is ${namee.lastIndexOf('a')} <br />`
document.body.innerHTML += `6. The three last letters from your name are: ${namee.substring(namee.length - 3)} <br />`
//document.body.innerHTML += `7. The first index (a) from your name is ${namee.indexOf('a')}  <br />`
document.body.innerHTML += `7. The words from your name are: ${namee.split(' ')} <br />`
document.body.innerHTML += `8. Your name in UpperCase is ${namee.toUpperCase()} <br />`
document.body.innerHTML += `9. Your name in LowerCase is ${namee.toLowerCase()} <br />`


// Thiago Viana de Menezes