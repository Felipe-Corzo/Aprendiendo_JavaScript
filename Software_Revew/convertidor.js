function convertirCF() {
    let c = document.getElementById("celsius").value;
    let f = (c * 9/5) + 32;
    document.getElementById("fahrenheit").value = f;
}

function convertirFC() {
    let f = document.getElementById("fahrenheit").value;
    let c = (f - 32) * 5/9;
    document.getElementById("celsius").value = c;
}
