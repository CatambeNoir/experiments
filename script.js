var button = document.getElementById("clickme");
var didascalia = document.getElementById("didascalia");
var counter = 0;
var clicks = 9;
var fontSizeStr = "20pt";
var displayStr = "";

button.onclick = function() {
  
  counter = clicks % 9;
  
  switch (counter) {
  case 0:
    displayStr = "Tu";
      fontSizeStr = "20pt";
    break;
  case 1:
    displayStr = "Sei";
      fontSizeStr = "30pt";
    break;
  case 2:
     displayStr = "Senza";
      fontSizeStr = "20pt";
    break;
  case 3:
    displayStr = "Dubbio";
      fontSizeStr = "10pt";
    break;
  case 4:
    displayStr = "Una...";
      fontSizeStr = "15pt";
    break;
  case 5:
    displayStr = "...";
      fontSizeStr = "20pt";
    break;
        case 6:
    displayStr = ".....";
      fontSizeStr = "20pt";
    break;
        case 7:
    displayStr = ".......";
      fontSizeStr = "20pt";
    break;
  case 8:
    displayStr = "!!!GRUFOLA!!!";
      fontSizeStr = "100pt";
      didascalia.innerHTML = "e comunque ti amo...clicca qui";
      didascalia.style.fontSize = "15pt";
      
}
  
  
  
  clicks += 1;
  button.innerHTML = displayStr;
  button.style.fontSize = fontSizeStr;
};