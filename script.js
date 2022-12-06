//Declaring my variables
const nxtBtn = document.querySelector('#nxt-btn');
const preBtn = document.querySelector('#pre-btn');
const gradientBox = document.querySelector(".main");
const g1 = document.querySelector("#g1");
const g2 = document.querySelector("#g2");
const default1 = '#780206';
const default2 = '#061161';
const defautName = 'Gloomy Day';
let gradientList = document.querySelector(".gradient-list");
const logo = document.querySelector(".logo");
const gradDescrip = document.querySelector(".gradient-description");
let addGradient = document.querySelector('#gradient-name');
let newLGrad = document.querySelector("#from");
let newRGrad = document.querySelector("#to");


//Array of colors
const colors1 = [default1, "#FBD3E9", "#00d2ff", "#f2709c", "#a73737", "#4b6cb7", "#C04848", "#5f2c82", "#232526", "#5C258D", "#4776E6"];
const colors2 = [default2, "#BB377D", "#3a7bd5", "#ff9472", "#7a2828", "#182848", "#480048", "#49a09d", "#414345", "#4389A2", "#8E54E9"];
const gradNames = [defautName, "Florentyna", "Oceanic Feel", "Peaches", "Red Wine", "Santorini Waves", "Pale Purple", "Flourishing Lily", "Frankenstein Night", "Royal Me", "Atlantic"]
let codeBox = document.querySelector('.code');


//Default gradient background
gradientList.style.display = "none";
gradientBox.style.backgroundImage = "linear-gradient(to right, " + default1 + "," + default2 + ")";
logo.style.backgroundImage = "linear-gradient(to right, " + default1 + "," + default2 + ")";
gradDescrip.innerHTML = `${defautName}`


g1.innerHTML = default1;
g2.innerHTML = default2;
codeBox.innerHTML = ` background:` + `${g1.innerHTML};`+ `/* fallback for old browsers */<br>` + `background:` + `-webkit-linear-gradient(to right,` + `${g1.innerHTML}` + `,` + `${g2.innerHTML};` + `/* Chrome 10-25, Safari 5.1-6 */<br>` + `background:` + `linear-gradient(to right,` + `${g1.innerHTML}` + `,` + `${g2.innerHTML}` + `/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`


const gradients = (colOne, colTwo)=> {
    gradientBox.style.backgroundImage = "linear-gradient(to right, " + colOne + "," + colTwo + ")";
    logo.style.backgroundImage = "linear-gradient(to right, " + colOne + "," + colTwo + ")";

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
    codeBox.innerHTML = ` background:` + `${g1.innerHTML};`+ `/* fallback for old browsers */<br>` + `background:` + `-webkit-linear-gradient(to right,` + `${g1.innerHTML}` + `,` + `${g2.innerHTML};` + `/* Chrome 10-25, Safari 5.1-6 */<br>` + `background:` + `linear-gradient(to right,` + `${g1.innerHTML}` + `,` + `${g2.innerHTML}` + `/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`
    gradDescrip.innerHTML = gradNames[counter];

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

    codeBox.innerHTML = ` background:` + `${g1.innerHTML};`+ `/* fallback for old browsers */<br>` + `background:` + `-webkit-linear-gradient(to right,` + `${g1.innerHTML}` + `,` + `${g2.innerHTML};` + `/* Chrome 10-25, Safari 5.1-6 */<br>` + `background:` + `linear-gradient(to right,` + `${g1.innerHTML}` + `,` + `${g2.innerHTML}` + `/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`

    gradDescrip.innerHTML = gradNames[counter];



}

//loader
  //after window is loaded completely 
  window.onload = function(){
    //hide the preloader
    setTimeout( () => {
        document.querySelector(".loader-wrapper").style.display = "none"

    }, 3000)
}

//Targetting the add gradient modal
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let close = document.querySelector(".close");

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    close.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
    
//Targettin the Copy CSS modal
let modalTwo = document.getElementById("CSSModal");
let btn2 = document.getElementById("myBtn2");
let closee = document.querySelector(".closee");


    // When the user clicks on the button, open the modal
    btn2.onclick = function() {
        modalTwo.style.display = "block";
        }
    
        // When the user clicks on <span> (x), close the modal
        closee.onclick = function() {
        modalTwo.style.display = "none";
        }
    
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
            modalTwo.style.display = "none";
        }
        }
    

//Copy to Clipboard
function copyToClipboard() {
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(codeBox.innerHTML);

    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
  
    // Alert the copied text
    // alert("Copied the code: " + codeBox.innerHTML);
  }

  function outFunc() {
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }

// View All Gradients Functionality
let btn3 = document.querySelector("#viewBtn");
let card = document.querySelector(".card");
let cardd = document.querySelector(".cardd");
document.querySelector(".closebtn").style.display = "none"


btn3.onclick = function() {
    gradientBox.style.display = "none";
    gradientList.style.display = 'block';
    document.querySelector(".closebtn").style.display = "block";

    card.style.backgroundImage = "linear-gradient(to right, " + default1 + "," + default2 + ")";

    // if (
    //     gradientList.style.display === 'flex'
    // ) {
    //     gradientList.style.display = 'none';
        
    //     btn3.innerHTML = `
    //      <i class="fa-solid fa-bars"></i>
    //      View all gradients
    // `;
    // } else {
    //     gradientList.style.display = 'flex';
        

    //     btn3.innerHTML = `
    //     <i class="fa-solid fa-xmark"></i>
    //     View all gradients
    // `;
    // }
}
function closeNav() {
    gradientList.style.display = "none";
    gradientBox.style.display = "block";
  }

// const viewAllGradients = () => {

//     arrayOfGradients.map((card) => {
//       card.style.backgroundImage = "linear-gradient(to right, " + colOne + "," + colTwo + ")";

//     })
//   }
  
//   viewAllGradients()



    // // When the user clicks on <span> (x), close the modal
    // closee.onclick = function() {
    // modalTwo.style.display = "none";
    // }

    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    // if (event.target == modal) {
    //     modalTwo.style.display = "none";
    // }
    // }

    function saveGradient() {

        gradDescrip.innerHTML = addGradient.value;
        gradientBox.style.backgroundImage = "linear-gradient(to right, " + newLGrad.value + "," + newRGrad.value + ")";
        colors1.push(newLGrad.value);
        colors2.push(newRGrad.value);
        gradNames.push(gradDescrip.innerHTML);

    }

//New array for colors1
const newColors1 = (colOne) => {

    colors1.map(`${colOne}`)
  }

  console.log(newColors1);

// Save Gradient Form
// saveGradient.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let firstCol = document.querySelector("#from");
//     let secondCol = document.querySelector("#to");

    // gradientBox.style.backgroundImage = "linear-gradient(to right, " + `${firstCol.value}` + "," + `${secondCol.value}` + ")";
    // colors1.push(`${colOne.value}`);
    // counter = colors1.length - 1;

    // changeGradient();

    // colors2.push(`${colTwo.value}`);
    // counter = colors2.length - 1;

    // changeGradient();

    // addToGradient.style.display = 'none';
    // addToGradientBg.style.display = 'none';

    // addToGradientBtn.innerHTML = `
    //     <i class="fa-solid fa-circle-plus"></i>
    // `;
    // overlay.innerHTML = ''
    // viewAllGradients()
// });