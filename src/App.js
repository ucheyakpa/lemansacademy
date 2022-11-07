import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Start from './pages/Start'
import PayWindow from "./pages/PayWindow";
import Chat from "./components/Chat";
import Tutor from "./pages/Tutor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/pay" element={<PayWindow />} />
        <Route path="/tutor" element={<Tutor />} />
      </Routes>
      <Chat />
    </Router>
  );
}

export default App;
