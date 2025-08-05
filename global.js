function contactLightbox() {

    const lightbox = document.getElementById("lightbox");
    const lightboxBar = document.getElementById("lightboxBar");
    const lightboxX = document.getElementById("lightboxX");

    const contactInfo = document.getElementById("contactInfo");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const dm = document.getElementById("dm");

    lightbox.style.width = "75%";
    lightbox.style.height = "auto";
    lightbox.style.zIndex = "5";
    lightbox.style.position = "fixed";
    lightbox.style.backgroundColor = "rgba(50, 50, 50, 0.95)";
    lightbox.style.border = "2px solid whitesmoke";
    lightbox.style.color = "white";

    //lightboxBar.style.border = "2px solid whitesmoke";

    lightboxX.style.width = "calc(2% + 1vw)";
    lightboxX.style.height = "90%";
    lightboxX.style.margin = "1%";
    lightboxX.style.border = "2px solid red";
    lightboxX.style.color = "red";
    lightboxX.innerHTML = "X";

    contactInfo.style.width = "100%";
    contactInfo.style.height = "auto";
    contactInfo.style.margin = "0 0 2.5% 0";
    //contactInfo.style.margin = "2.5% 0 2.5% 0";
    contactInfo.style.color = "rgb(0, 255, 0)";
    contactInfo.style.fontSize = "calc(50% + 1vw)"
    contactInfo.style.textAlign = "center";
    contactInfo.innerHTML = "CONTACT INFORMATION";
    contactInfo.id = "contactInfo";

    email.style.width = "100%";
    email.style.height = "auto";
    email.style.margin = "2.5vh 0 2.5vh 0";
    email.style.color = "cyan";
    email.style.fontSize = "calc(100% + 1vh)"
    email.style.textAlign = "center";
    email.innerHTML = "📨 EMAIL";
    email.id = "email";
    email.addEventListener("mouseover", () => { email.style.cursor = "pointer"; email.style.color = "yellow"; });
    email.addEventListener("mouseout", () => { email.style.color = "cyan"; })
    email.onclick = function () { window.open("mailto:business@ethanmichael.org"); }

    phone.style.width = "100%";
    phone.style.height = "auto";
    phone.style.margin = "2.5vh 0 2.5vh 0";
    phone.style.color = "cyan";
    phone.style.fontSize = "calc(100% + 1vh)"
    phone.style.textAlign = "center";
    phone.innerHTML = "📞 CALL / TEXT";
    phone.id = "phone";
    phone.addEventListener("mouseover", () => { phone.style.cursor = "pointer"; phone.style.color = "yellow"; });
    phone.addEventListener("mouseout", () => { phone.style.color = "cyan"; })
    phone.onclick = function () { window.open("tel:+12154885551"); }

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
    dm.onclick = function () { window.open("https://ig.me/m/ethanmichaelorg"); };

}

function closeLightbox() {

    const lightbox = document.getElementById("lightbox");
    const lightboxBar = document.getElementById("lightboxBar");
    const lightboxX = document.getElementById("lightboxX");

    const contactInfo = document.getElementById("contactInfo");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const dm = document.getElementById("dm");

    lightbox.style.width = "50%";
    lightbox.style.height = "50%";
    lightbox.style.zIndex = "-5";
    lightbox.style.background = "none";
    lightbox.style.border = "none";

    lightboxBar.style.border = "none";

    lightboxX.style.width = "0";
    lightboxX.style.height = "0";
    lightboxX.style.margin = "0";
    lightboxX.style.border = "none";

    lightboxX.innerHTML = "";

    contactInfo.style.width = "0";
    contactInfo.style.height = "0";
    contactInfo.style.margin = "0";
    contactInfo.innerHTML = "";

    email.style.width = "0";
    email.style.height = "0";
    email.style.margin = "0";
    email.innerHTML = "";

    phone.style.width = "0";
    phone.style.height = "0";
    phone.style.margin = "0";
    phone.innerHTML = "";

    dm.style.width = "0";
    dm.style.height = "0";
    dm.style.margin = "0";
    dm.innerHTML = "";

}

function goHome() { window.location.href = "https://ethanmichael.org/"; }

function openHome() { window.open("https://ethanmichael.org/"); }

function gate() { window.location.href = "https://ethanmichael.org/gate.html"; }

function websites() { window.location.href = "https://ethanmichael.org/websites.html"; }

function roster() { window.location.href = "https://ethanmichael.org/roster.html"; }

function openIG() { window.open("https://ig.me/m/ethanmichaelorg"); }

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
