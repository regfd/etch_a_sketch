const amountofdivs = prompt('How many divs?');
const etch = document.querySelector('#etch');


// Create Div Loop
for (x = 0; x < amountofdivs; x++) {
    
    const row = document.createElement('div');
    row.className = "row";
    

    for (i = 1; i <= amountofdivs; i++ ) {
        const cell = document.createElement('div');
        cell.className = "etchy"
        row.appendChild(cell);
    }
    etch.appendChild(row);
  
 /*    const etchy = document.createElement('div');
    etchy.classList.add('etchy');
    etchy.textContent = 'test'; */

   
} 


etchy.addEventListener('mouseenter', function (c) {
    c.target.style.background = 'blue';
});



// BUTTON CLEAR 
