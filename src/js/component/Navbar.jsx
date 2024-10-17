import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar d-flex navbar-dark bg-dark navbar-expand-lg">
                <a className="ps-3 me-auto navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="navbarText">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                    </ul>
                    <span className="navbar-text pe-2">Contact</span>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
