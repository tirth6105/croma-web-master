import React, { useEffect, useState } from 'react'
import { Get_Product } from '../redux/Action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';

const Mobilecat = () => {

    let { product } = useSelector((store) => store.product);
    console.log(product);
    let dispatch = useDispatch();
    useEffect(() => {
        if (product.length == 0) {
            dispatch(Get_Product());
        }
    }, []);
    product.filter((e)=>e.category=="mobile")
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"

    }

    return (

        <section className='bg-black py-5' >
            <Container>
                <p className='text-white text-capitalize fs-4 fw-bold'><i className='bi bi-signpost text-primary pe-3'></i>smart phone and mobile</p>
                <Slider {...settings} className='py-5'>
                    {product.map((ele) => {
                        return (
                            <>
                                <div className='prodccut-img px-5 '>
                                    <Link to={`/product/${ele.id}`} className='text-decoration-none col-3'>
                                        <img src={ele.img} alt="" className='rounded-circle' style={{ height: "200px", width: "200px" }} />
                                    </Link>
                                </div>
                            </>
                        )
                    })}
                </Slider>
            </Container>
        </section >
    )
}

export default Mobilecat