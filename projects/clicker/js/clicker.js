//Set all the variables up
var cash = 0
var currency = 0
var doubleclick = 0
var threeround = 0
var timer = 0
var internet_speed = 90
var internet_upgrade = 0
var seedboxes = 0
var price_doubleClick = 25
var price_threeRound = 100
var price_internet1 = 500
var price_internet2 = 750
var price_internet3 = 1200
var price_internet4 = 1800
var price_seedbox1 = 200
var price_seedbox2 = 300
var price_seedbox3 = 400
var price_seedbox4 = 500
var price_seedbox5 = 600
var price_seedbox6 = 700
var price_seedbox7 = 800
var seedboxPay = 0
var seedboxMultiplier = 300
var size = [100,100];  //public variable

$(window).load(function(){
    window.resizeTo(size[0],size[1]);
});

function updateOutput() {
	document.getElementById("output").innerHTML = (currency);
	document.getElementById("cashOutput").innerHTML = (cash);
	document.getElementById("seedboxOutput").innerHTML = (seedboxes)
}

function updateMenu() {
	if (currency < 50) {
		document.getElementById("cashOutButton").disabled = true;	
	}
	if (currency >= 50) {
		document.getElementById("cashOutButton").disabled = false;	
	}
		
	if (doubleclick != 0) {
		document.getElementById("doubleClick").innerHTML = "Purchased!";
		document.getElementById("doubleClick").disabled = true;
	}
	if (cash < price_doubleClick) {
		document.getElementById("doubleClick").disabled = true;
	}
	if (cash < price_threeRound) {
		document.getElementById("threeRound").disabled = true;
		
	}
	if (doubleclick != 1) {
		if (cash >= price_doubleClick) {
			document.getElementById("doubleClick").disabled = false;
			}
		}
	if (doubleclick != 0) {
		if (threeround != 1) {
			if (cash >= price_threeRound) {
				document.getElementById("threeRound").disabled = false;
				document.getElementById("doubleClick").disabled = true;
				}
			}
	}
	
	if (threeround == 1) {
			document.getElementById("threeRound").disabled = true;
			document.getElementById("threeRound").innerHTML = "Purchased!";

	}
	
	if (internet_upgrade == 0) {
		if (cash >= price_internet1) {
			document.getElementById("internetUpgrade1").disabled = false;
		}
		if (cash < price_internet1) { 
			document.getElementById("internetUpgrade1").disabled = true; 
		}
		
	}
	if (internet_upgrade == 1) {
		document.getElementById("internetUpgrade1").disabled = true;
		document.getElementById("internetUpgrade1").innerHTML = "Purchased!";
		if (cash >= price_internet2) {
			document.getElementById("internetUpgrade2").disabled = false;
		}
		if (cash < price_internet2) { 
			document.getElementById("internetUpgrade2").disabled = true; 
		}
		
	}
	if (internet_upgrade == 2) {
		document.getElementById("internetUpgrade2").disabled = true;
		document.getElementById("internetUpgrade2").innerHTML = "!";
		if (cash >= price_internet3) {
			document.getElementById("internetUpgrade3").disabled = false;
		}
		if (cash < price_internet3) { 
			document.getElementById("internetUpgrade3").disabled = true; 
		}
		
	}
	if (internet_upgrade == 3) {
		document.getElementById("internetUpgrade3").disabled = true;
		document.getElementById("internetUpgrade3").innerHTML = "!";
		if (cash >= price_internet4) {
			document.getElementById("internetUpgrade4").disabled = false;
		}
		if (cash < price_internet4) { 
			document.getElementById("internetUpgrade4").disabled = true; 
		}
		
	}
	if (internet_upgrade == 4) {
		document.getElementById("internetUpgrade4").disabled = true;
		document.getElementById("internetUpgrade4").innerHTML = "!";
	}
	if (seedboxes == 0) {
		
		if (cash >= price_seedbox1) {
			document.getElementById("seedbox1").disabled = false;
		}
		if (cash < price_seedbox1) { 
			document.getElementById("seedbox1").disabled = true; 
		}
		
	}	
	if (seedboxes == 1) {
		document.getElementById("seedbox1").disabled = true;
		document.getElementById("seedbox1").innerHTML = "Purchased!";		
		if (cash >= price_seedbox2) {
			document.getElementById("seedbox2").disabled = false;
		}
		if (cash < price_seedbox2) { 
			document.getElementById("seedbox2").disabled = true; 
		}
		
	}		
	if (seedboxes == 2) {
		document.getElementById("seedbox2").disabled = true;
		document.getElementById("seedbox2").innerHTML = "!";		
		if (cash >= price_seedbox3) {
			document.getElementById("seedbox3").disabled = false;
		}
		if (cash < price_seedbox3) { 
			document.getElementById("seedbox3").disabled = true; 
		}
	}
	
	if (seedboxes == 3) {
		document.getElementById("seedbox3").disabled = true;
		document.getElementById("seedbox3").innerHTML = "!";		
		if (cash >= price_seedbox4) {
			document.getElementById("seedbox4").disabled = false;
		}
		if (cash < price_seedbox4) { 
			document.getElementById("seedbox4").disabled = true; 
		}
		
	}		
	if (seedboxes == 4) {
		document.getElementById("seedbox4").disabled = true;
		document.getElementById("seedbox4").innerHTML = "!";		
		if (cash >= price_seedbox5) {
			document.getElementById("seedbox5").disabled = false;
		}
		if (cash < price_seedbox5) { 
			document.getElementById("seedbox5").disabled = true; 
		}
		
	}		
	if (seedboxes == 5) {
		document.getElementById("seedbox5").disabled = true;
		document.getElementById("seedbox5").innerHTML = "!";		
		if (cash >= price_seedbox6) {
			document.getElementById("seedbox6").disabled = false;
		}
		if (cash < price_seedbox6) { 
			document.getElementById("seedbox6").disabled = true; 
		}
		
	}		
	if (seedboxes == 6) {
		document.getElementById("seedbox6").disabled = true;
		document.getElementById("seedbox6").innerHTML = "!";		
		if (cash >= price_seedbox6) {
			document.getElementById("seedbox7").disabled = false;
		}
		if (cash < price_seedbox6) { 
			document.getElementById("seedbox6").disabled = true; 
		}
		
	}	
	if (seedboxes == 7) {
		document.getElementById("seedbox7").disabled = true;
		document.getElementById("seedbox7").innerHTML = "!";		
	}
	if (cash < price_seedbox7) { 
		document.getElementById("seedbox7").disabled = true; 
	}
	
	
}


function Click() {
	currency = (currency + doubleclick + threeround + 1);
	updateOutput();
	updateMenu();
}


		
function buyDoubleClick() {
	if (cash >= price_doubleClick) {
		if (doubleclick != 1) {
			doubleclick = 1;
			cash = (cash - price_doubleClick);
			updateOutput();
			updateMenu();
		}
	}
}

		
function buyThreeRound() {
	if (cash >= price_threeRound) {
		if (threeround != 1) {
			threeround = 1;
			cash = (cash - price_threeRound);
			updateOutput();
			updateMenu();
		}
	}
}


function buyInternet1() {
	if (cash >= price_internet1) {
		if (internet_upgrade != 1) {
			cash = (cash - price_internet1);
			internet_upgrade = 1;
			internet_speed = 75;
			timerReset();
			updateOutput();
			updateMenu();
		}
	}
}

function buyInternet2() {
	if (cash >= price_internet2) {
		if (internet_upgrade != 2) {
			cash = (cash - price_internet2);
			internet_upgrade = 2;
			internet_speed = 60;
			timerReset();
			updateOutput();
			updateMenu();
		}
	}
}

function buyInternet3() {
	if (cash >= price_internet3) {
		if (internet_upgrade != 3) {
			cash = (cash - price_internet3);
			internet_upgrade = 3;
			internet_speed = 40;
			timerReset();
			updateOutput();
			updateMenu();
		}
	}
}

function buyInternet4() {
	if (cash >= price_internet4) {
		if (internet_upgrade != 4) {
			cash = (cash - price_internet4);
			internet_upgrade = 4;
			internet_speed = 20;
			timerReset();
			updateOutput();
			updateMenu();
		}
	}
}

function buySeedbox1() {
	if (cash >= price_seedbox1) {
		if (seedboxes != 1) {
			timerStart();
			cash = (cash - price_seedbox1);
			seedboxes = 1;
			updateOutput();
			updateMenu();
		}
	}
}

function buySeedbox2() {
	if (cash >= price_seedbox2) {
		if (seedboxes != 2) {
			cash = (cash - price_seedbox2);
			seedboxes = 2;
			updateOutput();
			updateMenu();
		}
	}
}

function buySeedbox3() {
	if (cash >= price_seedbox3) {
		if (seedboxes != 3) {
			cash = (cash - price_seedbox3);
			seedboxes = 3;
			updateOutput();
			updateMenu();
		}
	}
}

function buySeedbox4() {
	if (cash >= price_seedbox4) {
		if (seedboxes != 4) {
			cash = (cash - price_seedbox4);
			seedboxes = 4;
			updateOutput();
			updateMenu();
		}
	}
}

function buySeedbox5() {
	if (cash >= price_seedbox5) {
		if (seedboxes != 5) {
			cash = (cash - price_seedbox5);
			seedboxes = 5;
			updateOutput();
			updateMenu();
		}
	}
}

function buySeedbox6() {
	if (cash >= price_seedbox6) {
		if (seedboxes != 6) {
			cash = (cash - price_seedbox6);
			seedboxes = 6;
			updateOutput();
			updateMenu();
		}
	}
}

function buySeedbox7() {
	if (cash >= price_seedbox7) {
		if (seedboxes != 7) {
			cash = (cash - price_seedbox7);
			seedboxes = 7;
			updateOutput();
			updateMenu();
		}
	}
}


function seedboxPayout() {
	seedboxPay = (seedboxes * seedboxMultiplier);
	currency = (currency + seedboxPay);
	updateOutput();
	updateMenu();
}

function cashOut() {
	if (currency >= 50) { 
		i = (currency - (currency * .40));
		currency = Math.round(i);
		j = (cash + (i * .55));
		cash = Math.round(j);
		updateOutput();
		updateMenu();	
	}
}

function timerReset() {
	timer = internet_speed;
	seedboxPayout();
	updateOutput();

}

function timerStart() {
	setInterval(function(){ 
			if (timer == 0) {timerReset();	}
			timer = (timer - 1); document.getElementById("timer").innerHTML = timer;  }, 1000);	
}
		
	

		

