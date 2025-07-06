function lightBox(x) {

    const lightboxContainer = document.getElementById("lightboxContainer");

    if (x == 1) {

        lightboxContainer.style.zIndex = "5";
        lightboxContainer.style.top = "10%";
        lightboxContainer.style.left = "10%";

    }

    else {

        lightboxContainer.style.zIndex = "-5";
        lightboxContainer.style.top = "-100%";
        lightboxContainer.style.left = "-100%";

    }

}