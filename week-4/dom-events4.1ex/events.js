// select empty div and assign to a variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");

//placing h1 and create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'Hello everyone! It is a rainy day!';

//cursor mouse styled
heading.style.cursor = 'pointer';

heading.addEventListener('click', handleHeadingClick);
//attach to DOM
myEmptyDiv.appendChild(heading);

//function
function handleHeadingClick() {
    console.log('Heading has been clicked');
    document.body.style.backgroundColor = 'lightblue';
}

