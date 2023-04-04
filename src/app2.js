import { useState } from "react";
import { Container, Row } from "reactstrap";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import SeatBooking from "./pages/SeatBooking";
import SelectSeatType from "./pages/SelectSeatType";
import Confirmation from "./pages/Confirmation";
import TAB_OPTIONS from "./constant/TabOptions";
export default function App2() {
  const [tab, setTab] = useState(TAB_OPTIONS.SEAT_TYPE);
  const [seatSelection, setSeatSelection] = useState({});
  
  function handleTabChange(tab, seatSelection) {
    setTab(tab);
    setSeatSelection(seatSelection);
  }
  return (<>

      <div className="bookingheader">
        <h1>Welcome to My Cenema ticket </h1>
        <h2>Choose your options below </h2>
      </div>

    <Container>

      {tab === TAB_OPTIONS.SEAT_TYPE ? (
        <SelectSeatType onNext={handleTabChange} />
      ) : null}
      {tab === TAB_OPTIONS.SEAT_SELECTION ? (
        <SeatBooking onNext={handleTabChange} seatSelection={seatSelection} />
      ) : null}
      {tab === TAB_OPTIONS.CONFIRMATION ? (
        <Confirmation setTab={setTab} seatSelection={seatSelection} />
      ) : null}
    </Container>
  </>
  );
}
