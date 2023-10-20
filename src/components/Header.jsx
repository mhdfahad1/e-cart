import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
    const wishlist=useSelector((state)=>state.wishlistReducer)
    const cart=useSelector((state)=>state.cartReducer)
    return (
        <nav style={{zIndex:'1'}} className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100">
            <div className="container px-4 px-lg-5">
                <Link to={'/'} style={{ textDecoration: 'none' ,fontSize:'30px',color:'black'}}><i className="fa-solid fa-cart-shopping fa-fade " style={{color:'#0e54cd'}}></i>{"  "}E-cart</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">

                    </ul>
                    <form className="d-flex">
                        <Link to={'/wishlist'} className="btn btn-outline-dark" type="submit">
                            <i className="fa-solid fa-heart" style={{color:'#e70d0d'}}></i>                           
                            wishlist <span className="badge bg-dark text-white ms-1 rounded-pill">{wishlist.length}</span>

                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to={'/cart'} className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header