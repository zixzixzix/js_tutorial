let a = ["ant","bat","cat",42];
a.forEach(function(element){
    console.log(element);
  }
);

let soliloquy = "To be, or not to be, that is the question:";

Array.from(soliloquy).forEach((n) => {
  console.log(n);
});
