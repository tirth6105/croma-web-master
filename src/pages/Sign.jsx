import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Sign_up } from '../redux/Action';
import { GooGleAuth, SignMailAuth } from '../config';
import googlelogo from '../assest/Google-Symbol.png';
import axios from 'axios';
const Sign = () => {
  let [username, setUsername] = useState('')
  let [mail, setMail] = useState('')
  let [password, setPassword] = useState('')
  let location = useNavigate()
  let dispatch = useDispatch()
  let data = useSelector((store) => store.user)


  // from sign up & mail sign up using firebase
  const HandelSubmit = async (e) => {
    e.preventDefault();
    console.log(password.length);
    if (!mail.length > 0 && !password.length < 6) {
      alert('plese enter the email and password length is 6 charter')
    }
    if (!mail.length > 0) {
      alert('plese enter the email ')
    }
    else if (password.length < 6) {
      alert('please enter the password 6 chatcer')
    }
    else {
      let userdata = {
        username: username,
        usermail: mail,
        userpass: password,
      }
      let user = await axios.get(`http://localhost:8090/users?usermail=${userdata.usermail}`,)
      if (user.data.length == 0) {
        dispatch(Sign_up(userdata))
        await SignMailAuth(userdata.usermail,userdata.userpass)
        alert("login sucefuull")
        location("/")
      }
      else {
        alert(" you have alredy sign up , plase login")
        location("/login")
      }

    }
  }


  // google sign up
  const HandelGoogle = () => {
    GooGleAuth().then(async (data) => {
      let name = data._tokenResponse.displayName
      let email = data._tokenResponse.email
      let user = await axios.get(`http://localhost:8090/users?usermail=${email}`)
        if (email.length > 0) {
          dispatch(Sign_up({ username: name, usermail: email }))
          alert("sign up sucefuull")
          location("/")
        }
        else {
          alert("sorry sign up agin")
        }
    })
  }


  return (
    <>
      <div className='login-banner p-5'>
        <div className='find-branch p-3 text-center col-4 mx-auto'>
          <div className='d-flex justify-content-between px-4 py-3'>
            <p className='text-white m-0 fs-5 text-uppercase fw-semibold'>sign up </p>
            <button onClick={() => location('/')} className='bg-transparent text-white border-0'><i class="bi bi-x-lg"></i></button>
          </div>
          <form onSubmit={HandelSubmit}>
            <input type="text" placeholder='ENTER THE USER NAME' onChange={(e) => setUsername(e.target.value)} className='bg-dark my-3 border-white border-1 col-12 p-2 text-white rounded' />
            <input type="email" placeholder='ENTER THE EMAIL' onChange={(e) => setMail(e.target.value)} className='bg-dark my-2 border-white border-1 col-12 p-2 text-white rounded' />
            <input type="password" placeholder='ENTER THE PASSWORD' onChange={(e) => setPassword(e.target.value)} className='bg-dark my-3 border-white border-1 col-12 p-2 text-white rounded' />
            <div className='d-flex align-items-center from-check my-4'><input type="checkbox" required className='form-check-input m-0' /><p className='text-white m-0 fs-7 ps-2'> By continuing you agree to our Terms of Use & Privacy Policy</p></div>
            <input type="submit" value='LOGIN' className='btn btn-secondary col-12 mx-auto py-2' />
          </form>
          <p className='text-white my-4'>or</p>
          <button onClick={HandelGoogle} className="login-with-google-btn mb-4 fw-semibold fs-5 col-7 p-1 justify-content-around" >
            <img src={googlelogo} alt="" className='col-2 justify-content-around pe-1' />
            {data.islogin ? 'signed' : 'sign up'} with Google
          </button>
        </div>
      </div>
    </>
  )
}

export default Sign