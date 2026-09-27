import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";
import Bonds from "./pages/Bonds";
import Watchlists from "./pages/Watchlists";
import SecurityMaster from "./pages/SecurityMaster";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/bonds" element={<Bonds />} />
            <Route path="/watchlists" element={<Watchlists />} />
            <Route
              path="/security-master"
              element={<SecurityMaster />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;