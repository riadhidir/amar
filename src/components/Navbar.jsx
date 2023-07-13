import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-transparent absolute ">
            <div className="navbar-start">
                
                <a className="btn btn-ghost normal-case text-xl text-white  ">salleEvent</a>
            </div>
            
            <div className="navbar-end">
           <div className=" gap-5 mr-3 hidden lg:flex">
            <Link to="#" className="text-white text-xl">fzefz</Link>
            <Link to="#" className="text-white text-xl">fzefz</Link>
            <Link to="#" className="text-white text-xl">fzefz</Link>
            <Link to="#" className="text-white text-xl">fzefz</Link>
           </div>
            <div className="dropdown dropdown-end lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                      
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>Homepage</a>
                        </li>
                        <li>
                            <a>Portfolio</a>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
