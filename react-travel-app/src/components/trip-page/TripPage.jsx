import React from "react";
import "./TripPage.css";
import tripImg from "../../assets/images/iceland.jpg";

const TripPage = () => {
  return (
    <main className="trip-page">
      <h1 className="visually-hidden">Travel App</h1>
      <div className="trip">
        <img
          data-testid="trip-details-image"
          src={tripImg}
          className="trip__img"
          alt="trip"
        />
        <div className="trip__content">
          <div className="trip-info">
            <h3 data-testid="trip-details-title" className="trip-info__title">
              Iceland
            </h3>
            <div className="trip-info__content">
              <span
                data-testid="trip-details-duration"
                className="trip-info__duration"
              >
                <strong>15</strong> days
              </span>
              <span
                data-testid="trip-details-level"
                className="trip-info__level"
              >
                easy
              </span>
            </div>
          </div>
          <div
            data-testid="trip-details-description"
            className="trip__description"
          >
            An island is a body of land surrounded by water. Continents are also
            surrounded by water, but because they are so big, they are not
            considered islands. Australia, the smallest continent, is more than
            three times the size of Greenland, the largest island. There are
            countless islands in the ocean, lakes, and rivers around the world.
            They vary greatly in size, climate, and the kinds of organisms that
            inhabit them.
          </div>
          <div className="trip-price">
            <span>Price</span>
            <strong
              data-testid="trip-details-price-value"
              className="trip-price__value"
            >
              7000 $
            </strong>
          </div>
          <button
            data-testid="trip-details-button"
            className="trip__button button"
          >
            Book a trip
          </button>
        </div>
      </div>
    </main>
  );
};

export default TripPage;
