
// import { useState, useEffect } from 'react';

// export const SubmitBtn = () => {
//     // let clicks = 0;
//     const [clicks, setClicks] = useState(0);
//     const [isOpen, setIsOpen] = useState(false);
//     const handleClick = () => {
//         // clicks = clicks + 1;
//         setClicks(clicks + 5);
//     };
//     const handleToggle = () => {
//         setIsOpen(!isOpen);
//     }
//     return (
//         <>
//             <button onClick={handleClick}>Current:{clicks}</button>
//             <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
//             {isOpen && <p>Now you can see me!</p>}
//         </>
//     );
// 

// const Modal = () => {
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             console.log(`Interval - ${Date.now()}`);
//         }, 2000);

//         return () => {
//             clearInterval(intervalId);
//         };
//     }, []);
//     return <div>Modal</div>
// };

// export const ClickCounter = () => {
//     // const [isOpen, setIsOpen] = useState(false);
//     // const [first, setFirst] = useState(0);
//     // const [second, setSecond] = useState(0);
//     const [clicks, setClicks] = useState(0);

//     useEffect(() => {
//         // console.log(`Clicks changed - ${clicks}`);
//         window.localStorage.setItem("saved-clicks", clicks)
        
//     }, [clicks]);



    // useEffect(() => {
    //     console.log("First update: ", first);
        
    // }, [first]);

    // useEffect(() => {
    //     console.log("Second update: ", second);
    // }, [second]);


    // useEffect(() => {
    //     console.log("First or Secomd update: ", first + second);
        
    // }, [first, second]); 
 
//     return (
//         <div>
//             <button onClick={() => setClicks(clicks + 1)}>
//                 You clicked {clicks} times
//             </button>
//             <button onClick={() => setClicks(0)}>Reset</button>
//         </div>
//     );
// }
