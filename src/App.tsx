import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Preloader from "./components/Preloader"
import Hero from "./components/Hero"
import CountdownTimer from "./components/CountdownTimer"
import Timeline from "./components/Timeline"
import Tracks from "./components/Tracks"
import Prizes from "./components/Prizes"
import Sponsors from "./components/Sponsors"
import FAQ from "./components/FAQ"
import Team from "./components/Team"
import Footer from "./components/Footer"
import RegistrationForm from "./components/RegistrationForm"
import PaymentUpload from "./components/PaymentUpload"
import Dashboard from "./components/admin/Dashboard"

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Preloader />
      <Navbar />
      <Outlet /> {/* This will render different pages based on the route */}
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Default Home Page */}
          <Route
            index
            element={
              <>
                <Hero />
                <CountdownTimer />
                <Timeline />
                <Tracks />
                <Prizes />
                <PaymentUpload />
                <RegistrationForm />
                <Sponsors />
                <FAQ />
                <Team />
                <Footer />
              </>
            }
          />

          {/* Dashboard Page */}
          <Route path="hakathon-dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

