/*
 Note: We need to cache data based on the key and 'this' value in case of objects
 cache = {
   [key]: {
    [this]: value
    [this]: value
   }
 }

 TIP:
Map in js
  new Map([ [key1, value1], [key2, value2], ... ])
  Map construtor takes a iterator like Array 
*/

function memo(func, resolver) {
    // your code here
    const cache = new Map()
  
    return function (...args){
      const key = resolver ? resolver(...args) : Array.from(args).join('_');
      
      const cacheResult = cache.get(key);

      if(cacheResult && cacheResult.has(this)){
        return cacheResult.get(this);
      }

      const result = func.apply(this, args);

      if(!cacheResult){
        cache.set(key, new Map([[this, result]]));
      }else {
        cacheResult.set(this, result);
      }

      return result;
    }
}

function func(arg2) {
    return this.val + arg2
}

const memoed = memo(func, () => 'samekey');

const testSubject = {
    val: 1,
    result: memoed 
}

const testSubject2 = {
    val: 2,
    result: memoed 
}

console.log(testSubject.result(2));
// 3, func is called, 3 is cached with key 'samekey'
console.log(memoed(2));
// 3, since key is the same, 3 is returned without calling func
console.log(testSubject2.result(2));

