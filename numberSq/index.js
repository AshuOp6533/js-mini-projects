function doubleNum(num) {
    console.log('hy');    
    return num*num;
}

function displayResult(e) {
    e.preventDefault()
    let n = document.getElementById("num").value;
    let num = Number.parseInt(n)
    let result = doubleNum(num);
    console.log(num);
    
    document.getElementById("result").innerText = "Result: " + result
}