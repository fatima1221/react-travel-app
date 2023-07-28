import React from "react";
import "./BookingList.css";
import Booking from "./Booking";

const BookingList = () => {
  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        <Booking />
      </ul>
    </main>
  );
};

export default BookingList;
