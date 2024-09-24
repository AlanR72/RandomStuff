
function getInput(){
    /* const nameInput = document.getElementById('getName').value;
    
    localStorage.setItem('getName', nameInput); */
    window.location.href = 'confirmation.html';
}

const userInput = localStorage.getItem('name');
document.getElementById('confirmed-name').textContent = userInput;