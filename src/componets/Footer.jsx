import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <section className='bg-black py-5'>
                <Container>
                    <Row>
                        <Col sm={12} md={4}>
                            <p className='fs-3 fw-bold text-white text-uppercase'>contact with us</p>
                            <div className="col-12">
                                <div class="input-group mt-5">
                                    <input type="email" class="form-control text-upercase border border-1 border-white" placeholder="please enter Recipient's email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button class="btn btn-secondary" type="button" id="button-addon2">SUBSCRIBE</button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={3}>
                            <p className='fs-3 pb-2 fw-bold text-white text-uppercase'>about us</p>
                            <Link to='/product' className='d-block text-uppercase py-2 ps-2 fs-5 fw-semibold text-white text-decoration-none'>product</Link>
                            <Link to='/add_product' className='d-block text-uppercase py-2 ps-2 fs-5 fw-semibold text-white text-decoration-none'>ADD product</Link>
                            <Link to='/cart' className='d-block text-uppercase py-2 ps-2 fs-5 fw-semibold text-white text-decoration-none'>cart</Link>

                        </Col>
                        <Col sm={12} md={5}>
                            <p className='fs-2 fw-bold text-white'>DO YOU HAVE QUESTIONS? <span className='d-block text-primary'>LET'S TALK US !</span> </p>
                            <div className='d-flex'>
                                <i className='bi bi-geo-alt-fill fs-4 text-white'></i>
                                <p className='fs-5 text-white ps-4'>5617 Glassford Street New York, NY <span className='d-block'> 10000, USA</span></p>
                            </div>
                            <div className='d-flex'>
                                <i className='bi bi-telephone-fill fs-4 text-white'></i>
                                <p className='fs-5 text-white ps-4'>+91 1234567890</p>
                            </div>
                            <div className='d-flex'>
                                <i className='bi bi-envelope-fill fs-4 text-white'></i>
                                <p className='fs-5 text-white ps-4'>bix@gmail.com</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>

    )
}

export default Footer