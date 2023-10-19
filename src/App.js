import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LinkSubmissionForm from "./LinkSubmissionForm/LinkSubmissionForm";
import "./App.css";
import Footer from './Footer/Footer';
import Header from './Header/Header';
import ProfilePage from './ProfilePage/ProfilePage';


function App() {
  return (
    <div className = "wrapper">
      <Header/>
      <div className = "App">
        <Router>
          <Routes>
            <Route path = "/" element = {<LinkSubmissionForm />} />
            <Route path = "/profile" element = {<ProfilePage/>} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
