import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [isConnected, setIsConnected] = useState(false);
    useEffect(() => {
        localStorage.connected === "true"
            ? setIsConnected(true)
            : setIsConnected(false);
    }, [isConnected, setIsConnected]);

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:3000/api/users/logout", null, {
                withCredentials: true,
            });
            localStorage.connected = false;
            setIsConnected(false);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link to="/salles">Salles</Link>
                        </li>
                      
                        <li>
                            <Link to="/ajouterSalle">Ajouter une Salle</Link>
                        </li>
                    </ul>
                </div>
                <Link
                    className="btn btn-ghost normal-case hover:bg-white text-xl"
                    to="/"
                >
                    SalleEvent
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/salles">Salles</Link>
                    </li>
                    {/* <li tabIndex={0}>
        <details>
          <summary>Actions</summary>
          <ul className="p-2">
            <li><a>Ajouter une Salles</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li> */}
                    <li>
                        <Link to="/ajouterSalle">Ajouter une Salle</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {isConnected ? (
                    <>
                        <button
                            className="btn capitalize"
                            to=""
                            onClick={handleLogout}
                        >
                            Déconnexion
                        </button>
                    </>
                ) : (
                    <>
                        <Link className="btn capitalize" to="/connexion">
                            se Connecter
                        </Link>
                        <Link className="btn capitalize" to="/s'enregistrer">
                            s'enregistrer
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
