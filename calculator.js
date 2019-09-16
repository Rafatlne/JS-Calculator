let buffer = "0";
const screens = document.querySelector(".screen");


function buttons(values){
    if(isNaN(values)){
        Symbol;()
    }else{
        console.log("no");
    }
}

function init(){
    document.querySelector('.calc-buttons').addEventListener('click', function(event) {
        let values = parseInt(event.target.innerText);
        buttons(values);
  });
}

init()