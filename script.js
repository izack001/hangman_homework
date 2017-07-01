
window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var word ;              // Selected word
  var guess ;             // Guesses
  var guesses = [ ];      // Variable guesses
  var lives ;             // Lives
  var counter ;           // Count right guesses
  
  var space; // NICE TRICK!    // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
 
  // create alphabet ul (UN ORDERRED LIST!!! A)
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';  //FRUIT LOOPS!!!
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters); //puts stuff on screen
      letters.appendChild(list); // same as above I think
    }
  }
    
  
  // Choose  Catagory  ???? I don't think this is working propertly 
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "Zoo Animals";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "Cult Movies";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "NFL Teams";
    }
  }

    // Create geusses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // SHOW LIVES AND GUESSES 
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

  
  // STILL VERY CONFUSING 
   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);////LET ME TRY THIS THING
      this.setAttribute("class", "active");///????? STACK OVERFLOW
      this.onclick = null;/// ??/????/ 
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
      } else {
        comments();
      }
    }
  }
  
    
  // PLAY FUNCTIONS SEEM TO BE WORKING //// MAKE CATERGORY FOR ALYSSA'S FAVORITE BANDS!!! ''
  play = function () {
    categories = [
        ["zebra", "lion", "monkey", "tiger", "rhino", "gorilla", "croc"],
        ["pulp fiction", "jackie brown", "", "finding-nemo", "jaws"],
        ["steelers", "dolphins", "raiders", "cowboys", "rams"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-"); /// I have no clue what thin thing does but I think it replaces words

    console.log(word);
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
  }

  play();
  
  
   //  RESET STILL NOT WORKING  WELL 

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}




























































