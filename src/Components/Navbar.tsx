import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid my-2">
                <a onClick={(e: React.MouseEvent) => e.preventDefault()} className="navbar-brand fs-4" href="/">
                    M - Kart
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a onClick={(e: React.MouseEvent) => e.preventDefault()} className="nav-link" aria-current="page" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={(e: React.MouseEvent) => e.preventDefault()} className="nav-link" href="/">
                                Shop
                            </a>
                        </li>
                    </ul>
                    <span className="me-4 btn btn-success">Total Amount : {0}</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
