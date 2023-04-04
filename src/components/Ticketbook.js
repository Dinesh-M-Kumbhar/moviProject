import "./theaterStyle.css"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { ATMCard } from 'atm-card-react';
// import SeatPicker from "react-seat-picker";
import "./Seats.css";
const Ticketbook = () => {
    const nevigateTo = useNavigate()
    const [diplaedSeats, setArray] = useState([])
    const [fetchSeats,setFetchSeats] = useState()
    const [ticketcount, setTicketCount] = useState(0)
    const [Snacks, setSnacks] = useState(0)
    const [amount, setamount] = useState(0)
    const [couponValue, setCouponValue] = useState(0)
    const [togle, setTogle] = useState(true)
    const [allmovie, setAllmovie] = useState()
    const [moviID, setMovieID] = useState()
    const [location, setlocation] = useState(null)
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [theater, setTheater] = useState()
    const [username, setUsername] = useState()
    const [useremail, setuseremail] = useState()
    const [movietitle, setmovietitle] = useState()
    const [number, setNumber] = useState('');
    const [month, setMonth] = useState(2);
    const [year, setYear] = useState(22);
    const [holder, setHolder] = useState('');
    const [cvv, setCvv] = useState('');
    const [disable, setdisable] = useState([

    ])

    const [selected, setSelected] = useState([]);
    // let navigate = useNavigate();


   const  getData = async()=>{
const result = await fetch(`http://localhost:5500/seat`).then(res=>res.json())
const allseats = result.map((item)=>{
   return item.diplaedSeats
}).flatMap(num=>num)
console.log(result)
console.log(allseats)

// console.log(data)
setFetchSeats(allseats)
   }
    useEffect(() => {
        // console.log(array)
        document.getElementById("1").disabled = false
        const movieid = localStorage.getItem("movieId");
        let allmoviesdata = JSON.parse(localStorage.getItem("allmovies"));
        let user = JSON.parse(localStorage.getItem("user"));
        setuseremail(user.email)
        // console.log("user--", user)
        setUsername(user.firstname)
        setMovieID(movieid)
        setAllmovie(allmoviesdata)
        setmovietitle(allmoviesdata[movieid].movie_title)
        getData()
    }, [])

    // console.log("email---", useremail)
    const seatHandle = (e) => {
        //   const sel =   document.querySelectorall(".row")
        //   console.log(sel)
       
        if (e) {
            setTicketCount(ticketcount + 1)
            if (ticketcount < 4) {
                diplaedSeats.push(e.target.id)
            }
        }
        if (ticketcount > 3) {
            alert("max 4 ticket can be booked");
            window.reload();
        }
        console.log(ticketcount)
        if (ticketcount <= 3) {
            e.target.className === 'blue-color' ? e.target.className = '' : e.target.className = 'blue-color'
        } else {
            e.target.className = null;
        }

    }
    console.log(diplaedSeats)
    const snacksHandle = (e) => {
        setSnacks(Number(e.target.value));

    }
    const couponHandle = (e) => {
        if (e.target.value === "DINESH") {
            setCouponValue(100)
        }

    }

    const paymentTogel = () => {
        const ticketPrice = Number(allmovie[moviID].ticket_price)
        if (ticketcount > 3) {
            let totalval = `${Snacks + ticketPrice * 4 - couponValue}`
            setamount(totalval)
        } else {
            let totalval = `${Snacks + ticketPrice * ticketcount - couponValue}`
            setamount(totalval)

        }
        setTogle(false)
        for (let i = 0; i < diplaedSeats.length; i++) {
            document.getElementById(diplaedSeats[i]).disabled = true
        }
    }

    // posting all data to database and nevigate to final page
    const lastButton = () => {
        alert(`${username} your Movie ticket is booked succesfully`);

        fetch(`http://localhost:5500/ticketrecords`, {
            method: "POST",
            body: JSON.stringify({ username, useremail, date, ticketcount, time, amount, theater, movietitle }),
            headers: {
                "content-type": "application/json"
            }
        })
fetch(`http://localhost:5500/seat`,{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify({diplaedSeats})
})
        nevigateTo("/final")


    }

    const locationHandle = (e) => {
        console.log(e.target.value)
        if (e.target.value === "Pune") {
            setlocation(true)
            console.log(location)
        } else {
            setlocation(false)

        }
    }

    const theaterselctHandle = (e) => {
        console.log(e.target.value)
        setTheater(e.target.value)
    }

    const datehandle = (e) => {
        setDate(e.target.value)
    }
    const timeHandle = (e) => {
        setTime(e.target.value)
    }


    const rows = [
        [
            { id: 1, number: "A1" },
            { id: 2, number: "A2" },
            { id: 3, number: "A3" },
            { id: 4, number: "A4" },
            { id: 24, number: "A5" },
            { id: 34, number: "A5" },
            { id: 44, number: "A6" },
            { id: 54, number: "A7" },
            null,
            { id: 5, number: "A8" },
            { id: 6, number: "A9" },
            { id: 7, number: "A10" },
            { id: 8, number: "A11" },
            { id: 9, number: "A12", isReserved: true }
        ],
        [
            { id: 11, number: "B1" },
            { id: 12, number: "B2" },
            { id: 13, number: "B3", isReserved: true },
            { id: 14, number: "B4" },
            { id: 74, number: "B5" },
            { id: 84, number: "B6" },
            { id: 34, number: "B7" },
            { id: 94, number: "B8" },
            null,
            { id: 15, number: "B9" },
            { id: 16, number: "B10" },
            { id: 17, number: "B11" },
            { id: 18, number: "B12" },
            { id: 19, number: "B13" }
        ],
        [
            { id: 21, number: "C1" },
            { id: 22, number: "C2" },
            { id: 23, number: "C3" },
            { id: 24, number: "C4" },
            { id: 29, number: "C5" },
            { id: 20, number: "C6" },
            { id: 99, number: "C7" },
            { id: 98, number: "C8" },
            null,
            { id: 25, number: "C9" },
            { id: 26, number: "C10" },
            { id: 27, number: "C11", isReserved: true },
            { id: 28, number: "C12" },
            { id: 29, number: "C13" },
            null
        ]
    ];

    const price = 30;
    const totalprice = price * selected.length;

    // function  for adding seats
    const addSeatCallback = ({ row, number, id }, addCb) => {
        setSelected((prevItems) => [...prevItems, number]);
        const newTooltip = `tooltip for id-${id} added by callback`;
        addCb(row, number, id, newTooltip);
    };

    //   function for removing seats
    const removeSeatCallback = ({ row, number, id }, removeCb) => {
        setSelected((list) => list.filter((item) => item !== number));
        removeCb(row, number);
    };


    return (
        <>
            {togle ? (
                <><center>
                    <div style={{ justifyContent: "center", width: "100%" }}>
                        <h2 style={{ backgroundColor: "gainsboro", width: "100%" }}>Booking and Payment</h2>
                    </div>
                    <div className="movieShowing">
                        <div className="movieShowcard">
                            <img style={{ height: "300px" }} src={allmovie && moviID && allmovie[moviID].poster_src} />
                            <h6>{allmovie && moviID && allmovie[moviID].movie_title}</h6>
                        </div>
                    </div>
                    <hr></hr>
                </center>
                    <div id="theaterH">
                        <h2>Select your desired seat below</h2>
                    </div>
                    <br /><br />
                    <div>
                        <input onChange={datehandle} placeholder='date' type="date"></input>{"   "}{" "}
                        <input onChange={timeHandle} placeholder='Time Slot' type="time"></input>{"   "}{" "}

                        <span><select onChange={locationHandle}>
                            <option value="">Location??</option>
                            <option value="Pune">Pune</option>
                            <option value="Kolhapur"> Kolhapur</option>
                        </select></span>
                        {location ? (<span><select onChange={theaterselctHandle}>
                            <option value="">Theater??</option>
                            <option value="PVR narhe">PVR narhe</option>
                            <option value="INOX narhe"> INOX narhe</option>
                        </select></span>) :
                            (<span><select onChange={theaterselctHandle}>
                                <option value="">Theater??</option>
                                <option value="PVR Kolhapur">PVR Kolhapur</option>
                                <option value="INOX Kolhapur"> INOX Kolhapur</option>
                            </select></span>)}
                        <br /><br />
                        <label>Do You Have Coupon : </label> <input onChange={couponHandle} placeholder='CouponCode = 100 RS' type="text"></input>{"   "}{" "}
                        <span><select onChange={snacksHandle}>
                            <option value="0">Snacks??</option>
                            <option value="250">Popcorn   @250</option>
                            <option value="300"> Cookie Dough Bites  @300</option>
                        </select></span>
                    </div>
                    <hr></hr>
                    {/* <div className="seats">
  <div
    className="screens"
    style={{ backgroundColor: "white", height: "150px", width: "300px" }}
  ></div>

  <h5 className="seat_price">CLASSIC $30</h5>
  <SeatPicker
    addSeatCallback={addSeatCallback}
    removeSeatCallback={removeSeatCallback}
    rows={rows}
    alpha
    maxReservableSeats={4}
    visible
    tooltipProps={{multiline: true}}
    isReserved
  />
  {selected.length !== 0 ? (
    <>
      <div className="seat-price">
        <div className="seat-select">
          <h1 className="seats-select">SEAT:{selected.toString()}</h1>
        </div>
        <div className="totalprice">
          <h1 className="price">
            price:{"$"}
            {totalprice}
          </h1>
        </div>
      </div>
      <button
        className="continue"
        // onClick={() => navigate(`/Final/${selected}/${totalprice}`)}
      >
        continue
      </buttbutton
    </>
  ) : null}
</div> */}

                    <div className='screen'>screen</div>

                    <div style={{ marginTop: "100px" }} id="theatre">
                        <div id="row1">
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("1")} className='' id="1">1</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("2")} className='' id="2">2</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("3")} className='' id="3">3</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("4")} className='' id="4">4</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("5")} className='' id="5">5</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("6")} className='' id="6">6</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("7")} className='' id="7">7</button>
                        </div>
                        <br /><br />

                        <div id="row2">
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("8")} className='' id="8">8</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("9")} className='' id="9">9</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("10")} className='' id="10">10</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("11")} className='' id="11">11</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("12")} className='' id="12">12</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("13")} className='' id="13">13</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("14")} className='' id="14">14</button>
                        </div>
                        <br /><br />

                        <div id="row3">
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("15")} className='' id="15">15</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("16")} className='' id="16">16</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("17")} className='' id="17">17</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("18")} className='' id="18">18</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("19")} className='' id="19">19</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("20")} className='' id="20">20</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("21")} className='' id="21">21</button>
                        </div>
                        <br />
                        <br />
                        <div id="row4">
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("22")} className='' id="22">22</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("23")} className='' id="23">23</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("24")} className='' id="24">24</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("25")} className='' id="25">25</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("25")} className='' id="26">26</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("27")} className='' id="27">27</button>
                            <button onClick={seatHandle} disabled={fetchSeats && fetchSeats.includes("28")} className='' id="28">28</button>
                            <span><button onClick={paymentTogel}>Next To Payment </button></span>

                        </div>

                    </div>
                    <hr></hr>
                </>
            ) : (
                <>
                    <div className="atmcard">
                        <ATMCard
                            year={year}
                            month={month}
                            cvv={cvv}
                            number={number}
                            holderName={holder}
                            bankLogo={
                                <h1 style={{
                                    fontFamily: 'Arial',
                                    // fontSize: 30 * scale,
                                    fontSize: "30px",
                                    color: 'white'
                                }}>Cool Bank Logo</h1>
                            }
                            lifted
                            // system={system}
                            // scale={scale}
                            onChange={(data) => {
                                setNumber(data.number);
                                setCvv(data.cvv);
                                setMonth(data.month);
                                setYear(data.year);
                                setHolder(data.holder);
                            }} />
                        <button onClick={lastButton} className='atmbutton'>Make Payment</button>
                    </div>
                </>

            )}
        </>)
}


export default Ticketbook



  // <form style={{ marginLeft: "600px", marginBottom: "100px" }}>

                //     <br /><br />

                //     <h3>Payment <span> Total Amount = {`₨ ${amount}`}</span></h3>
                //     <div>
                //         <label>Card No.</label><br />
                //         <input type="text" name="cardno" /><br /><br />
                //         <label>CVV</label><br />
                //         <input type="text" name="cvv" /><br /><br />
                //         <label>Valid date</label><br />
                //         <input type="text" name="Amount" />
                //         <br />
                //         <br />
                //         <button onClick={lastButton}>Make Payment</button>
                //     </div>
                // </form>
                // <Atm></Atm>