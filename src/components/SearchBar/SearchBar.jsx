import { useState } from "react";

// export const SearchBar = () => {
//     const [inputValue, setInputValue] = useState("");

//     const handleChange = (evt) => {
//         setInputValue(evt.target.value)
//     }

//     return (
//         <div>
//             <input type="text" value={inputValue} onChange={handleChange} />
//             <p>{inputValue}</p>
//         </div>
//     );
// }

export const LoginForm = () => {
    const [value, setValue] = useState({
        login: "",
        password: ""
    });

    // const handleLoginChange = (evt) => {
    //     setValue({
    //         ...value,
    //         login: evt.target.value,
    //     })
    // };

    //     const handlePwdChange = (evt) => {
    //         setValue({
    //             ...value,
    //             password: evt.target.value,
    //         });

   
        // };
    const handeleChange = (evt) => {
        // evt.preventDefault();
            console.log(evt.target.value);
            console.log(evt.target.name);
            setValue({
                ...value,
                [evt.tarhet.name]: evt.target.value
            })            
    };
    const handeleSubmit = (evt) => {
        evt.preventDefault();
        
        console.log(value);
        setValue({
            login: "",
            password: ""
        });
        
    };

        return (
            <form action="" onSubmit={handeleSubmit}>
                <input type="text" name="login" value={value.login} onChange={handeleChange} />
                <input type="text" name="password" value={value.password} onChange={handeleChange} />
                <button type="submit">Login</button>
            </form>
        )
    }