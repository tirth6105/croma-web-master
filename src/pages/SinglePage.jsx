import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Add_Cart, Single_Product } from "../redux/Action";
import { Container, Row } from 'react-bootstrap';

const SinglePage = () => {

  let { id } = useParams();
  let dispatch = useDispatch();
  let [count, setcount] = useState(0)
  let [FullDate, setFullDate] = useState("")

  useEffect(() => {
    dispatch(Single_Product(id));
  }, []);

  let data = useSelector((store) => store.product);


  const handleCart = () => {
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    let dmy = `${day + 10}/${month + 1}/${year}`
    FullDate = dmy;
    dispatch(
      Add_Cart({
        img: data.single_product.img,
        title: data.single_product.title,
        price: data.single_product.price,
        date: FullDate
      })
    );
    alert("product added in cart")
  };

  return (
    <section className='bg-black py-5'>
      <Container>
        <Row>
          <div className='col-12 col-md-6'>
            <img src={data.single_product.img} alt="product img" />
            <button className='bg-black d-block border-0 fs-4 mt-3 ms-3 text-white' onClick={() => count == 0 ? setcount(1) : setcount(0)}>{count == 0 ? <i className="bi bi-heart"></i> : <i className="bi bi-heart-fill text-primary"></i>}</button>
          </div>
          <div className='col-12 col-md-6 text-white'>
            <p className='fs-5'>{data.single_product.title}</p>
            <p><span className='fw-semibold text-uppercase pe-3'>price :</span>₹{data.single_product.price - 100}.00 / <span className='ps-1 text-decoration-line-through'>₹{data.single_product.price}</span></p>
            <span className='border border-1 border-white p-2 mx-4 rounded text-uppercase '>or</span>
            <p className='mt-3'><span className='text-uppercase pe-3'>with emi :</span>₹{Math.floor(data.single_product.price / 6 + 50)} / 6mo<sup>*</sup></p>
            <p ><span className='fw-semibold text-uppercase pe-3'>brand :</span>{data.single_product.brand}</p>
            <button className='btn btn-secondary fw-semibold text-uppercase' onClick={handleCart}>add cart</button>
            <p className='fw-semibold text-uppercase m-0 mt-3 d-block'>description :</p>
            <p style={{ textIndent: "3rem" }}>{data.single_product.description}</p>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default SinglePage