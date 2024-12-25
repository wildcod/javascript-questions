function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


const shuffle = (arr) => {
  if(!arr || !Array.isArray(arr)) return new Error('invalid input');

  if(arr.length === 1) return arr;

  for(let i=arr.length - 1; i>=1; i--){
    const randomIndex = getRandomIntInclusive(0, i);
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  
  return arr;
}


const arr = [1, 2, 3, 4];

console.log(shuffle(arr))
console.log(shuffle(arr))
console.log(shuffle(arr))
console.log(shuffle(arr))
console.log(shuffle(arr))
console.log(shuffle(arr))