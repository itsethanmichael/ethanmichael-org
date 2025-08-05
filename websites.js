const descriptionBox = document.getElementById("descriptionBox");

function feesBoxText() {

    const descriptionBox = document.getElementById("descriptionBox");

    descriptionBox.innerHTML = "$99 (REDIRECT / LINKS PAGE) — +$99 MORE / PAGE OR FUNCTION — FLAT RATE, NO HIDDEN FEES‼️<br><br>WE BEAT ALL STANDARD INDUSTRY PRICES";

}

function needsBoxText() {

    const descriptionBox = document.getElementById("descriptionBox");

    descriptionBox.innerHTML = "DON'T LET YOUR PROFESSIONAL IMAGE SUFFER‼️<br><br>RECLAIM YOUR DOMAIN NOW";

}

function pricingBoxText() {

    const descriptionBox = document.getElementById("descriptionBox");

    descriptionBox.innerHTML = "NO WEBSITE = LOSING CUSTOMERS‼️<br><br>IT'S 2025, YOU NEED A DIGITAL PRESENCE";

}

function resetDescriptionBox() {

    const descriptionBox = document.getElementById("descriptionBox");

    descriptionBox.innerHTML = "HOVER OVER AN IMAGE FOR MORE INFORMATION";

}

function alertFlash() {

  const tagline2 = document.getElementById("tagline2");
	const alertBool = 0;
      
  const timer = setInterval(() => {
		
		if (alertBool == 0) {
      tagline2.style.color = "green";
			alertBool = 1;
		}
			
		else if (alertBool == 1) {
			tagline2.style.color = "#ee0059";
			alertBool = 0;
		}
		
  }, 2000);

	alertFlash();

}

alertFlash();
