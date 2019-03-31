let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(element.toLowerCase().split(/\s+/).join("-"));
  });
  return urls;
}
console.log(imperativeUrls(states));

function urlify(string){
  return string.toLowerCase().split(/\s+/).join("-");
}
function functionalUrls(elements){
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// function functionalFullUrls(elements){
//     return elements.map(element => `https://example.com/${urlify(element)}`);
// }
// console.log(functionalFullUrls(states));

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

//singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}

console.log(functionalSingles(states));

function functionalDokotas(elements) {
  // return elements.filter(element => element.split(/\s+/).length === 2);
  return elements.filter(element => element.includes("Dakota"));
}
console.log(functionalDokotas(states));

let numbers = [1,2,3,4,5,6,7,8,9,10];
//sum: Imperative solution
function imperativeSum(elements){
  let total = 0;
  elements.forEach(function(n){
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

//sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total,n) => {return total += n});
}
console.log(functionalSum(numbers));

//length: Imperative solution
function imperativeLengths(elements){
  let lengths = {};
  elements.forEach(function(element){
    lengths[element] = element.length;
  });
  return  lengths;
}
console.log(imperativeLengths(states));

//length: Functional solution
function functionalLengths(elements){
  return elements.reduce((lengths,element) => {
                   lengths[element] = element.length;
                   return lengths;
                 },{});
}
console.log(functionalLengths(states));
