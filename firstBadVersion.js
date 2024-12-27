/*
If you have 500 revisions of a program, write a program that will find
and return the FIRST bad revision given a isBad(revision i) function.
*/


function firstBadVersion(isBad) {
  return (version) => {
    let left = 1;
    let right = version;
    let output = -1;

    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);

        if(isBad(mid)){
           output = mid;
           right = mid - 1;
        }else {
            left = mid + 1;
        }
    }

    return output;
  }
}

console.log(firstBadVersion((i) => i >= 4)(100));