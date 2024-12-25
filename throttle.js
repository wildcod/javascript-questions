// Question implement lodash throttle method
const throttle = function (func, wait){
    // Waiting is used to open the waiting window
    // lastArgs stores, last function args which invoked in the last during waiting window.
    let waiting = false, lastArgs = null;
  
    return function (...args){
        if(!waiting){
          func.apply(this, args);
          waiting = true;
  
          const timeout = () => setTimeout(() => {
             waiting = false;
             
             // If there was any function call during waiting window, invoke it.
             if(lastArgs){   
              func.apply(this, lastArgs);
              waiting = true;
              lastArgs = null;
              timeout();
             }
          }, wait)
          timeout();
        }else {
          lastArgs = args;
        }      
    }
  }