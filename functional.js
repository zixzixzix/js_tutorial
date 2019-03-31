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

function functionalFullUrls(elements){
    return elements.map(element => `https://example.com/${urlify(element)}`);
}
console.log(functionalFullUrls(states));
