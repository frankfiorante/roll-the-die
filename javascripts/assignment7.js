function diceRoll() {
    var rollNumber, rolls, count;
    var sides = [0,0,0,0,0,0]; //side 1-6
    
    rollNumber = parseInt(document.getElementById("rollNumber").value);
    count = rollNumber;
    
    //isNaN() checks if rollNumber is a number
    if (rollNumber < 0 || isNaN(rollNumber) ) { //Check if rollNumber is valid
        alert("A number less-than 0 was entered." + "\n" + "\n" +"The dice was rolled 0 times.");
        rollNumber = 0;
    }
    
    var i = 0;
    while (i < rollNumber && count != 0) {
        rolls = Math.floor(Math.random() * 6) + 1; //pick random side 1-6
        if (rolls == 1) {
            sides[0] += 1;
        }
        else if (rolls == 2) {
            sides[1] += 1;
        }
        else if (rolls == 3) {
            sides[2] += 1;
        }
        else if (rolls == 4) {
            sides[3] += 1;
        }
        else if (rolls == 5) {
            sides[4] += 1;
        } else {
            sides[5] += 1;
        }
        count--;
    }
    
    document.getElementById('side1').value = sides[0];
    document.getElementById('side2').value = sides[1];
    document.getElementById('side3').value = sides[2];
    document.getElementById('side4').value = sides[3];
    document.getElementById('side5').value = sides[4];
    document.getElementById('side6').value = sides[5];
    
    document.getElementById("rollNumber").value = rollNumber;
}

function ticketCost() {
    var admission = document.getElementById("admission").value;
    var senior = false; //$5 off
    var member = false; //10% off or multiply by 0.1
    var affiliate = false; //5% off or multiply by 0.05
    var price = 0;
    
    if (document.getElementById("senYes").checked) {
        senior = true;
    } else if (document.getElementById("senNo").checked) {
        senior = false;
    } else {
        alert("You have not selected Senior Citizen." + "\n" + "\n" + "No has been selected.")
        document.getElementById("senNo").checked = true;
    }
    
    if (admission == "regular") {
        price += 10.00;
    } else if (admission == "special") {
        price += 15.00;
    } else {
        alert("You have not selected an exhibition." + "\n" + "\n" + "Regular exhibition has been selected.");
        document.getElementById("admission").value = "regular";
    }
    
    if (senior == true && price != 0) {
        price -= 5.00;
    }
    
    if (document.getElementById("member").checked) {
        price = price - (0.1 * price);
    }
    
    if (document.getElementById("affiliate").checked) {
        price = price - (0.05 * price);
    }
    
    if (!document.getElementById("member").checked &&
        !document.getElementById("affiliate").checked &&
        !document.getElementById("nonMember").checked) {
        alert("You have not selected Member, Affiliate, or Non-Member." + "\n" + "\n" + "Non-Member has been selected.");
        document.getElementById("nonMember").checked = true;
    }
    
    document.getElementById('messageBox').value = "The price of your ticket is $" +  price.toFixed(2);
    
    //This has to be the last line of the function!!!!
    if (price == 0) { //Calls the function again after auto selecting for user.
        ticketCost(); //Recusive call.
    }
}