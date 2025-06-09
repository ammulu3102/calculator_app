
let calValue = document.getElementById("result");
const Xbutton = document.getElementById("removeValue");

function press(val) {
    calValue.value+=val;

}
function calculate() {
    try{
        calValue.value = 
        eval(document.getElementById("result").value);
    } 
    catch{
        calValue.value = "Error";
    }
    }
    function clearResult() {
        calValue.value ="";
    }


    Xbutton.addEventListener("click",function(){
        console.log(calValue.value.length,calValue.value)
        if(calValue.value.length > 1){
            calValue.value = calValue.value.slice(0,-1)
        }else{
            calValue.value = '';
        }
    })