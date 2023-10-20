import React from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deletefromWishlist } from '../redux/wishlistSlice'
import { addToCart } from '../redux/cartSlice'

function Wishlist() {
  const wishlistArray = useSelector(state => state.wishlistReducer)
  const dispatch = useDispatch()
  const addtoCartfromWishlist=(product)=>{
    dispatch(addToCart(product))
    dispatch(deletefromWishlist(product.id))
  }


return (
  <div style={{ marginTop: '100px' }}>
    <Row className='mb-5 ms-5'>
      {
        wishlistArray.length > 0 ?
          wishlistArray.map((product, index) => (
            <Col className='mb-5 p-4' key={index} sm={12} md={6} lg={4} xl={3}>
              <Card className='shadow ' style={{ width: '18rem', height: "29rem" }}>
                <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
                <Card.Body>
                  <Card.Title>{product?.title}</Card.Title>
                  <Card.Text>
                    <p>{product?.description.slice(0, 10)}</p>
                    <p className='fw-bolder fs-4'>${product?.price}</p>
                  </Card.Text>
                  <div className='d-flex justify-content-evenly'>
                    <Button onClick={() => dispatch(deletefromWishlist(product.id))} style={{ backgroundColor: 'white', borderColor: 'white' }} className='btn btn-light'><i className='fa-solid fa-trash text-danger fa-2x'></i></Button>
                    <Button onClick={()=>addtoCartfromWishlist(product)} style={{ backgroundColor: 'white', borderColor: 'white' }} className='btn btn-light'><i className='fa-solid fa-cart-plus fa-2x text-success'></i></Button>

                  </div>
                </Card.Body>
              </Card>
            </Col>
          )) : <p className='text-danger'>Wishlist Is Empty!!!</p>
      }
    </Row>
  </div>
)
}

export default Wishlist