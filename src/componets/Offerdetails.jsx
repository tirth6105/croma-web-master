import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import offer1 from '../assest/D_Zipcare_EW_21Dec23_cwfvid.png'
import offer2 from '../assest/HP_2Split_ICICI_11Jan2024_slulln.png'
import Slider from 'react-slick'
import icon_unboxed from '../assest/category-icon_unboxed_e123f4.png'
import kitchenappliances from '../assest/kitchenappliances_categoryicons_xulmep.png'
import washingmachine from '../assest/washingmachine_categoryicons_ktcdeu.png'
import ac from '../assest/CategoryNavigation_AudioSplit_AC_21Feb2023_azyacw.png'
import cameras from '../assest/CategoryNavigation_AudioSplit_Cameras_21Feb2023_fxbmtt.png'
import home_theaters from '../assest/CategoryNavigation_AudioSplit_HT_SB_21Feb2023_rk8ohd.png'
import head_phones from '../assest/CategoryNavigation_AudioSplit_H_E_21Feb2023_cw375r.png'
import laptop from '../assest/CategoryNavigation_AudioSplit_Laptops_17Nov2023_wcqnvs.png'
import mobile from '../assest/CategoryNavigation_AudioSplit_Mobile_21Feb2023_y6hsfe.png'
import refrigerators from '../assest/CategoryNavigation_AudioSplit_Ref_21Feb2023_ztynzt.png'
import tv from '../assest/CategoryNavigation_AudioSplit_TV_21Feb2023_repyuk.png'
const Offerdetails = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1
    }
    return (
        <section className='bg-black py-5' >
            <Container>
                <Row>
                    <Col sm={12} md={6} >
                        <img src={offer1} alt="" />
                    </Col>
                    <Col sm={12} md={6} >
                        <img src={offer2} alt="" />
                    </Col>
                </Row>
                <Slider {...settings} className='py-5'>
                    <div>
                        <img src={icon_unboxed} alt="" />
                    </div>
                    <div>
                        <img src={mobile} alt="" />
                    </div>
                    <div>
                        <img src={tv} alt="" />
                    </div>
                    <div>
                        <img src={laptop} alt="" />
                    </div>
                    <div>
                        <img src={head_phones} alt="" />
                    </div>
                    <div>
                        <img src={refrigerators} alt="" />
                    </div>
                    <div>
                        <img src={home_theaters} alt="" />
                    </div>
                    <div>
                        <img src={ac} alt="" />
                    </div>
                    <div>
                        <img src={washingmachine} alt="" />
                    </div>
                    <div>
                        <img src={cameras} alt="" />
                    </div>
                </Slider>
            </Container>
        </section >
    )
}

export default Offerdetails