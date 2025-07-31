import { NavLink, Outlet } from "react-router-dom";

const Navigations = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <header className="bg-blue-600 shadow-md">
                <nav className="container mx-auto flex justify-center gap-8 py-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-white text-lg font-semibold transition-colors duration-300 ${isActive ? "border-b-2 border-white pb-1" : "hover:text-gray-200"
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                            `text-white text-lg font-semibold transition-colors duration-300 ${isActive ? "border-b-2 border-white pb-1" : "hover:text-gray-200"
                            }`
                        }
                    >
                        Register
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            `text-white text-lg font-semibold transition-colors duration-300 ${isActive ? "border-b-2 border-white pb-1" : "hover:text-gray-200"
                            }`
                        }
                    >
                        Log In
                    </NavLink>
                    <main>
                        <Outlet />
                    </main>
                </nav>
            </header>
        </div>
    );
};


export default Navigations;