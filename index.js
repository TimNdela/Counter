//initialize count as 0

// clicks on increament btn
//increase once increament button clicked
//change count-el in html to reflect new count
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

console.log(saveEl)



function increament(){
    count += 1;
    countEl.innerText = count;
}

function save(){
    
    let countStr = count + " - ";
    saveEl.textContent += countStr;

    countEl.textContent = 0
    count = 0
}
