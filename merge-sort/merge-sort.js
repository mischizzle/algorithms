/**
 * Created by michelleanderson on 08/10/15.
 */

function mergeSort(arr) {
  var middle,
      leftArr,
      rightArr,
      left,
      right;

  if (arr.length === 1) {
    return arr;
  }

  middle = Math.floor(arr.length/2);
  leftArr = arr.slice(0, middle);
  rightArr = arr.slice(middle, arr.length);

  /** Calling merge sort again will divide into sub arrays until only 1 or 0 leaf nodes; **/
  left = mergeSort(leftArr);
  right = mergeSort(rightArr);

  return _merge(left, right);

  /** local function **/
  function _merge(left, right) {
    var i = 0,
        j = 0,
        mergedArray = [];

    /** merging the 2 sub arrays into answer **/
    while(i < left.length && j < right.length) {
      if(left[i] <= right[j]) {
        mergedArray.push(left[i]);
        i++;
      } else {
        mergedArray.push(right[j]);
        j++;
      }
    }

    /** taking care of the case where there are leftovers **/
    //in left array
    while(i < left.length) {
      mergedArray.push(left[i]);
      i++;
    }

    //in right array
    while(j < right.length) {
      mergedArray.push(right[j]);
      j++;
    }

    return mergedArray;
  }
}


var testArr = [5, 4, 1, 8, 7, 2, 6, 3];
var answer = mergeSort(testArr);

console.log(testArr);
console.log("--- will be sorted into: ---");
console.log(answer);

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