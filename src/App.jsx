import HeroBanner from "./components/HeroBanner";
import Keyfeature from "./components/Keyfeature";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="main-app">
      <Navbar />
      <HeroBanner />
      <Keyfeature />
    </div>
  );
}

export default App;
