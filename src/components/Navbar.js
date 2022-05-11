import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="https://www.redwolf.in/image/catalog/artwork-Images/mens/marvel-the-punisher-skull-t-shirt-artwork.png" alt="" width="30" height="30" />
                    </Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/form">Form</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
