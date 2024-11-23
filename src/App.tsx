import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HundredDaysOfCode from "./pages/100DaysOfCodeCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ChallengeIntro from "./pages/100DaysOfCodeHome";
import NotFound from "./pages/404";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Navigation */}
      <Navbar />
      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/100-days-of-code" element={<ChallengeIntro />} />
        <Route
          path="/100-days-of-code-calendar"
          element={<HundredDaysOfCode />}
        />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
};

export default App;
