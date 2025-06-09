
import { useState } from 'react';

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
// }

export const ClickCounter = () => {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };
    return (
        <button onClick={handleClick}>Current:{clicks}</button>
    )
}
