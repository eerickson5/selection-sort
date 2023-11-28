function selectionSort(arr) {
  function applyFirst (array) {
    if(array.length > 1){
      let newArray = [...array];
      let smallNum = Math.min(...newArray);
      newArray.splice(newArray.indexOf(smallNum), 1);
      return [smallNum, ...applyFirst(newArray)];
    } else {
      return array;
    }
  
  }
  return applyFirst(arr);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5, 5, 234]");
  console.log("=>", selectionSort([3, 5, -1, 5, 2, 234]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const startTime = new Date();

  //creates long array to send to algorithm
  const longInput = [];
  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  // sends long and short array to algorithm
  for(let i = 0; i < 1000; i++){
    selectionSort(longInput);
    selectionSort([41,325,3]);
  }

  //tells me how long it took on average for all 2000 runs
  const endTime = new Date();
  const avgRuntime = (endTime.getTime() - startTime.getTime()) / 2000;
  console.log("Average Runtime: " + avgRuntime);
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

// store the current time in a variable called start time

// loop 1000 times:
//   execute the method using a small input, e.g. three items if input is an Array
//   execute the method using a larger input, e.g. 100 items if input is an Array

// average runtime = (current time - start time) / 2000

/*

function applyFirst (arr) {
  if array length > 1
    given array
    find smallest number
    save smallest number
    remove smallest number
    return applyFirst(smallerArray);
  else
    return array
}
*/