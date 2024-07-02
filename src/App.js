import AllRoutes from "./allroutes/AllRoutes";
import Header from "./componets/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import Footer from "./componets/Footer";
import Privateroute from "./allroutes/Privateroute";
function App() {
  return (
    <>
    <Header/>
    <AllRoutes/>
    <Footer/>
    </>
  );
}

export default App;
