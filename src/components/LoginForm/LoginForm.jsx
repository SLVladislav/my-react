import { useId } from "react";

export const LoginForm = ({ onLogin }) => {
    const loinId = useId();
    const passwordId = useId();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        const form = evt.target;
        const { login, password } = form.elements;
        console.log(login, password);
        onLogin({
            login: login.value,
            password: password.value
        });       

        form.reset();
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={loinId}>Login</label>
            <input type="text" name="login" id={loinId} />

            <label htmlFor={passwordId}>Password</label>
            <input type="password" name="password" id={passwordId} />

            <button type="submit">Log in</button>
        </form>
    );
}