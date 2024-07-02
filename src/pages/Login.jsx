import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Log_in } from '../redux/Action';
import axios from 'axios';
import { loginMailAuth } from '../config';
const Login = () => {
  let [mail, setMail] = useState('')
  let [password, setPassword] = useState('')
  let location = useNavigate()
  let dispatch = useDispatch()


  // from login
  const HandelSubmit = async (e) => {
    e.preventDefault();
    if (!mail.length > 0 && password.length < 6) {
      alert('plese enter the email and password')
    }
    else if (!mail.length > 0) {
      alert('plese enter the email')
    }
    else if (password.length < 6) {
      alert('please enter the password 6 chacater')
    }
    else {
      let userdata = {
        usermail: mail,
        userpass: password,
      }
      let user = await axios.get(`http://localhost:8090/users?usermail=${userdata.usermail}&userpass=${userdata.userpass}`,)
      if (user.data.length > 0 && user.data.length > 0) {
        dispatch(Log_in(userdata))
        await loginMailAuth(userdata.usermail,userdata.userpass)
        localStorage.setItem("islogin",true)
        alert("login sucefuull")
      }
      else {
        alert("login fail")
      }
    }
  }


  return (
    <div className='login-banner p-5'>
      <div className='find-branch p-3 text-center col-4 mx-auto'>
        <div className='d-flex justify-content-between px-4 py-3'>
          <p className='text-white m-0 fs-5 text-uppercase fw-semibold'>login  </p>
          <button onClick={() => location('/')} className='bg-transparent text-white border-0'><i class="bi bi-x-lg"></i></button>
        </div>
        <form onSubmit={HandelSubmit} className='p-4'>
          <input type="email" placeholder='ENTER THE EMAIL' onChange={(e) => setMail(e.target.value)} className='bg-transparent my-2 border-white border-1 col-12 p-2 text-white rounded' />
          <input type="password" placeholder='ENTER THE PASSWORD' onChange={(e) => setPassword(e.target.value)} className='bg-transparent my-3 border-white border-1 col-12 p-2 text-white rounded' />
          <div className='d-flex align-items-center from-check my-3'><input type="checkbox" required className='form-check-input m-0' /><p className='text-white m-0 fs-7 ps-2'> By continuing you agree to our Terms of Use & Privacy Policy</p></div>
          <input type="submit" value='LOGIN' className='btn btn-secondary mt-4 col-12 mx-auto py-2' />
        </form>
      </div>
    </div>
  )
}

export default Login