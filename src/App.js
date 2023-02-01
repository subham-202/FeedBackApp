// import { BrowserRouter as Router, Route, Routes } from 'react'
import './App.css';
import FeedbackStats from './Component/FeedbackStats';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Component/Header';
import FeedbackForm from './Component/FeedbackForm'
import FeedbackList from './Component/FeedbackList';
import About from './Component/About';
import AboutIconLink from './Component/AboutIconLink';
import {FeedbackProvider} from './Context/FeedbackContext'
function App() {
  return (
    <FeedbackProvider>
    <Router>
      <Header />
          <div className="container">
        <Routes>
          <Route exact path="/" element={
          <>
              <FeedbackForm />
              <FeedbackStats  />
              <FeedbackList   />
              <AboutIconLink />
          </>
          }></Route>
            <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
