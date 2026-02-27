PROMPT_FLAG = false;
RAG_SO_FLAG = false;
MULTI_TOOLCALL_FLAG = false;
FOLDER_FLAG = false;
DATA_FLAG = false;

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
    const soon = document.getElementById("soon");
    soon.style.display = "none";
    //const dm = document.getElementById("dm");

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
    contactInfo.style.alignItems = "center";
    contactInfo.style.justifyItems = "center";
    contactInfo.id = "contactInfo";

    email.style.display = "flex";
    email.style.width = "100%";
    email.style.height = "auto";
    email.style.margin = "2.5vh 0 5vh 0";
    email.style.color = "cyan";
    email.style.fontSize = "4rem";
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

    phone.style.display = "flex";
    phone.style.width = "100%";
    phone.style.height = "auto";
    phone.style.margin = "2.5vh 0 5vh 0";
    phone.style.color = "cyan";
    phone.style.fontSize = "4rem";
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

function soonLightbox() {

    const lightbox = document.getElementById("lightbox");
    const lightboxX = document.getElementById("lightboxX");

    const contactInfo = document.getElementById("contactInfo");
    const soon = document.getElementById("soon");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

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
    contactInfo.style.alignItems = "center";
    contactInfo.style.justifyItems = "center";
    contactInfo.id = "contactInfo";

    phone.style.display = "none";
    email.style.display = "none";

    soon.style.display = "flex";
    soon.style.width = "fit-content";
    soon.style.height = "auto";
    soon.style.margin = "2.5vh 0 5vh 0";
    soon.style.color = "red";
    soon.style.fontSize = "90%";
    soon.style.textAlign = "center";
    soon.style.alignSelf = "center";
    soon.innerHTML = "COMING SOON";
    soon.id = "soon";
    soon.addEventListener("click", () => { soon.style.display = "none"; closeLightbox(); contactLightbox(); });
    soon.addEventListener("mouseover", () => { soon.style.cursor = "pointer"; soon.style.color = "yellow"; });
    soon.addEventListener("mouseout", () => { soon.style.color = "red"; oohColorful(soon); })

}

function closeLightbox() {

    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";

}

function goTo(x) {

  switch (x) {

    case 0:

      window.location.href = "./index.html";
      break;

    case 1:

      window.open("https://ig.me/m/ethanmichaelorg/");
      break;

    case 2:

      window.open("https://youtube.com/@officialethanmichael");
      break;

      case 3:

        window.location.href = "./ai.html";
        break;
      
      case 4:

        window.location.href = "./data.html";
        break;
      
      case 5:

        window.location.href = "https://ethanmichael.org/hsk.html";
        break;
      
      case 6:

        window.open("https://open.spotify.com/artist/1h5vBdRaMwqmuVgMHcAisG");
        break;
      
      case 7:

        window.open("https://music.apple.com/us/artist/ethan-michael/1514532987");
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

  setTimeout(function() { playText() }, 5000);

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

function imgZoom (x) {

  //window.open(`${x.src}`);

  if (x.style.width != "100%") {

    x.style.width = "100%";
    x.style.margin = "0";
    x.style.alignContent = "center";
    x.style.alignItems = "center";
    x.style.alignSelf = "center";
    x.style.justifyContent = "center";
    x.style.justifyItems = "center";
    x.style.justifySelf = "center";

  }

  else {

    x.style.width = "80%";
    x.style.margin = "2.5%";

  }

}

function setFlags(x) {

  switch (x) {

    case 0:

      DATA_FLAG = true;

      break;


    case 1:

      RAG_SO_FLAG = false;
			MULTI_TOOLCALL_FLAG = false;
			PROMPT_FLAG = true;

      break;

    
    case 2:

      PROMPT_FLAG = false;
			MULTI_TOOLCALL_FLAG = false;
			RAG_SO_FLAG = true;

      break;

    
    case 3:

        PROMPT_FLAG = false;
				RAG_SO_FLAG = false;
				MULTI_TOOLCALL_FLAG = true;

      break;

  }

}

function fileSystemDriver(id, fs_flag, fd=null, fi=null) {

  const file_system = document.getElementById("file_system");
  

  switch (id) {

    case 0:

      if (FOLDER_FLAG) {

        const existing = document.getElementById("file_system");
        existing.innerHTML = "";
        FOLDER_FLAG = false;

      }

      if (((RAG_SO_FLAG || MULTI_TOOLCALL_FLAG) && !FOLDER_FLAG) || DATA_FLAG) {
        
        const folder_div = document.createElement("div");
        const folder_icon = document.createElement("img");

        document.getElementById("file_system_div").style.display = "inherit";

        folder_div.className = "folder_div";
        folder_icon.className = "folder_icon";

        folder_icon.src = "./folder_closed.png";

        file_system.appendChild(folder_div);
        folder_div.appendChild(folder_icon);
        
        folder_div.addEventListener("click", () => { fileSystemDriver(1, fs_flag, folder_div, folder_icon); });

        FOLDER_FLAG = true;
        DATA_FLAG = false;
    
      }

      else if ((!RAG_SO_FLAG  && !MULTI_TOOLCALL_FLAG) && FOLDER_FLAG && PROMPT_FLAG) {
        document.getElementById("file_system_div").style.display = "none";
      }

      else {

        document.getElementById("file_system_div").style.display = "inherit";

      }


      break;

    
    case 1:

      fi.dataset.open = fi.dataset.open === "true" ? "false" : "true";
      fi.src = fi.dataset.open === "true" ? "./folder_open.png" : "./folder_closed.png";

      if (fi.dataset.open === "true") {

        fd.classList.add("open");
        fi.style.opacity = "0.5";

        const files_div = document.createElement("div");
        files_div.id = "files_div";

        fd.appendChild(files_div);


        switch(fs_flag) {

          case (1):

            const csv_dataset_div = document.createElement("div");
            const csv_dataset_icon = document.createElement("img");
            const csv_dataset_description = document.createElement("div");

            const csv_sanitizer_div = document.createElement("div");
            const csv_sanitizer_icon = document.createElement("img");
            const csv_sanitizer_description = document.createElement("div");
            

            csv_dataset_div.className = "folder_file_div";

            csv_dataset_icon.className = "folder_file_icon";
            csv_dataset_icon.src = "./csv.png";

            csv_dataset_description.className = "folder_file_description";
            csv_dataset_description.innerHTML = "example_dataset.csv";


            csv_sanitizer_div.className = "folder_file_div";

            csv_sanitizer_icon.className = "folder_file_icon";
            csv_sanitizer_icon.src = "./py.png";

            csv_sanitizer_description.className = "folder_file_description";
            csv_sanitizer_description.innerHTML = "dataset_sanitizer.py";


            files_div.appendChild(csv_dataset_div);
            files_div.appendChild(csv_sanitizer_div);

            csv_dataset_div.appendChild(csv_dataset_icon);
            csv_dataset_div.appendChild(csv_dataset_description);

            csv_dataset_div.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open("./docs/data/example_dataset.zip");
            });
            csv_dataset_icon.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open("./docs/data/example_dataset.zip");
            });
            csv_dataset_description.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open("./docs/data/example_dataset.zip");
            });

            csv_sanitizer_div.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open("./res/demo/dataset_sanitizer.zip");
            });
            csv_sanitizer_icon.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open("./res/demo/dataset_sanitizer.zip");
            });
            csv_sanitizer_description.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open("./res/demo/dataset_sanitizer.zip");
            });
            
            csv_sanitizer_div.appendChild(csv_sanitizer_icon);
            csv_sanitizer_div.appendChild(csv_sanitizer_description);


            break;
          
          

          case 2:

            const zip_div = document.createElement("div");
            const zip_icon = document.createElement("img");
            const zip_description = document.createElement("div");

            zip_div.className = "folder_file_div";

            zip_icon.className = "folder_file_icon";
            zip_icon.src = "./zip.png";

            zip_description.className = "folder_file_description";
            zip_description.innerHTML = "rag_so_results.zip";

            files_div.appendChild(zip_div);

            zip_div.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open("./res/demo/rag_so_results.zip");
            });
            zip_icon.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open("./res/demo/rag_so_results.zip");
            });
            zip_description.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open("./res/demo/rag_so_results.zip");
            });

            zip_div.appendChild(zip_icon);
            zip_div.appendChild(zip_description);

            break;
          
          

          case 3:

            const langchain_div = document.createElement("div");
            const langchain_icon = document.createElement("img");
            const langchain_description = document.createElement("div");

            langchain_div.className = "folder_file_div";

            langchain_icon.className = "folder_file_icon";
            langchain_icon.src = "./py.png";

            langchain_description.className = "folder_file_description";
            langchain_description.innerHTML = "langChain_call.py";

            files_div.appendChild(langchain_div);

            langchain_div.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open("./res/demo/langChain_call.zip");
            });
            langchain_icon.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open("./res/demo/langChain_call.zip");
            });
            langchain_description.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open("./res/demo/langChain_call.zip");
            });

            langchain_div.appendChild(langchain_icon);
            langchain_div.appendChild(langchain_description);

            break;

        }


      }

      else {

        fd.classList.remove("open");
        fi.style.opacity = "1.0";

        const oldFiles = fd.querySelector("#files_div");
        if (oldFiles) oldFiles.remove();

      }

      break;
      

  }

}

const elementsToAnimate = document.querySelectorAll(".popsIn");

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.25
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

/*document.getElementById("wdkshsk").addEventListener("click", () => {
  window.open("https://ethanmichael.org/#");
});*/

document.getElementById("better_my_english").addEventListener("click", () => {
  window.open("https://bettermyenglish.com/");
});

//document.getElementById("").addEventListener("click", goTo());