import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Head from "./components/Head/Head.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Services/Services.jsx";
import Testymonials from "./components/Testymonials/Testymonials.jsx";
import Contact from "./components/Contact/Contact.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Head />
      <About />
      <Services />
      <Testymonials />
      <Contact />
    </>
  );
}

export default App;
