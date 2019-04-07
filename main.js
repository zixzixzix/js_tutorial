let Phrase = require("zix-palindrome");

function palindromeTester(event){
  event.preventDefault();
  let string = event.target.phrase.value
  let phrase = new Phrase(string);
  if(phrase.palindrome()) {
    palindromeResult.innerHTML = `<strong>"${phrase.content}"</strong> is a palindrome!`;
  }else{
    palindromeResult.innerHTML = `<strong>"${phrase.content}"</strong> is not a palindrome!`;
  }
}

document.addEventListener("DOMContentLoaded", function(){
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit",function(event){
    palindromeTester(event);
  });
});
