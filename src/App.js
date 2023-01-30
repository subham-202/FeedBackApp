// import { BrowserRouter as Router, Route, Routes } from 'react'
import './App.css';
import { useState } from 'react';
import Header from './Component/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './Component/FeedbackList';
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback=(id)=>{
    // console.log(`App`,id);
    if(window.confirm("Are You Sure You want To Delete this Item?")){
      setFeedback(feedback.filter((item)=>item.id!==id));
    }
  }
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
