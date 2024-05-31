
var result = document.getElementById("inputext");

function calculate (number){

    result.value += number;
}


function Result (){

    try {
        result.value = eval (result.value);
    }
    catch(err){
        alert("Enter The Valid Input");
    }
}

function clr (){
    result.value = " ";
}
function del () {
    result.value = result.value.slice(0,-1);
}



