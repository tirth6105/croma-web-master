import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Privateroute = (props) => {
    
  let data=useSelector((store)=>store.user)
  return data.islogin ? props.children :<Navigate to={"/sign"}/>
}

export default Privateroute