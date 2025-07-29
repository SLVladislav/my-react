import { Navigate } from "react-router-dom";


export const PrivateRoute = ({children}) => {
    const isAuthenficated = true;

    if (isAuthenficated) {
        return children;
    };

    return <Navigate to="/"/>
}