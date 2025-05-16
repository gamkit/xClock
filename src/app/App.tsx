import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home";
import TimerPage from "@/pages/timer";
import StopwatchPage from "@/pages/stopwatch";
import { StatusBar } from "@/features/status-bar";
import { AppFrame } from "./providers/AppFrame";

function App() {
  return (
    <div className="app-container">
      <StatusBar />
      <AppFrame>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clock" element={<HomePage />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/stopwatch" element={<StopwatchPage />} />
        </Routes>
      </AppFrame>
      <div className="modals-portal"></div>
    </div>
  );
}

export default App;
