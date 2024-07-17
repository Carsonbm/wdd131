//Import the computers from computers.js
import computers from './computers.js';

//The template for any PC to be loaded into HTML
function computerTemplate(computer) {
    return `
        <h2>${computer.name}</h2>
        <img src="${computer.image}" alt="${computer.image} Image">
        <p>Builder: ${computer.builder}</p>
        <p>Price: $${computer.price}</p>
        <p>CPU: ${computer.cpu}</p>
        <p>GPU: ${computer.gpu}</p>
        <p>RAM: ${computer.ram}</p>
        <p>Fans: ${computer.fans}</p>
        <h3>Games:</h3>
        <ul>
        ${computer.games.map(game => `
            <li>${game.name}: ${game.resolution} ${game.fps}FPS</li>`).join('')}
        </ul>`;
}

//Reducded Lighthouse score significantly. This occured after using the site, the reload of the original PC1 and PC2 for the right had a very negative impact on load times. 
function loadOnStartupComputers() {
    loadComputer('PC1', "left");
    loadComputer("PC2", "right");
  }
    //loadOnStartupComputers();

//Load specific computer into the correct side.
function loadComputer(pcNumber, side) {
    //Find the computer name that matches with the PC number
    const computer = computers.find(c => c.name === pcNumber)
    //Run it through the template
    const newComputerHTML = computerTemplate(computer);
    //insert into the correct side's html
    document.querySelector(`.${side}-pc-details`).innerHTML = newComputerHTML;
}

//Load all computers into the correct side.
function loadAllComputers(side) {
    //Itterate through each PC in the array and run it through the template
    let allComputersHTML = computers.map(computerTemplate).join('');
    //insert into the correct side's html. 
    document.querySelector(`.${side}-pc-details`).innerHTML = allComputersHTML;
}

//Get the pcnumber and side from the data in the button.
function getButtonData (button) {
    const pcNumber = button.getAttribute('data-pc');
    const side = button.getAttribute('data-side');
    return {pcNumber, side};
}

//Run getButtonData to retrieve pcnumber and side, if count is 1 load the singular computer into the correct side. If count is 2 load all the computers into the correct side.
function renderAnyComputer(event, count) {
    const button = event.target;
    const { pcNumber, side } = getButtonData(button);
    
    if (count === 1) {
        loadComputer(pcNumber, side);
    } 
    else {
        loadAllComputers(side);
    }
}


//For each of the buttons with the .pc-button class, run the renderAnyComputer function to retrieve and render the data. 
document.querySelectorAll('.pc-button').forEach(button => {
    button.addEventListener('click', (event) => renderAnyComputer(event, 1));
});

//For each of the buttons with the .show-all class, run the renderAnyComputer function to retrieve the data for all computers and render it. 
document.querySelectorAll('.show-all').forEach(button => {
    button.addEventListener('click', (event) => renderAnyComputer(event, 2));
});