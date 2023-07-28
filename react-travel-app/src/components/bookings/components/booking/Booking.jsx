import React from "react";
import "./Booking.css";
import Button from "../../../common/button/Button";

const Booking = ({ title, guests, date, total }) => {
  return (
    <li data-testid="booking" className="booking">
      <h3 data-testid="booking-title" className="booking__title">
        {title}
      </h3>
      <span data-testid="booking-guests" className="booking__guests">
        {guests} guests
      </span>
      <span data-testid="booking-date" className="booking__date">
        {date}
      </span>
      <span data-testid="booking-total" className="booking__total">
        {total}
      </span>
      <Button
        data-testid="booking-cancel"
        className="booking__cancel"
        title="Cancel booking"
      >
        <span className="visually-hidden">Cancel booking</span>×
      </Button>
    </li>
  );
};

export default Booking;
