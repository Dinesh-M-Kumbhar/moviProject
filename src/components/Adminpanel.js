import { useState } from "react"

const Adminpanel = () => {
    const [state, setState] = useState({})

    const inputHandle = (e) => {
        setState({
            ...state, [e.target.name]: (e.target.value)
        })

    }

    // console.log(state)

    const submitHandle = (e) => {
        // e.preventDefault()

        fetch(`http://localhost:5500/movies`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(state)
        })
        console.log(state)
setState(" ")
    }
    return (<>
        <div className="adminpanel">
            <h1>Add Movie </h1><br /><br />
            <form onSubmit={submitHandle}>
                <label>Title  :</label> <br />
                <input id="adminInput" type="text" name="movie_title" onChange={inputHandle} placeholder=" ...Title"></input>
                <br />
                <label>Poster src  : </label><br />
                <input id="adminInput" type="text" name="poster_src" onChange={inputHandle} placeholder=" ...souce link"></input>
                <br />
                <label>Text  : </label><br />
                <input id="adminInput" type="text" name="movie_text" onChange={inputHandle} placeholder=" ...extra text"></input>

                <br />
                <label>Ticket Price  : </label><br />
                <input id="adminInput" type="text" name="ticket_price" onChange={inputHandle} placeholder=" ...extra text"></input>
                <br />
                <label>City  : </label><br />
                <input id="adminInput" type="text" name="theater_city" onChange={inputHandle} placeholder=" ...city"></input>
                <br />

                <button className="btnSubmit" style={{ margin: "10px", padding: "10px" }} type="submit"  >Save Movie</button>
            </form>
        </div>
    </>
    )
}
export default Adminpanel