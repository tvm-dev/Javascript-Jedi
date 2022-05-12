const elements = [
  {tag: 'p', text: 'Phrase 1'}, // 0
  {tag: 'div', text: 'Phrase 2'}, //1
  {tag: 'footer', text: 'Phrase 2'}, //2
  {tag: 'section', text: 'Phrase 4'}, //3 
];

const container = document.querySelector('.container')
const div =  document.createElement('div');

for (let i = 0; i < elements.length; i++) {
let { tag, text } = elements[i];
let tagCreated = document.createElement(tag);
tagCreated.innerText = text;
div.appendChild(tagCreated)

}

container.appendChild(div);

