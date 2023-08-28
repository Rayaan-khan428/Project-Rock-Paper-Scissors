// DOM Manipulation

// const title = document.querySelector('#main-heading');
// title.style.color = 'red';
// console.log(title);

// const listItems = document.querySelectorAll('.list-items');

// for (i=0; i<listItems.length; i++) {
//     listItems[i].style.fontSize = '2rem';
// }

// console.log(listItems);

// Creating Elements ---------- //

const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding Elements
ul.append(li);

// Modifying the text
li.innerText = 'X-men';

// modifying attribute/class

li.setAttribute('id', 'main-heading');
li.removeAttribute('id');