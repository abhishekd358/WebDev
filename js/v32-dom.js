// 1. getElementById()

document.getElementById('IdHeading'); // return the whole base element of recpective id, select element by Id
document.getElementById('IdHeading').className    // it return the class name of the recpective.
document.getElementById('IdHeading').getAttribute('class') // to get all attribute 
document.getElementById('IdHeading').setAttribute('class', 'new-class-name') // it overwrite the class name to new-class-name.
document.getElementById('IdHeading').setAttribute('id', 'new-id-name new-seecond-id') // you can set two classes or id as well at same time.

// 2. getElementByClassName() : Selects all elements with the specified class (returns an HTMLCollection).
document.getElementsByClassName('list-item')


// 3. getElementsByTagName() :  Selects all elements with the specified tag (returns an HTMLCollection).
document.getElementsByTagName('p');

// 4. querySelector(): Selects the first element that matches a CSS selector
document.querySelector('#mainHeading');

// 5. querySelectorAll(): Selects all elements that match a CSS selector (returns a NodeList)
document.querySelectorAll('.btn-primary');

// 6. getElementsByName(): Selects all elements with a specific name attribute (returns a NodeList)
document.getElementsByName('username');


document.querySelector('element/.element_id/element_class') // use to access the element as well as atrribute

IdHeading.style.color='pink'   // change the color to red of the id with value IdHeading.
 

attribute_Name.innerText // it return only unhidden means screen visible text.
attribute_Name.textContent // it return hidden content inside the text.
