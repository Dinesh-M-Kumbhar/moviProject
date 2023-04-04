
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { useState } from "react"


const Signup = () => {
    const [data, setData] = useState({})
    const navigateTo = useNavigate()
    const inputHandle = (e) => {
        setData({
            ...data, [e.target.name]: (e.target.value)
        })
    }

    const submitHandle = async () => {
if(!data.firstname && !data.lastname && !data.email && !data.password && !data.Address && !data.city){
    alert("please enter all Creadentials")
    return false

}
        let result = await fetch(`http://localhost:5500/m-signup`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
            }
        })
        result = await result.json()
        // console.log(result)
        localStorage.setItem("user", JSON.stringify(result))

        if (result) {
            navigateTo("/")
        }

    }
    return (
        <center>
            <h2>Sign-Up</h2>
            <hr></hr>
            <div className='formdiv'>
                <Form style={{ marginTop: "100px" }}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridfname">
                            <Form.Label>Firstname</Form.Label>
                            <Form.Control name="firstname" onChange={inputHandle} type="text" placeholder="Enter firstname" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridlname">
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control name="lastname" onChange={inputHandle} type="text" placeholder="Enter Your Lastname" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" onChange={inputHandle} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" onChange={inputHandle} type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name="address" onChange={inputHandle} placeholder="1234 Main St" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control name="city" onChange={inputHandle} />
                        </Form.Group>


                        <Form.Group>
                        </Form.Group>
                    </Row>


                    <Button variant="primary" onClick={submitHandle} type="button">
                        Submit
                    </Button>
                </Form>
            </div>
        </center>
    )
}
export default Signup

