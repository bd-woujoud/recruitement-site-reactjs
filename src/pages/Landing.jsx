import React from 'react'
import { Link } from 'react-router-dom'
const landing = () => {
    return (
            <section id="hero" className="d-flex align-items-center" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>The secret of getting ahead is getting started</h1>
                            <h2>You can go as far as your mind lets you. What you believe, remember, you can achieve.</h2>
                            <div><Link to='/register'><a href="#about" className="btn-get-started scrollto">Get registred</a></Link></div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src="assets/img/hero-img.png" className="img-fluid" alt />
                        </div>
                    </div>
                </div>
            </section> 

       
    )
}

export default landing
