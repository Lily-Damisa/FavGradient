//Declaring my variables
const nxtBtn = document.querySelector('#nxt-btn');
const preBtn = document.querySelector('#pre-btn');
const gradientBox = document.querySelector(".main");
const g1 = document.querySelector("#g1");
const g2 = document.querySelector("#g2");
const default1 = '#780206';
const default2 = '#061161';

//Array of colors
const colors1 = [default1, "#FBD3E9", "#00d2ff", "#f2709c", "#a73737", "#4b6cb7", "#C04848", "#5f2c82", "#232526", "#5C258D", "#4776E6"];
const colors2 = [default2, "#BB377D", "#3a7bd5", "#ff9472", "#7a2828", "#182848", "#480048", "#49a09d", "#414345", "#4389A2", "#8E54E9"]

//Default gradient background
gradientBox.style.backgroundImage = "linear-gradient(to right, " + default1 + "," + default2 + ")";
g1.innerHTML = default1;
g2.innerHTML = default2;

const gradients = (colOne, colTwo)=> {
    gradientBox.style.backgroundImage = "linear-gradient(to right, " + colOne + "," + colTwo + ")";
}

let counter = 0;

//Making the buttons clickable and adding conditions
nxtBtn.onclick = () => {
    if(counter >= colors1.length - 1){
        counter = 0;
        gradients(colors1[counter], colors2[counter]);
        // gradientBox.style.backgroundImage = 
    } else {
        counter ++;
        gradients(colors1[counter], colors2[counter] );

    }
    g1.innerHTML = colors1[counter];
    g2.innerHTML = colors2[counter];

}

preBtn.onclick = () => {
    if(counter <= 0){
        counter = colors1.length - 1;
        gradients(colors1[counter], colors2[counter]);
    } else {
        counter --;
        gradients(colors1[counter], colors2[counter] );

    }
    g1.innerHTML = colors1[counter];
    g2.innerHTML = colors2[counter];

}



    
    