import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Adminlogin from "./adminlogin"

const Login = () => {
    // const [data, setData] = useState({})
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const [fetchData, setfetchData] = useState()
    const nevigateTo = useNavigate()
    const [togle, setTogle] = useState()

    // const inputHandle = (e) => {
    //     setData({
    //         ...data, [e.target.name]: (e.target.value)
    //     })
    // }

    const TogleHandle = (e) => {
        if (e.target.value === "User") {
            setTogle(true)
        } else {
            setTogle(false)
        }
    }

    const loginHandle = async () => {
        console.log({ email, password })

        if(!email || !password){
            alert("please enter credentials")
        }

        let result = await fetch(`http://localhost:5500/m-login`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
        result = await result.json()
        console.log(result)
        if (result.auth) {
            localStorage.setItem("user", JSON.stringify(result.user))
            localStorage.setItem("token", JSON.stringify(result.auth))

            nevigateTo("/home")
        } else {
            alert("user not found ")
        }

    }

    return (
        <>
            <select style={{ marginLeft: "200px", fontSize: "30px" }} onChange={TogleHandle}>
                <option>Admin/User</option>
                <option>User</option>
                <option>Admin</option>
            </select>

            {togle ? (<div className="row" >
                <div className="offset-lg-3 col-lg-6" >
                    <form className="container" >
                        <div className="card" style={{ marginLeft: "200px", height: "500px", width: "600px" }}>
                            <div className="card-header">
                                <h2>User Login</h2>
                            </div>
                            <div className="card-body">
                                <div className="form-group">

                                    <label>Username <span className="errmsg">*</span></label>
                                    <input type="email" className="form-control" onChange={(e) => setemail(e.target.value)} name="email"></input>

                                </div>
                                <div className="form-group">

                                    <label>Password <span className="errmsg">*</span></label>
                                    <input type="password" onChange={(e) => setpassword(e.target.value)} name="password" className="form-control"></input>

                                </div>
                            </div>
                            <div className="card-footer">
                                {/* <button onClick={onsubmit} type="button" className="btn btn-success">Login</button> {"   "} */}
                                <button onClick={loginHandle} type="button" className="btn btn-success">Login</button> {"   "}
                                <button type="button" onClick={() => nevigateTo("/Signup")} className="btn btn-primary">New User ?</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>) : (<Adminlogin />)}
        </>
    )
}
export default Login