// src/components/Header.js
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="w-full py-4 bg-white shadow">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <NavLink to="/" className="text-2xl font-bold text-blue-600">
                    My Portfolio
                </NavLink>
                <div className="space-x-4">
                    <NavLink 
                        to="/contact" 
                        className="text-lg font-medium text-gray-700 hover:text-blue-600"
                        activeClassName="text-blue-600 border-b-2 border-blue-600"
                    >
                        Contact
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className="text-lg font-medium text-gray-700 hover:text-blue-600"
                        activeClassName="text-blue-600 border-b-2 border-blue-600"
                    >
                        About
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
