import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTocart, emptyCart } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const cartArray = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  // console.log(cartArray);
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()
  const totalAmount = () => {
    if (cartArray.length > 0) {
      setTotal(cartArray.map(item => item.price).reduce((n1, n2) => n1 + n2))
    }
    else {
      setTotal(0)
    }
  }
  const checkOut = () => {
    alert('Thank you')
    dispatch(emptyCart())
    navigate('/')
  }
  useEffect(() => {
    totalAmount()
  }, [cartArray])

  return (
    <div style={{ marginTop: '100px' }}>
      {
        cartArray.length > 0 ?

          <>

            <div className='row ms-5 me-5'>
              <div className='col-md-8'>
                <table className='container mt-5 border shadow table table-hover'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>image</th>
                      <th>price </th>
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartArray.map((product, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{product.title}</td>
                          <td><img width={'100px'} src={product.thumbnail} alt="" /></td>
                          <td>${product.price}</td>
                          <td><button onClick={() => dispatch(deleteTocart(product.id))} style={{ backgroundColor: 'white', borderColor: 'white' }} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>

              <div className="col-md-1"></div>

              <div className='p-5 col-lg-3 border shadow rounded mt-5 mb-1'>
                <h3 className='fw-bolder text-center text-primary mb-5'>Cart Summary</h3>
                <h5 className='ms-2'>Total Products : <span>{cartArray.length}</span></h5>
                <h4 className='ms-2'>Total : $ <span>{total}</span></h4>
                <div className='d-grid mt-5'><button onClick={() => checkOut()} className='btn btn-success rounded'>Checkout</button></div>
              </div>
            </div>
          </>
          : <p className='mt-5 ms-5  fs-3 text-danger'>Cart Is Empty!!!</p>
      }
    </div>
  )
}

export default Cart