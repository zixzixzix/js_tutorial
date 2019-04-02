

String.prototype.reverse = function(){
  return Array.from(this).reverse().join("");
}
Array.prototype.last = function(){
  // return this[this.length -1];
  return this.slice(-1)[0];
}
String.prototype.isEmpty = function(){
  // return this.match(/^\s+$/);
  if(this.match(/^\s*$/)){
    return true;
  }else{
    return false;
  }
}
function Phrase(content){
  this.content = content;

  this.processedContent = function (){
    return this.content.toLowerCase();
  }
  this.palindrome = function (){
    return this.processedContent() === this.processedContent().reverse();
  }
}
