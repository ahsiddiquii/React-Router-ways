import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import User from "../../data/User";

const Header = () => {
    const location = useLocation();

    const uniquePositionObj = {};
    const uniquePositionArr = [];

    User.map(({ position }) => {
        if (!uniquePositionObj[position]) {
            uniquePositionObj[position] = true;
            uniquePositionArr.push(position);
        }
    });



    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            {/* Dropdown */}
                            <li className="relative group">
                                <Link
                                    to="employees"
                                    className={`block py-2 pr-4 pl-3 ${location.pathname === "/" ? "text-orange-700" : "text-gray-700"
                                        } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                >
                                    Employees
                                </Link>
                                <div className="absolute bg-white shadow-lg rounded-lg top-full left-0 mt-1 w-40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                                    <NavLink to="employees">
                                        All Employess
                                    </NavLink>
                                    <hr />
                                    {uniquePositionArr.map((val, index) => (
                                        <NavLink
                                            key={index}
                                            // to={`/position/${val.includes(" ") ?
                                            //     val.replace(/\s+/g, "") : val}`}
                                            to={`/position/${val}`}
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            {val}
                                        </NavLink>
                                    ))}
                                    {/* {User.map((val, index) => (
                                        <NavLink
                                            key={index}
                                            to={`/employee/${val.id}`}
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            {val.name}
                                        </NavLink>
                                    ))} */}
                                </div>
                            </li>

                            <li>
                                <NavLink
                                    to="contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="github"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
