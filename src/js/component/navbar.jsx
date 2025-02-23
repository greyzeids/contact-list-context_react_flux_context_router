import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-1">
            <div className="container-fluid">
                <div className="d-flex justify-content-end w-100">
                    <Link to="/add">
                        <button className="btn m-2">
                            Agregar nuevo contacto
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
