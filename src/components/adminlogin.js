import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Adminlogin = () => {

    const nevigateTo = useNavigate()
    const [data, setdata] = useState({})
    // const [fetchdata, setfetchdata] = useState()
    const inputHandle = (e) => {
        setdata({
            ...data, [e.target.name]: (e.target.value)
        })
    }

    const onsubmit = async () => {
        // console.log(fetchdata);
        let result = await fetch(`http://localhost:5500/adminlog`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        });
        result = await result.json()
        console.log(result)
        if (result === true) {
            // localStorage.setItem("admin", JSON.stringify(result))
            nevigateTo("/adminpanel")
        } else {
            localStorage.setItem("admin", JSON.stringify(result))
            alert("user not found ")
        }

    }

    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                <form className="container">
                    <div className="card" style={{ height: "500px", width: "600px", marginLeft: "200px" }}>
                        <div className="card-header">
                            <h2>Admin Login</h2>
                        </div>
                        <div className="card-body" style={{ height: "400px" }}>
                            <div className="form-group">

                                <label>Username <span className="errmsg">*</span></label>
                                <input type="email" className="form-control" onChange={inputHandle} name="username"></input>

                            </div>
                            <div className="form-group">

                                <label>Password <span className="errmsg">*</span></label>
                                <input type="password" onChange={inputHandle} name="password" className="form-control"></input>

                            </div>
                        </div>
                        <div className="card-footer">
                            {/* <button type="submit" className="btn btn-primary">Login</button> | */}
                            <button onClick={onsubmit} type="button" className="btn btn-success">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Adminlogin