import { useState, useEffect } from "react";
import SEAT from "../constant/SeatOptions";
import Button from "../library/Button";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Label
} from "reactstrap";
import TAB_OPTIONS from "../constant/TabOptions";

export default function SelectSeatType({ onNext }) {
  const [seatCount, setSeatCount] = useState(0);
  const [seatType, setSeatType] = useState(null);
  const [isNextDisable, setNextDisable] = useState(true);
  const [timeslot, setTimeslot] = useState();
  function RenderSeatCounts() {
    var rows = [];
    for (let i = 1; i <= SEAT.MAX_SEAT_ALLOWED; i++) {
      rows.push(
        <PaginationItem key={i} active={seatCount === i ? true : false}>
          <PaginationLink onClick={() => setSeatCount(i)}>{i}</PaginationLink>
        </PaginationItem>
      );
    }
    return rows;
  }
  useEffect(() => {
    if (seatCount > 0 && seatType) setNextDisable(false);
  }, [seatCount, seatType]);

  function handleNext() {
    onNext(TAB_OPTIONS.SEAT_SELECTION, { seatCount, seatType });
  }

  const timeslotHandle = (e) => {
    setTimeslot(e.target.value)
  }
  return (
    <Row>
      <Row>
        <Col>
          <Label>Select Seat Type</Label>
          <ListGroup horizontal>
            {SEAT.SEAT_TYPE.map((item) => (
              <ListGroupItem
                key={item.type}
                active={seatType === item.type ? true : false}
                tag="a"
                onClick={() => setSeatType(item.type)}
              >
                {item.title} (₹{SEAT.SEAT_PRICE[item.type]}.00/seat)
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row>
      <select style={{height:"70px"}} onChange={timeslotHandle}>
        <option>11 AM </option>
        <option>03 PM </option>
        <option>09 PM </option>
      </select>
      </Row>  <br/>
        <br/>

    
      <Row>
      
        <Col>
          <Label>Total Seats</Label>
          <Pagination aria-label="Page navigation example">
            <RenderSeatCounts />
          </Pagination>
        </Col>
      </Row>
      <Row>
        <Col>
          <Label>
            Total Price:{" "}
            <b>
              ₹
              {seatCount > 0 && seatType
                ? SEAT.SEAT_PRICE[seatType] * seatCount
                : 0}
              .00
            </b>
          </Label>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={handleNext} title="Next" disabled={isNextDisable} />
        </Col>
      </Row>
    </Row>
  );
}
