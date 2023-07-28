import { Header } from "../common/header/Header";
import { Footer } from "../common/footer/Footer";
import { Trips } from "../trips/Trips";
function App() {
  return (
    <div className="App">
      <Header />
      <Trips />
      <Footer />
    </div>
  );
}

export default App;
