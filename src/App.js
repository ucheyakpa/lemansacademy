import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import GetStarted from "./pages/GetStarted";
import Chat from "./components/Chat";
import Tutor from "./pages/Tutor";
import Payment from "./pages/Payment";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <SkeletonTheme baseColor="#edeef1" highlightColor="#f6f7f8">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<GetStarted />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Chat />
      </Router>
    </SkeletonTheme>
  );
}

export default App;
