import { useRef } from "react";

export const UseFerence = () => {
    const btnRef = useRef();
    console.log(btnRef);
    
  
    return <button ref={btnRef}>Button with ref</button>;
};
  
console.log(UseFerence);
