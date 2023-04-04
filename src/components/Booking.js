// import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from "../components/Footer"


const Booking = () => {

    const navigateTo = useNavigate()
    const [fetchdata, setfetchData] = useState()
    // const [id, setId] = useState()

    const getData = async () => {
        await fetch(`http://localhost:5500/movies`, {
            method: "GET"
        }).then(res => res.json()).then(data => setfetchData(data))
    }
    console.log(fetchdata)


    useEffect(() => {
        getData();
    }, [])

    const butonHandle = (id) => {
        // console.log(id)
        navigateTo("/ticketbook")
        localStorage.setItem("movieId", JSON.stringify(id))
        localStorage.setItem("allmovies", JSON.stringify(fetchdata))

    }

    const searchHandle = async (e) => {
        let key = e.target.value
        // console.log(key)
        if (key) {
            const result = await fetch(`http://localhost:5500/search/${key}`)
            const data = await result.json()
            console.log(data)
            setfetchData(data)
        } else {
            getData();
        }
    }


    
    return (<>
        <div className="serachbar">
            <input onChange={searchHandle} placeholder="Search by city" className="serachInput" type="text"></input>
            {/* <span><button  className="font-link" id="serachbutton" >Search</button></span> */}
        </div>
        <div className="container" style={{ margin: "50px", marginTop: "100px" }}>
            {fetchdata && fetchdata.map((item, id) => {
                const { movei_title, poster_src, movie_text, ticket_price, theater_city } = item
                return <Card style={{ width: '18rem' }}>
                    <Card.Img style={{ height: "400px" }} variant="top"
                        src={poster_src} />
                    <Card.Body>
                        <Card.Title>{movei_title}</Card.Title>
                        <Card.Text>
                            {movie_text}
                        </Card.Text>
                        <Button onClick={() => butonHandle(id)} variant="primary">Book Movie</Button> <Button id="pricetag" variant="primary">{` ₨ ${ticket_price}`}</Button>
                        <span>City:{theater_city} </span>
                    </Card.Body>
                </Card>
            })}
        </div>
        <Footer />
    </>
    );
}

export default Booking
