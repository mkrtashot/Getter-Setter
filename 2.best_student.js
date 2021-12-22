"use strict";

let obj = {
  John: [100, 90, 80],
  Bob: [100, 70, 80],
};

function getBestStudent(object) {
  let bestStudentMark = -Infinity;
  let bestStudent;

  for (key in object) {
    function foo(acc, item) {
      return (acc += item);
    }

    if (object[key].reduce(foo) / object[key].length > bestStudentMark) {
      bestStudent = key;
      bestStudentMark = object[key].reduce(foo) / object[key].length;
    }
  }
  return bestStudent;
}

console.log(getBestStudent(obj));
