function navbar() {
    var x = document.getElementById("navigationBar");
    if (x.className === "responsive") {
        x.className = "";
        document.getElementById("ham").style.display = "inline";
        document.getElementById("cross").style.display = "none";
    } else {
        x.className = "responsive";
        document.getElementById("ham").style.display = "none";
        document.getElementById("cross").style.display = "inline";
    }
    console.log("navbar fn");
}