// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
import "bootstrap"

const displayRandomBox = function() { //We use Const when we define functions.
    let r = Math.random()
    if(r < .5) {
        document.write('<div class="red box"></div>')
    }
    else {
        document.write('<div class="blue box"></div>')
    }
}


function DispalyNBoxesUsingFor(n) {
    for(let i = 0; i < n; i++) {
        displayRandomBox();
      }
}

function DispalyNBoxesUsingWhile(n) {
    let j = 0;
    while(j < n) {
    displayRandomBox();
    
        j++;
    }
}

function DispalyNBoxesUsingDoWhile(n) {
    let k = 0;
    do {
    displayRandomBox();
    
        k++;
    } while (k < n);
    
}

DispalyNBoxesUsingFor(15);
DispalyNBoxesUsingWhile(12);
DispalyNBoxesUsingDoWhile(14);


const square = function(x) {
    return x * x;
}

alert(square(10));


document.getElementById("Function").addEventListener("click", displayMessage);

function displayMessage() {
    var Input = document.getElementById("NameField").value;
    alert(Input);
}

// while(k = 0) {
//     let r = Math.random()
//     if(r < .5) {
//         document.write('<div class="red box"></div>')
//     }
//     else {
//         document.write('<div class="blue box"></div>')
//     }


// }
