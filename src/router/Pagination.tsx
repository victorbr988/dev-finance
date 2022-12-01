import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";

export function Pagination() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/dashboard" element={ <Dashboard /> } />
    </Routes>
  )
}