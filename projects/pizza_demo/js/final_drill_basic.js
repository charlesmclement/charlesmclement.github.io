
function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	text1 = "";
	text2 = "";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
		text2 = text2+sizeTotal+"<br>";
	}	runningTotal = sizeTotal;

	getMeat(runningTotal,text1,text2); // All three of these variables will be passed on to each function
};


function getMeat(runningTotal,text1,text2) {
	var runningTotal = runningTotal;
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	for (var j = 0; j < selectedMeat.length; j++) {
		text1 = text1+selectedMeat[j]+"<br>";
		if (meatCount <= 1) {
			text2 = text2 + 0 + "<br>"';
			meatCount = meatCount - 1;
		} else if (meatCount == 2) {
			text2 = text2 + 1 + "<br>";
		} else {
			text2 = text2 + 1 + "<br>";
			meatCount = meatCount - 1;
		}
	}
	getVeggies(runningTotal,text1,text2);
};		


function getVeggies(runningTotal,text1 text2) {
	var veggiesTotal = 0;
	var selectedVeggies = [];
	var veggiesArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggiesArray.length; j++) {
		if (veggiesArray[j].checked) {
			selectedVeggies.push(veggiesArray[j].value);
		}
	}
	var veggiesCount = selectedVeggies.length;
	if (veggiesCount >= 2) {
		veggiesTotal = (veggiesCount - 1);
	} else {
		veggiesTotal = 0;
	}
	runningTotal = (runningTotal + veggiesTotal);
	for (var j = 0; j < selectedVeggies.length; j++);
			text1 = text1+selectedVeggies[j]+"<br>";
			if (veggiesCount <= 1) {
				text2 = text2 + 0 + "<br>";
				veggiesCount = veggiesCount - 1;
			} else if (veggiesCount == 2) {
				text2 = text2 + 1 + "<br>";
				veggiesCount = veggiesCount - 1;
			} else {
				text2 = text2 + 1 + "<br>";
				veggiesCount = veggiesCount - 1;
			}
	}
	getCheese(runningTotal,text1,text2);
};

function getCheese(runningTotal,text1,text2) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var i = 0; i < cheeseArray.length; i++) {
		if (cheeseArray[i].checked) {
			selectedCheese = cheeseArray[i].value;
		}
		if (selectedCheese === "Extra Cheese") {
			cheeseTotal = 3;
		}
	}
	text2 = text2+cheeseTotal+"<br>";
	text1 = text1+selectedCheese+"<br>";
	runningTotal = (runningTotal + cheeseTotal);
	getSauce(runningTotal,text1,text2);
};

function getSauce(runningTotal,text1,text2) {
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			selectedSauce = sauceArray[j].value;
			text1 = text1 + selectedSauce +"<br>";
		}
	}
	text2 = text2 + 0 + "<br>";
	getCrust(runningTotal,text1,text2)
};

function getCrust(runningTotal,text1,text2) {
	var crustTotal = 0;
	var selectedCrust;
	var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedCrust = crustArray[j].value;
			text1 = text1 + selectedCrust + "<br>";
		}
		if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = 3;
		}
	}
	runningTotal = (runningTotal + crustTotal);
	text2 = text2 + crustTotal + "<br>";
};





