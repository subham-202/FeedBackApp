// import { BrowserRouter as Router, Route, Routes } from 'react'
import './App.css';
import FeedbackStats from './Component/FeedbackStats';
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Component/Header';
import FeedbackForm from './Component/FeedbackForm'
import FeedbackData from './data/FeedbackData';
import FeedbackList from './Component/FeedbackList';
import About from './Component/About';
import AboutIconLink from './Component/AboutIconLink';
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback=(id)=>{
    // console.log(`App`,id);
    if(window.confirm("Are You Sure You want To Delete this Item?")){
      setFeedback(feedback.filter((item)=>item.id!==id));
    }
  }
  const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4();
    setFeedback([newFeedback,...feedback])
    
  }
  return (
    <Router>
      <Header />
          <div className="container">
        <Routes>
          <Route exact path="/" element={
          <>
              <FeedbackForm handleAdd={addFeedback}/>
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
              <AboutIconLink />
          </>
          }></Route>
            <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
