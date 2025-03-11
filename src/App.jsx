import './App.css'
import Footer from "./components/global/footer.jsx";
import {Route, Routes} from "react-router-dom";
import Psychologicals from "./pages/psychological/psychologicals.jsx";

function App() {

  return (
    <>

        <Psychologicals />
      <Footer />
    </>
  )
}

export default App
