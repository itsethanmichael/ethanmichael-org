function lightDark() {

  const control_bar = document.getElementById("control_bar");
  const light_dark = document.getElementById("light_dark");
  const roster_thumbs = document.querySelectorAll(".rosterThumb");

  switch (light_dark.innerHTML) {

    case ("🌙"):

      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";

      control_bar.style.color = "black";
      control_bar.style.background = "rgba(0, 0, 0, 0.075)";

      light_dark.innerHTML = "☀️";
      light_dark.style.background = "rgba(0, 0, 0, 0.085)";

      break;

    case ("☀️"):

      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";

      control_bar.style.color = "white";
      control_bar.style.background = "rgba(255, 255, 255, 0.075)";

      roster_thumbs.forEach(element => {
        element.style.backgroundColor = "rgb(255, 255, 255)"
      });

      light_dark.innerHTML = "🌙";
      light_dark.style.background = "rgba(255, 255, 255, 0.085)";

      break;

  }

}

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

    /*dm.style.width = "100%";
    dm.style.height = "auto";
    dm.style.margin = "2.5vh 0 5vh 0";
    dm.style.color = "cyan";
    dm.style.textAlign = "center";
    dm.innerHTML = "📥 DM <img src='IG.png' style='max-height:40px; min-height:1vh;'></img>";
    dm.id = "dm";
    dm.addEventListener("mouseover", () => { dm.style.cursor = "pointer"; dm.style.color = "yellow"; });
    dm.addEventListener("mouseout", () => { dm.style.color = "cyan"; })
    dm.onclick = function () { goTo(1); };*/

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

    phone.style.width = "100%";
    phone.style.height = "auto";
    phone.style.margin = "2.5vh 0 5vh 0";
    phone.style.color = "cyan";
    phone.style.textAlign = "center";
    phone.innerHTML = "📲 PHONE";
    phone.id = "phone";
    phone.addEventListener("mouseover", () => { phone.style.cursor = "pointer"; phone.style.color = "yellow"; });
    phone.addEventListener("mouseout", () => { phone.style.color = "cyan"; })
    phone.onclick = function () {
      navigator.clipboard.writeText("2154885551");
      window.alert("2154885551 COPIED TO CLIPBOARD");
      window.location.href = "tel:+12154885551";
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

  alphaMin = 0.7

  let r = Math.random();
  let g = Math.random();
  let b = Math.random();

  let mean = (r + g + b) / 3;
  r -= mean;
  g -= mean;
  b -= mean;

  let mag = Math.sqrt(r*r + g*g + b*b);
  r /= mag;
  g /= mag;
  b /= mag;

  const intensity = 255;
  const offset = 100;

  r = offset + r * intensity;
  g = offset + g * intensity;
  b = offset + b * intensity;

  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  let a = alphaMin + Math.random() * (1 - alphaMin);

  let z = `rgba(${r|0}, ${g|0}, ${b|0}, ${a.toFixed(2)})`;
    

  x.style.setProperty("color", z, "important");


}

function noColor(x) { x.style.color = ""; }

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


/*const play_text_group = document.querySelectorAll(".play_text");
play_text_group.forEach(element => {
  element.addEventListener("mouseenter", function() {oohColorful(element);});
})*/

const elementsToAnimate = document.querySelectorAll(".rosterItem, .popsIn");

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3333
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

elementsToAnimate.forEach(element => {
  observer.observe(element);
});

light_dark = document.getElementById("light_dark");
light_dark.innerHTML = "☀️";
light_dark.addEventListener("click", lightDark);
lightDark();