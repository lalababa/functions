//--------first exercise---------

// The second argument/parameter is expected to be a (callback) function
// const findWaldo = function(names, found) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

// const actionWhenFound = function(index) {
//   console.log('Found Waldo at index ' + index);
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);




//------------second exercise------------

const findWaldo = function(names,found) {
  // for (let i = 0; i < names.length; i++) {
  //   let name = names[i];
  //   if (name === "Waldo") {
  //     found(i);   // execute callback
  //   }
  // }
  names.forEach ((element,index) => {
    if (element === "Waldo"){
      found(index);
    }
  })
}

const actionWhenFound = function(index) {
  console.log('Found Waldo at index ' + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
