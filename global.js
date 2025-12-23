function contactLightbox() {

    const lightbox = document.getElementById("lightbox");
    const lightboxX = document.getElementById("lightboxX");

    const contactInfo = document.getElementById("contactInfo");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const dm = document.getElementById("dm");

    lightbox.style.display = "block";
    lightbox.style.height = "50%";
    lightboxX.innerHTML = "X";
    lightboxX.style.fontSize = "calc(100% + 4pt)";

    contactInfo.style.width = "100%";
    contactInfo.style.height = "80%";
    contactInfo.style.margin = "0 0 2.5% 0";
    contactInfo.style.color = "rgb(0, 255, 0)";
    contactInfo.style.fontSize = "calc(4rem + 1vh)"
    contactInfo.style.textAlign = "center";
    contactInfo.style.alignContent = "center";
    contactInfo.id = "contactInfo";

    dm.style.width = "100%";
    dm.style.height = "auto";
    dm.style.margin = "2.5vh 0 5vh 0";
    dm.style.color = "cyan";
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
    email.style.textAlign = "center";
    email.innerHTML = "📧 EMAIL";
    email.id = "email";
    email.addEventListener("mouseover", () => { email.style.cursor = "pointer"; email.style.color = "yellow"; });
    email.addEventListener("mouseout", () => { email.style.color = "cyan"; })
    email.onclick = function () {
      navigator.clipboard.writeText("business@ethanmichael.org");
      window.alert("BUSINESS@ETHANMICHAEL.ORG COPIED TO CLIPBOARD");
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

    x.style.setProperty("color", abcd, "important");

}

function noColor(x) { x.style.color = "white"; }

function playText() {

  const play_text = document.getElementsByClassName("play_text");
  for (let i = 0; i < play_text.length; i++) {

    oohColorful(play_text[i]);

  }

  setTimeout(function() { playText() }, 3000);

}


function textChange() {

  const tagline = document.getElementById("tagline_text");

  const text_list = [

    "WITH ENOUGH TIME &amp; RESOURCES, WE CAN ACCOMPLISH ANYTHING",
    "REACH OUT WITH YOUR MEANS &amp; REQUIREMENTS, AND WE'LL WOW YOU",
    "ANY TASK CAN BE SOLVED VIA REDUCING IT TO ITS CONSTITUENT PARTS"
  
  ];

  switch (tagline.innerHTML) {

      case (text_list[0]):

        tagline.innerHTML = text_list[1];
        break;

      case (text_list[1]):

        tagline.innerHTML = text_list[2];
        break;

      case (text_list[2]):

        tagline.innerHTML = text_list[0];
        break;

    }

    setTimeout(function() { textChange() }, 3000);

}


function borderlineMad(x) {

  switch (x.style.borderStyle) {

    case ("dashed"):

      x.style.borderStyle = "dotted";
      break;
    
    case ("dotted"):

      x.style.borderStyle = "dashed";
      break;

  }

  setTimeout(function() { borderlineMad(x) }, (Math.floor(Math.random() * (150 - 100)) + 50));

}



const elementsToAnimate = document.querySelectorAll(".rosterItem");

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7
};

const observerCallback = (entries, observer) => {

  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
      entry.target.style.animationName = "fadeInPop";
      entry.target.style.animationDuration = "0.5s";
      entry.target.style.animationTimingFunction = "ease-out";
      entry.target.style.animationFillMode = "forwards";
      observer.unobserve(entry.target);
    }

  });

};

const observer = new IntersectionObserver(observerCallback, observerOptions);
console.log(elementsToAnimate);

elementsToAnimate.forEach(element => {
  observer.observe(element);
});


