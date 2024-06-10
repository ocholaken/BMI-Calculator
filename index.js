
// document.querySelector('.calculate').addEventListener('click', BMI);

// document.querySelector(".clear").addEventListener('click', clear);


// / function BMI Calculation + Clear
function BMI() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    // formula
    let index = (weight / (((height  /  100) *height) / 100)).toFixed(0);

    // conditions
    if (height&&weight !=0) {
        const output = document.getElementById("output")
        const state = document.getElementById("state")
        console.log("Your BMI is " + index);
    }else{
        alert('Error!')
    }

}

// clear function 
function clear(params) {
    document.getElementById('height').value= "";
    document.getElementById('weight').value= "";
    document.getElementById('output').value= "";
    document.getElementById('state').value= "";

}
// document.querySelector('.calculate').addEventListener('click', BMI);

// document.querySelector(".clear").addEventListener('click', clear);
