function runThru(z, event) {

    if (event.keyCode === 13 || z == 0) {

    
        document.getElementById("errText").innerHTML = "INCORRECT PASSWORD";
        document.getElementById("password").style.backgroundColor = "red";
        document.getElementById("submit").remove();
        setTimeout(() => {
            document.getElementById("password").remove();
            document.getElementById("errText").innerHTML = "ACCESS DENIED";
            document.getElementById("errText").style.marginTop = "20vh";
        }, 3000);
    }

}