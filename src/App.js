import "./App.css";

import Home from "./components /home";
import About from "./components /about";
import Menu from "./components /menu";
import Testimonial from "./components /Testimonial";
import Footer from "./components /footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Menu />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
