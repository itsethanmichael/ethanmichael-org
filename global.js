function contactLightbox() {

    const lightbox = document.getElementById("lightbox");
    const lightboxX = document.getElementById("lightboxX");

    const contactInfo = document.getElementById("contactInfo");
    const dm = document.getElementById("dm");

    lightbox.style.display = "block";
    lightboxX.innerHTML = "X";

    contactInfo.style.width = "100%";
    contactInfo.style.height = "auto";
    contactInfo.style.margin = "0 0 2.5% 0";
    contactInfo.style.color = "rgb(0, 255, 0)";
    contactInfo.style.fontSize = "calc(100% + 2vh)"
    contactInfo.style.textAlign = "center";
    contactInfo.innerHTML = "CONTACT INFORMATION";
    contactInfo.id = "contactInfo";

    dm.style.width = "100%";
    dm.style.height = "auto";
    dm.style.margin = "2.5vh 0 5vh 0";
    dm.style.color = "cyan";
    dm.style.fontSize = "calc(100% + 1vh)"
    dm.style.textAlign = "center";
    dm.innerHTML = "📥 DM <img src='IG.png' style='max-height:40px; min-height:1vh;'></img>";
    dm.id = "dm";
    dm.addEventListener("mouseover", () => { dm.style.cursor = "pointer"; dm.style.color = "yellow"; });
    dm.addEventListener("mouseout", () => { dm.style.color = "cyan"; })
    dm.onclick = function () { goTo(1); };

}

function closeLightbox() {

    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";

}

function goTo(x) {

  switch (x) {

    case 0:

      window.location.href = "https://ethanmichael.org/";
      break;

    case 1:

      window.open("https://ig.me/m/ethanmichaelorg/");
      break;

    case 2:

      window.open("https://youtube.com/@officialethanmichael");
      break;
      
  }
  
}

function widthHeight() { document.body.style.width = screen.innerWidth; document.body.style.height = screen.innerHeight; window.addEventListener("resize", widthHeight);}
window.addEventListener("resize", widthHeight);

function oohColorful(x) {

    let a = 255 * Math.random();
    let b = 255 * Math.random();
    let c = 255 * Math.random();
    let d = Math.random();
    if (d < 0.7) { d = 0.7; }

    let abcd = "rgba(" + a.toString() + ", " + b.toString() + ", " + c.toString() + ", " + d.toString() + ")";

    x.style.color = abcd;

}

function noColor(x) { x.style.color = "white"; }
