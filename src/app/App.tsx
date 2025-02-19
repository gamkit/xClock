import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home";
import TimerPage from "@/pages/timer";
import StopwatchPage from "@/pages/stopwatch";
import { StatusBar } from "@/features/status-bar";

function App() {
  return (
    <div className="base-container">
      <StatusBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/stopwatch" element={<StopwatchPage />} />
      </Routes>
    </div>
  );
}

export default App;
