//Task 1: Select an HTML element by its ID and change its text content.

const heading=document.getElementById('hello');
heading.textContent="Hey";

//Task 2: Select an HTML element by its class and change its background color.
const bgc = document.querySelector('.intro')
bgc.style.backgroundColor = 'red';


// Task 3: Create a new div element with some text content and append it to the body.
let newChild=document.createElement('div');
newChild.innerHTML=`<h1>hii every one</h1>`;
document.body.appendChild(newChild);


// Task 4: Create a new li element and add it to an existing ul list.
const li=document.createElement('li');
li.innerHTML=`${"enjoy"}`;
document.querySelector('.mood').
appendChild(li);


// Task 5: Select an HTML element and remove it from the DOM.
let rov=document.querySelector('.intro');
rov.remove();

// Task 6: Remove the last child of a specific HTML element.
document.querySelector('.mood').removeChild(document.querySelector('.mood').lastChild);

// Task 7: Select an HTML element and one of its attributes(e.g., src of an img tag).
document.getElementsByTagName('img')[0].setAttribute('src', 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTECe3a36cWoowF6pY5nQkqesHkKLveImzyfw&s')


// Task 8: Add and remove a CSS class to/from an HTML element.
document.getElementById('hello').setAttribute('class', 'css-class')
document.getElementById('hello').removeAttribute('class')

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
let change_text = document.getElementById('change')
change_text.addEventListener('click', () => {
   let a= document.getElementsByTagName('p')[0].innerText = " ha ha ha...."
})

// Task 10: Add a mousehover event listener to an element that changes its border color.
document.getElementsByTagName('button')[0].addEventListener('mouseover', () => {
    document.getElementsByTagName('button')[0].style.borderColor = "red"
})
