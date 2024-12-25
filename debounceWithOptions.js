// Question: you are asked to implement an enhanced debounce() which accepts third parameter, 
// option: {leading: boolean, trailing: boolean}

// leading: whether to invoke right away
// trailing: whether to invoke after the delay.

function debounce (func, wait, option = {leading: false, trailing: true}){
    let timer = null;
    return function (...args){

     let isLeadingCallInvoked = false;   
     if(timer === null && option.leading){
        func.apply(this, args);
        isLeadingCallInvoked = true;
     }

     // always clear the timeout 
     clearTimeout(timer);
 
     timer = setTimeout(() => {
        if(option.trailing && !isLeadingCallInvoked){
            func.apply(this, args);
        }
        isLeadingCallInvoked = false;
        timer = null;         
     }, wait)
    } 
 }