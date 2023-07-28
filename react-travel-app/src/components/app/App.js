import Header from "../common/header/Header";
import { Footer } from "../common/footer/Footer";
import { Route, Switch } from "react-router-dom";

import { Trips } from "../trips/Trips";
import SignIn from "../sign-in-up/SignIn";
import SignUp from "../sign-in-up/SignUp";
import BookingList from "../bookings/components/booking-list/BookingList";
import TripPage from "../trip-page/TripPage";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/trip" component={TripPage} />
        <Route path="/bookings" exact component={BookingList} />
        <Route path="/" exact component={Trips} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
