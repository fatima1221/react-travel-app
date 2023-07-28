import * as React from "react";

import "./Trips.css";
import { TripsFilter } from "./trips-filter/TripsFilter";
import { TripList } from "./trip-list/TripList";

export const Trips = () => {
  return (
    <>
      <section className="trips-filter">
        <h2 className="visually-hidden">Trips filter</h2>
        <TripsFilter />
      </section>
      <section className="trips">
        <h2 className="visually-hidden">Trips List</h2>
        <TripList />
      </section>
    </>
  );
};
