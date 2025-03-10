
// ..................
const submitbtn = document.getElementById("submit")
let feetRef = document.getElementById("inch");
let wghtRef = document.getElementById("wght");
let bmiRef = document.getElementById("bmi");

let convertToBMI = ()=>{
    let feet = feetRef.value;
    let wght = wghtRef.value;
    hght = (feet * 2.54 * 12);
    bmiRef.value = (wght/(hght/100*hght/100)).toFixed(3) ;
    if(feet >= 6.2){
        bmiRef.value = `Sorry !`
    }
    else if(wght==""){
        bmiRef.value = `Enter  Weight !`
    }
    else if(hght==""){
        bmiRef.value = `Enter  Height !`
    }
}

submitbtn.addEventListener("click", convertToBMI);

