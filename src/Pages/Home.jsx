import React from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap';
import useFetch from '../Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';

function Home() {
  const data = useFetch("https://dummyjson.com/products")
  const dispatch=useDispatch()
  console.log(data);

  return (
    <Row style={{marginTop:'100px'}}  className=' mb-5 justify-content-center'>
      {
        data?.length > 0 ? data?.map((product, index) => (
          <Col className='mb-5 p-4' key={index} sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow' style={{ width: '18rem', height: "27rem" }}>
              <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
              <Card.Body>
              <p className='fw-bolder fs-4'>${product?.price}</p>

                <Card.Title className='fw-bolder'>{product?.title}</Card.Title>
                <Card.Text>
                  <p>{product?.description.slice(0, 10)}</p>
                </Card.Text>
                <div className='d-flex justify-content-evenly'>
                  <Button onClick={()=>dispatch(addToWishlist(product))} style={{backgroundColor:'white',borderColor:'white'}} className='btn'><i className='fa-solid fa-heart text-danger fa-2x'></i></Button>
                  <Button onClick={()=>dispatch(addToCart(product))} style={{backgroundColor:'white',borderColor:'white'}}  className='btn btn-light'><i className='fa-solid fa-cart-plus fa-2x text-success'></i></Button>

                </div>
              </Card.Body>
            </Card>
          </Col>
        )) : "nothing to display"
      }
    </Row>



  )
}

export default Home