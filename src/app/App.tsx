import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import TimerPage from "../pages/timer";
import StopwatchPage from "../pages/stopwatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/timer" element={<TimerPage />} />
      <Route path="/stopwatch" element={<StopwatchPage />} />
    </Routes>
  );
}

export default App;
