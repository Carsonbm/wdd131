//Support Page

//Make submit button functional.
function supportFormConfirmation (event) {
    //Prevent normal behavior of site going away.
    event.preventDefault();
    //Show confirmation message. 
    document.getElementById('support-confirmation').style.display = 'block';
}

//Listen for submit button to be pressed. 
document.getElementById('supportform').addEventListener('submit', supportFormConfirmation)