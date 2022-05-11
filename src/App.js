import './App.css'
import Navbar from './components/Navbar'
import Form from './components/Form'
import React from 'react'
import ParentComponent from './components/ParentComponent'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ParentComponent />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
