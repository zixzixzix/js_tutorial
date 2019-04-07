module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function(){
  return Array.from(this).reverse().join("");
}

// Define a Phrase object.
function Phrase(content){
  this.content = content;
  // Retruns cotent processed for palindrome testing.
  this.processedContent = function (){
    return this.letters().toLowerCase();
  }
  //Retruns the latters in the content.
  this.letters = function (){
    // const letterRegex = /[a-z]/i;
    // return Array.from(this.content).filter(c => c.match(letterRegex)).join("");
    return (this.content.match(/[a-z]/gi) || []).join("");
  }
  // Retruns ture if the phrase is a palindrome, false otherwise.
  this.palindrome = function (){
    return this.processedContent() === this.processedContent().reverse();
  }
}
