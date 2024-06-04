import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
            <header className="w-full py-4 bg-white shadow">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
                        PANCHAWAT
                    </div>


                    <button
                        className="lg:hidden text-gray-800"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {showMobileMenu ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    <div className="hidden lg:flex space-x-4">
                        {[
                            { to: "/", label: "Home" },
                            { to: "/about", label: "About" },
                            { to: "/contact", label: "Contact" },
                            { to: "/blog", label: "Blog" },
                        ].map(({ to, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                className="text-lg font-medium text-gray-700 hover:text-blue-600"
                                activeClassName="text-blue-600 border-b-2 border-blue-600"
                            >
                                {label}
                            </NavLink>
                        ))}
                    </div>
                </nav>

                {/* Mobile Menu Links (Visible when Burger Menu clicked) */}
                {showMobileMenu && (
                    <div className="lg:hidden mt-2 w-full bg-white shadow">
                        <div className="px-4 py-3">
                            {[
                                { to: "/", label: "Home" },
                                { to: "/about", label: "About" },
                                { to: "/contact", label: "Contact" },
                                { to: "/blog", label: "Blog" },
                            ].map(({ to, label }) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    className="block text-lg font-medium text-gray-700 hover:text-blue-600 py-2"
                                    activeClassName="text-blue-600 border-b-2 border-blue-600"
                                    onClick={() => setShowMobileMenu(false)} // Close the menu after clicking
                                >
                                    {label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            <main className="flex-grow flex items-center justify-center w-full">
                <Outlet />
            </main>

            <footer className="w-full py-4 bg-white shadow mt-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm text-gray-500">&copy; 2024 John Doe's Portfolio. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
