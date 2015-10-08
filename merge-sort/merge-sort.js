/**
 * Created by michelleanderson on 08/10/15.
 */

function mergeSort(arr) {
  var middle,
      firstHalf,
      secndHalf;

  if (arr.length === 1) {
    return arr;
  }

  middle = Math.floor(arr.length/2);
  firstHalf = arr.slice(0, middle);
  secndHalf = arr.slice(middle, arr.length);

  console.log(middle);
  console.log("first half:", firstHalf, "second half:", secndHalf);

  return merge(firstHalf, secndHalf);
}

/** Pseudocode:
 for k=1 to n
   if A(i) < B(j)
     C(k) = A(i)
     i++
   else
     [B(j) < A(i)]
     C(k) = B(j)
     j++
**/
function merge(left, right) {
  var i = 0,
      j = 0;
      k = 0;

  //merging the 2 sub arrays into answer
  while(i <= left.length && j <= right.length) {
      if(left[i] < right[j]) {
        answer.push(left[i]);
        i++;
      } else {
        answer.push(right[j]);
        j++;
      }
      k++;
  }

  //taking care of the case where there are leftovers
  //in left
  while() {

  }

  //in right
  while() {

  }

  return answer;


  //for(var k=0; k<left.length; k++) {
  //  if(left[i] < right[j]) {
  //    answer.push(left[i]);
  //    i++;
  //  } else {
  //    answer.push(right[j]);
  //    j++;
  //  }
  //}
  //console.log("answer:", answer);
  //return answer;
}

var answer = [];
var testArr = [5, 4, 1, 8, 7, 2, 6, 3];
var mergeSort = mergeSort(testArr);

console.log("final merge sort:", mergeSort);

