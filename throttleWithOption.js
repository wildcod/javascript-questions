// Question implement lodash throttle method with option
// implement a enhanced throttle() which accepts third parameter, 
// option: {leading: boolean, trailing: boolean}

// leading: whether to invoke right away
// trailing: whether to invoke after the delay.


const throttle = function (func, wait, option = {leading: true, trailing: true}){
    // Waiting is used to open the waiting window
    // lastArgs stores, last function args which invoked in the last during waiting window.
    let waiting = false, lastArgs = null;
  
    return function (...args){
        if(!waiting){
          if(option.leading){
            func.apply(this, args);
          }  
          waiting = true;
  
          const timeout = () => setTimeout(() => {
             waiting = false;
             
             // If there was any function call during waiting window, invoke it.
             if(lastArgs && option.trailing){   
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