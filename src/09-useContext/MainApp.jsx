import { Routes, Route, Navigate, Link } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
  return (
    <UserProvider>
        <Navbar />
        <hr />

        <Routes>
            <Route path="/" element={ <HomePage />} />
            <Route path="login" element={ <LoginPage />} />
            <Route path="about" element={ <AboutPage />} />
            <Route path="/*" element={ <Navigate to="/about" />} />

        </Routes>
    </UserProvider>
  )
}
