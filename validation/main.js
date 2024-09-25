
function nameValid(){
    const nameInput = document.getElementById('getName').value;
    
    localStorage.setItem('getName', nameInput);

    window.location.href = 'confirmation.html';
    
}

const userInput = localStorage.getItem('getName');
document.getElementById('confirmed-name').textContent = userInput;