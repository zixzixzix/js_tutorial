//Reverse a string
function reverse(string){
  return Array.from(string).reverse().join("");
}

//Retrun true for a palindrome,false otherwise.
function palindrome(string){
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

function emailParts(string){
  return string.toUpperCase();
}
