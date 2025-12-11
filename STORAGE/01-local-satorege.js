if (typeof (Storage) !== 'undefined') {
    localStorage.setItem("NOmbre", "Andres");
    console.log(localStorage.getItem("NOmbre"));
} else {
    console.log("No soporta el local storage")
}