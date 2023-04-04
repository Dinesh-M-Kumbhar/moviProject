import { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
const Navbar = () => {

    const navigateTo = useNavigate()

    const auth = localStorage.getItem('user')


    const loughot = () => {

        navigateTo('/')
        localStorage.clear()

    }
   

    return (
        <>
            <ul className="mynavbar">
                        <li><NavLink className="navText" to="/Home"  >Home</NavLink></li>
                {/* <li> <NavLink className="navText" to="/Signup"  >Signup</NavLink></li> */}
                <li>{auth ? <NavLink onClick={loughot} className="navText" to="/">logOut ({JSON.parse(auth).firstname})  </NavLink> :
                    <NavLink className="navText" to="/" >Login</NavLink>}</li>


            </ul>
        </>

    )
}
export default Navbar