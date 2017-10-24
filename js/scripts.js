// accepts string, returns true if string == palindrome, false otherwise
var isPalindrome = function (string){
  
  var stringArray = string.split("");
  stringArray = stringArray.reverse();
  var reverse = stringArray.join("");
  return (string === reverse);
}

$(document).ready(function(){
  $("form#machine").submit(function(event){
    $("#result").text("");
    event.preventDefault();
    var potentialDrome = $("#input").val();

    var result = isPalindrome(potentialDrome);

    if (result === true) {
      $("#result").append("That's a real deal palindrome!");
    } else {
      $("#result").append("That's a non-palindromic disaster!")
    }
  });
});
