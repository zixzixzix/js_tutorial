(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("zix-palindrome");
let string = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(string);
if(phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`);
}else{
  alert(`"${phrase.content}" is a not a palindrome!`);
}

},{"zix-palindrome":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
