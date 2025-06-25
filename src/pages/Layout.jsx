import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/movies">Movies</NavLink>
                </nav>
                <main>
                    <Outlet />
                </main>
            </header>
        </div>
    );
}

export default Layout;