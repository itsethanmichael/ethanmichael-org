function contactLightbox() {

    const lightbox = document.getElementById("lightbox");
    const lightboxX = document.getElementById("lightboxX");

    const contactInfo = document.getElementById("contactInfo");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
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

    email.style.width = "100%";
    email.style.height = "auto";
    email.style.margin = "2.5vh 0 5vh 0";
    email.style.color = "cyan";
    email.style.fontSize = "calc(100% + 1vh)"
    email.style.textAlign = "center";
    email.innerHTML = "📲 EMAIL";
    email.id = "email";
    email.addEventListener("mouseover", () => { email.style.cursor = "pointer"; email.style.color = "yellow"; });
    email.addEventListener("mouseout", () => { email.style.color = "cyan"; })
    email.onclick = function () {
      navigator.clipboard.writeText("business@ethanmichael.org");
      window.alert("business@ethanmichael.org COPIED TO CLIPBOARD");
      window.location.href = "mailto:business@ethanmichael.org";
    };

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

      case 3:

        window.location.href = "https://ethanmichael.org/past_clientele.html"
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

function playText() {

  const text_list = [

    "GIVEN ENOUGH TIME AND RESOURCES, WE CAN ACCOMPLISH ANYTHING YOU NEED",
    "REACH OUT WITH YOUR REQUIREMENTS AND MEANS, LET US WOW YOU"
  
  ];

  let play_text = document.getElementById("play_text");
  
  switch (play_text.innerHTML) {

    case (text_list[0]):

      play_text.innerHTML = text_list[1];
      break;

    case (text_list[1]):

      play_text.innerHTML = text_list[0];
      break;

  }

  setTimeout(function() {playText()}, 5000);

}

document.addEventListener("DOMContentLoaded", function() {
  playText();
});

//setTimeout(playText(), 1000);

