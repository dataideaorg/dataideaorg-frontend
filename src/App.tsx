import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HundredDaysOfCode from "./pages/100DaysOfCodeCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ChallengeIntro from "./pages/100DaysOfCodeHome";
import NotFound from "./pages/404";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="terms-of-service" element={<TermsOfService />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="100-days-of-code-calendar" element={<HundredDaysOfCode />} />
      <Route path="100-days-of-code" element={<ChallengeIntro />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
