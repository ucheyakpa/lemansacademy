import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Start from './pages/Start'
import PayWindow from "./pages/PayWindow";
import Chat from "./components/Chat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/pay" element={<PayWindow />} />
      </Routes>
      <Chat />
    </Router>
  );
}

export default App;
