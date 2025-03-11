import './App.css'
import Navbar from "./components/global/navbar.jsx";
import Footer from "./components/global/footer.jsx";
import {Route, Routes} from "react-router-dom";
import Psychologicals from "./pages/psychological/psychologicals.jsx";

function App() {

  return (
    <>
      <Navbar/>
        <Psychologicals />
      <Footer />
    </>
  )
}

export default App
