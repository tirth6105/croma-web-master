import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Get_Cart, Remove_Product } from "../redux/Action";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Cart() {

  let dispatch = useDispatch();
  let cart = useSelector((store) => store.product);
  let location = useNavigate()
  let [itmes, setItems] = useState("")
  let [total, settotal] = useState(0)
  let [Or_Total, setOr_total] = useState(0)
  let [Dis_Total, setDis_Total] = useState(0)
  useEffect(() => {
    dispatch(Get_Cart())
  }, [])
  const handleDelete = (id) => {
    dispatch(Remove_Product(id))
  }
  // handel buy 

  let totalitmes = cart.cart.length
  useEffect(() => {
    let subtotal = 0
    let cart_total = 0
    let discount_total = 0
    for (let i = 0; i < cart.cart.length; i++) {
      discount_total= Math.floor(discount_total+cart.cart[i].price*10/100)
      subtotal = Number(subtotal) + Number(cart.cart[i].price - Math.floor(cart.cart[i].price*10/100))
      cart_total = Number(cart_total) + Number(cart.cart[i].price)
    }
    settotal(subtotal)
    setItems(totalitmes)
    setOr_total(cart_total)
    setDis_Total(discount_total)
  }, [totalitmes])
  return (
    <section className="bg-cart py-5">
      <Container>
        <div className="d-flex pb-4 justify-content-between ">
          <h4 className="text-uppercase">your carts</h4>
          <button onClick={() => location('/')} className='border-0 bg-transparent'><p className="fw-bold">X</p></button>
        </div>
        <Row>
          <Col sm={12} md={8} >
            {
              cart.cart.map((ele) => {
                return (
                  <>
                    <div className="bg-white shadow my-4 p-4 rounded">
                      <Row className="align-items-center">
                        <Col sm={3}>
                          <img src={ele.img} alt="" />
                        </Col>
                        <Col sm={6}>
                          <p className="cart-title fs-5 fw-semibold">{ele.title}</p>
                          <p className="m-0 text-capitalize">Standard delivery by</p>
                          <p className="cart-title m-0 lt-2">{ele.date} <span className="ps-1">|</span></p>
                          <p className="mb-3 text-capitalize">free</p>
                          <button className="btn btn-outline-primary text-capitalize col-4" onClick={() => handleDelete(ele.id)}>remove</button>
                        </Col>
                        <Col sm={3} className="ps-5">
                          <p className="fs-3 fw-bold text-end mb-1"><span className="fw-light fs-4">₹</span>{Math.floor(ele.price - ele.price*10/100)}</p>
                          <p className="border fs-12 text-end border-top-0 border-start-0 border-end-0 border-black text-capitalize">(Incl. all Taxes)</p>
                          <p className="text-uppercase text-decoration-line-through text-end mb-0">mrp ₹{ele.price}</p>
                          <p className="border fs-12 text-end border-top-0 border-start-0 border-end-0 border-black text-cart text-capitalize">(save ₹{Math.floor(ele.price*10/100)})</p>
                        </Col>
                      </Row>
                    </div>
                  </>
                );
              })
            }
          </Col>
          <Col sm={12} md={4}>
            <div className="bg-white shadow my-4 p-3 rounded">
              <p className="fw-bold text-capitalize fs-4">order summary ( {itmes} items )</p>
              <div className="d-flex justify-content-between">
                <p className="text-capitalize">original price</p>
                <p>₹{Or_Total}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-capitalize">discount</p>
                <p>- ₹{Dis_Total}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-capitalize">total price</p>
                <p>₹{total}</p>
              </div>
              <button className="btn btn-secondary text-capitalize col-12 me-3">buy</button>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Cart