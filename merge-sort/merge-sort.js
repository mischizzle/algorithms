/**
 * Created by michelleanderson on 08/10/15.
 */

function mergeSort(arr) {
  //console.log("merge sort array:", arr);
  var middle, left, right, l, r;

  if (arr.length === 1) {
    //console.log("array length is only 1, return", '\n');
    return arr;
  }

  middle = Math.floor(arr.length/2);
  left = arr.slice(0, middle);
  right = arr.slice(middle, arr.length);

  l = mergeSort(left);
  r = mergeSort(right);

  return merge(l, r);
}

function merge(left, right) {
  var i = 0,
      j = 0,
      k = 0,
      mergedArray = [];

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
  //while() {}

  //in right
  //while() {}
  return mergedArray;
}

var answer = [];
var testArr = [5, 4, 1, 8, 7, 2, 6, 3];
mergeSort(testArr);

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