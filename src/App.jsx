import { useEffect, useState } from "react";
import HeroBanner from "./components/HeroBanner";
import Keyfeature from "./components/Keyfeature";
import Navbar from "./components/Navbar/Navbar";
import Support from "./components/Support/Support";

function App() {
  const [y, setY] = useState(0);
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    setY(window.scrollY);
  };
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, []);
  return (
    <div className="main-app">
      <Navbar />
      <HeroBanner y={y} />
      <Keyfeature />
      <Support />
    </div>
  );
}

export default App;
