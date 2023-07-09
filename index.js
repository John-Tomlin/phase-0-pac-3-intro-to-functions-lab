
function shout(string) {
    return string.toUpperCase();
  }
{

function whisper(string) {
    return string.toLowerCase();
  }
}

function logShout(string){
  console.log(string);
  console.log(string.toUpperCase());
  }

function logWhisper(string){
  console.log(string);
  console.log(string.toLowerCase());
  }

  

function sayHiToHeadphonedRoommate(aWord){
  var cantHear = "I can't hear you!";
  var canHear = "YES INDEED!";
  var LovTo = "I would love to!";

  if (aWord.toLowerCase(aWord) === aWord) {return cantHear;}
 
  else if (aWord.toUpperCase(aWord) === aWord) {return canHear;}

  else if ("Let's have dinner together!" === aWord) {return LovTo;}
}
