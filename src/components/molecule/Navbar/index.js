import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../../asset/icon/logo.png';
const Navbar = () => {
    return (
        <>
            <div className="container py-2">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand fz12" to="/"><img src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav mx-auto position-relative" style={{left:'7rem'}}>
                            <li className="nav-item active">
                                <Link className="nav-link fz12 text-dark font-weight-bold border-bottom" to="/">New Releases <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fz12 text-dark font-weight-bold" to="/">Men</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fz12 text-dark font-weight-bold" to="/">Women</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fz12 text-dark font-weight-bold" to="/">Kids</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fz12 text-dark font-weight-bold" to="/">Customize</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link fz12" to="#">Women</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fz12" to="#">Kids</Link>
                            </li>
                        </ul>
                    </div>
                </nav>  
            </div>
        </>
    )
}
const Memoized = React.memo(Navbar)
export default Memoized;
