import { Trip } from "../trip/Trip";
import "./TripList.css";
import tripData from "../../../data/trips.json";

export const TripList = () => {
  return (
    <ul className="trip-list">
      {tripData.map((trip) => (
        <Trip key={trip.id} trip={trip} />
      ))}
    </ul>
  );
};
