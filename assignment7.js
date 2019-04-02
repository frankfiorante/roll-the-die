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