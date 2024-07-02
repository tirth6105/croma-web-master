import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Logout } from '../redux/Action'

const Header = () => {

  let data=useSelector((store)=>store.user)
  let dispatch=useDispatch()
  return (
    <>
      <Navbar expand="lg" className="bg-black">
        <Container>
          <Navbar.Brand className='text-primary font-primary'><p className='m-0'>croma</p></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto" navbarScroll>
              <Nav.Link className='text-uppercase ps-5'><Link to='/' className='text-white text-decoration-none'>Home</Link></Nav.Link>
              <Nav.Link className='text-uppercase ps-5'><Link to='/product' className='text-white text-decoration-none'>product</Link></Nav.Link>
              <Nav.Link className='text-uppercase ps-5'><Link to='/add_product' className='text-white text-decoration-none'>ADD product</Link></Nav.Link>
              <Nav.Link className='text-uppercase ps-5'><Link to='/cart' className='text-white text-decoration-none'>cart</Link></Nav.Link>
              <Nav.Link className='text-uppercase ps-5'>{data.islogin?<p onClick={()=>dispatch(Logout())} className='text-white text-decoration-none m-0'>logout</p>:<Link to='/login' className='text-white text-decoration-none'>login</Link>}</Nav.Link>
              <Nav.Link className='text-uppercase ps-5'>{data.islogin?<p className='text-white m-0'>{data.user.username}</p>:<Link to='/sign' className='text-white text-decoration-none'>sign</Link>}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header