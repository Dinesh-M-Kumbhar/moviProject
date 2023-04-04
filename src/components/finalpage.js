import { useState, useEffect } from "react";
import "./theaterStyle.css"
const Finalpage = () => {

    const [data, setData] = useState()
    const [alldata, setalldata] = useState()
    const [Username, setusername] = useState()
    const [allmovies, setAllmovie] = useState()
    const [showdata, setshowdata] = useState()
    const [Email, setUserEmail] = useState()

    // All data fetching 
    const fetchData = async () => {
        const userEmail = JSON.parse(localStorage.getItem("user")).email
        const userName = JSON.parse(localStorage.getItem("user")).username
        console.log(userEmail)
        // setUserEmail(userEmail)
        // setusername(userName)
        const result = await fetch(`http://localhost:5500/allrecords`, {
            method: "GET"
        }).then(res => res.json())

        const myData = result.filter((item) => {
            return item.useremail === userEmail
        })
        console.log(result)
        console.log(myData)
        setshowdata(myData)

        console.log(myData)

    }

    useEffect(() => {
        fetchData();
    }, [])

    // ticket cancelation delet methode 
    const cancelTicket = async (time) => {
        const result = await fetch(`http://localhost:5500/cancel/${time}`, {
            method: "DELETE",
        })
        const data = result.json();
        fetchData();
    }

    return (
        <>
            <center><h1>Booking Details</h1></center>
            <div className="finaldiv">
                {showdata && showdata.map((item) => {
                    const { username, movietitle, ticketcount, time, date, amount,Email } = item
                    return <div className="ticketshowdiv">
                        <div className="ticketcard">
                            <label>Username : </label><span>{" "}{username}</span><br />
                            <label>Tickets : </label><span>{" "}{ticketcount}</span><br />
                            <label>Movie : </label><span>{" "}{movietitle}</span><br />

                            <label>Time : </label><span>{" "}{time}</span><br />
                            <label>Date : </label><span>{" "}{date}</span><br />
                            <label>Amount : </label><span>{" "}{amount}</span><br />
                            <span><button className="atmbutton" onClick={() => cancelTicket(time)}>Cancel Ticket</button></span>
                        </div>
                        <hr></hr>
                    </div>
                })}
            </div>
        </>
    )
}
export default Finalpage