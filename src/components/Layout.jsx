import { NavLink, Outlet } from "react-router-dom";



const Layout = () => {
    return (
        <div>
            <header>
                <nav className="p-4">
                    <NavLink to="/" className="pr-4">Home Page</NavLink>
                    <NavLink to="/dogs">Collections</NavLink>
                </nav>
            </header>
            <main> <Outlet /></main>
            <footer>Footer</footer>
        </div>
    );
}
export default Layout;