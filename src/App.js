import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Login from './components/Login';
import Navbar from './components/navbar';
import Signup from './components/Signup';
import Booking from './components/Booking';
import Ticketbook from './components/Ticketbook';
import Adminpanel from './components/Adminpanel';
import App2 from './app2';
import PrivateComponent from './components/privatComponent';
import Finalpage from './components/finalpage';
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/Signup' element={<Signup />} />
        <Route path='/' element={<Login />} />
<Route element= {<PrivateComponent/>}>
        <Route path='/home' element={<Booking />} />
        {/* <Route path="/booking" element={<Booking />} /> */}
        <Route path="/ticketbook" element={<Ticketbook />} />
        <Route path="/book" element={<App2 />} />
        <Route path="/final" element={<Finalpage />} />
</Route>
        <Route path="/adminpanel" element={<Adminpanel />} />

      </Routes>
    </>
  );
}

export default App;
 