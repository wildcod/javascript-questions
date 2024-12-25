// Question: implement your own version of basic debounce()

function debounce (func, wait){
   let timer = null;
   return function (...args){
    // always clear the timeout 
    clearTimeout(timer);

    timer = setTimeout(() => {
       func.apply(this, args);         
    }, wait)
   } 
}