//choices for memory words 
var word1 = [
  'grapefruit',
  'hippopotamus',
  'celtic',
  'submarine',
  'juicery',]

var word2 = [
  'projector',
  'scenery',
  'restaurant',
  'cuisine',
  'imagery',
  'packaging',
  'photograph',
  'cinematography',
  'acrylic',
  'layout',
  'program',]

var word3 = [
  'landscape',
  'cumulus',
  'nimbus',
  'reflection',
  'ripples',
  'risograph',
  'stationary',
  'mango',
  'strawberry',
  'yogurt',
  'traffic',]

var word4 = [
  'technical',
  'bookmarks',
  'transformation',
  'notebook',
  'lemonade',
  'tumeric',
  'emergency',
  'cloud',
  'scared',
  'dragon',]



//show random word
function newWord1() {
  var randomNumber = Math.floor(Math.random() * (word1.length));
  document.getElementById('word1Display').innerHTML = word1[randomNumber];
  return word1[randomNumber];
}

function newWord2() {
  var randomNumber = Math.floor(Math.random() * (word2.length));
  document.getElementById('word2Display').innerHTML = word2[randomNumber]; return word2[randomNumber];
}

function newWord3() {
  var randomNumber = Math.floor(Math.random() * (word3.length));
  document.getElementById('word3Display').innerHTML = word3[randomNumber]; return word3[randomNumber];
}

function newWord4() {
  var randomNumber = Math.floor(Math.random() * (word4.length));
  document.getElementById('word4Display').innerHTML = word4[randomNumber]; return word4[randomNumber];
}




$(document).ready(function () {
  //call the function and store the return value
  $("#words").click(
    function () {
      //click
      let w1 = newWord1();
      let w2 = newWord2();
      let w3 = newWord3();
      let w4 = newWord4();


      // display word 1
      console.log(w1);
      console.log(w2);
      console.log(w3);
      console.log(w4);




      $("#guess-btn").click(function () {

        //turn guess value into number
        let g1 = Number($("guess1").val());
        let g2 = Number($("guess2").val());
        let g3 = Number($("guess3").val());
        let g4 = Number($("guess4").val());

        console.log(g1, g2, g3, g4);

        //compare guess with word
        if (g1 != w1) {
          $("#message").text("You're wrong!");
          $("#icon").attr("src", "tick.png");
        } else if (g1 == w1) {
          $("#message").text("You're correct!");
          $("#icon2").attr("src", "wrong.png");
        }
        if (g2 != w2) {
          $("#message").text("You're wrong!");
                   $("#icon").attr("src", "wrong.png");

        } else if (g2 == w2) {
          $("#message").text("You're correct!");
            $("#icon2").attr("src", "tick.png");
        }
        if (g3 != w3) {
          $("#message").text("You're wrong!");
                   $("#icon").attr("src", "wrong.png");
        } else if (g3 == w3) {
          $("#message").text("You're correct!");
            $("#icon2").attr("src", "tick.png");
        }
        if (g4 != w4) {
          $("#message").text("You're wrong!");
                   $("#icon").attr("src", "wrong.png");
        } else if (g4 == w4) {
          $("#message").text("You're correct!");
            $("#icon2").attr("src", "tick.png");
        }
      });

    });

  //make 4 random words disappear after 4 second
  setTimeout(function () {
    $('#words').slideUp(1000);
    //.fadeOut('fast');
  }, 6000);

  setTimeout(function () {
    $('#guess').slideDown(700);
  }, 10000);


  $('html').css("width", '100vw').css("height", '100vh').css("background",'linear-gradient(270deg, #8b85df, #71c7cf, #528cd6').css("background-size", '600% 600%').css("-webkit-animation", 'AnimationName 30s ease infinite').css("-moz-animation", 'AnimationName 30s ease infinite').css("animation", 'AnimationName 30s ease infinite')

  $('body').css("font-family", 'Comfortaa').css("color", 'white').css("margin-left", '50px').css("margin-right", '10vw').css("margin-top", '10vh');
   $('h1').css("font-family", 'Comfortaa').css("font-weight", '300').css("font-size", '44px');

  $('words').css("width", '100px');
  $('text').css("height", '30px');
  $('words').css("line-spacing", '1.8');

  $('button').css("font-family", 'Comfortaa');
  $('button').css("height", '35px');

  $('guess').css("font-family", 'Comfortaa').css("height", '35px');


  $('#guess1').css("font-family", 'Comfortaa').css("font-size", '22px').css("width", '30vw').css("height", '45px');
//.css("opacity", '.1')
  
  $('#guess2').css("font-family", 'Comfortaa').css("font-size", '22px').css("width", '30vw').css("height", '45px');
  $('#guess3').css("font-family", 'Comfortaa').css("font-size", '22px').css("width", '30vw').css("height", '45px');
  $('#guess4').css("font-family", 'Comfortaa').css("font-size", '22px').css("width", '30vw').css("height", '45px');
});




