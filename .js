document.getElementById('add').addEventListener('click' , () => {
    var parent = document.getElementById('form');
    var newElement = document.createElement('p');
    newElement.innerHTML = document.getElementById('new-text').value;
    parent.appendChild(newElement); 
});
