import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import b1 from '../assest/b1.jpg'
import b2 from '../assest/b2.jpg'
import b3 from '../assest/b3.jpg'
import b4 from '../assest/b4.jpg'
const Banner = () => {
    return (
        <>
            <div className="bg-black py-5 ">
                <Carousel className='carousel slide'>
                    <Carousel.Item>
                        <img src={b1} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={b2} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={b3} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={b4} alt="" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Banner