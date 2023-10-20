import React from 'react'
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function Footer() {
  return (
    <div style={{marginTop:'100px'}} className='bg-dark '>
      <div className='d-flex flex-column align-items-center justify-content-center' style={{ width: '100%', height: '300px' }}>
        <div className="footer d-flex  justify-content-evenly w-100">
          <div style={{ width: '400px' }} className="website">
            <h4>
              <i className="fa-solid fa-cart-shopping fa-fade" style={{ color: ' #0e54cd' }}></i>
              <span style={{ color: '#E75480' }}>E-cart</span>
            </h4>
            <h6>Designed and built with all the love in the world by the E-cart team with the help of our contributors</h6>
            <h6>Code licensed MIT,docs CC BY 3.0</h6>
            <p>Currently v5.3.2</p>
          </div>
          <div className="links d-flex flex-column">
            <h4>Links</h4>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
            <Link to={'/cart'} style={{ textDecoration: 'none', color: 'black' }}>Cart</Link>
            <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'black' }}>Wish list</Link>
          </div>
          <div className="guides d-flex flex-column">
            <h4>Guides</h4>
            <Link to={'https://react.dev/'} style={{ textDecoration: 'none', color: 'black' }}>React</Link>
            <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none', color: 'black' }}>React Bootstrap</Link>
            <Link to={'https://www.w3schools.com/react/react_router.asp'} style={{ textDecoration: 'none', color: 'black' }}>Routing</Link>
          </div>
          <div className="guides d-flex flex-column">
            <h4>Contact Us</h4>
            <div>
              <Form className='d-flex justify-content-evenly'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter Your Email Id" />
                </Form.Group>
                <Button className='ms-2' variant="primary" type="submit" style={{ backgroundColor: "#1167b1", height: "2.2rem" }}>
                  <i className="fa-solid fa-arrow-right" style={{ color: 'black' }}></i>
                </Button>
              </Form>
            </div>
            <div className='fs-5'>
              <Link className='me-3' to={''} style={{ textDecoration: 'none', color: 'black' }}><i className="fa-solid fa-envelope"></i></Link>
              <Link className='me-3' to={''} style={{ textDecoration: 'none', color: 'black' }}><i className="fa-brands fa-twitter"></i></Link>
              <Link className='me-3' to={''} style={{ textDecoration: 'none', color: 'black' }}><i className="fa-brands fa-linkedin"></i></Link>
              <Link className='me-3' to={''} style={{ textDecoration: 'none', color: 'black' }}><i className="fa-brands fa-instagram"></i></Link>
              <Link className='me-3' to={''} style={{ textDecoration: 'none', color: 'black' }}><i className="fa-brands fa-github"></i></Link>
              <Link className='me-3' to={''} style={{ textDecoration: 'none', color: 'black' }}><i className="fa-brands fa-facebook"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer