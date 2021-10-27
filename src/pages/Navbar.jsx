import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../assets/css/Navbar.css'
import { selectisauth } from '../features/users/userSlice'
import { useHistory } from 'react-router'

const Navbar = () => {

    const history = useHistory()
    function Refresh() {
        localStorage.clear()
        history.push('/login')
        window.location.reload()
    }
    /*     const isauth = useSelector(selectisauth)
     */
    const [isauth, setisauth] = useState(localStorage.getItem('isauth'))

    return (
        <div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">
                    <a href="index.html"><img src="assets/img/logo.png" style={{ height: '100px' }} /></a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#about">About</a></li>
                            <li><a className="nav-link scrollto" href="#services">Services</a></li>
                            <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                            <li><a className="nav-link scrollto" href="#team">Team</a></li>
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>

                            {!isauth && <li><Link to='/login'><button className="login-nav-item" >Login</button></Link></li>}
                            {isauth && <li><button onClick={() => Refresh()} className="login-nav-item" >logout</button></li>}
                        </ul>

                    </nav>{/* .navbar */}
                </div>
            </header>

        </div>
    )
}

export default Navbar
