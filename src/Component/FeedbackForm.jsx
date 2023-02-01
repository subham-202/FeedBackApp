import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingsSelect from './RatingsSelect'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
function FeedbackForm() {
    const [text,setText]=useState('')
    const [btnDisabled,setBtnDisabled]=useState(false);
    const [message,setMessage]=useState('')
    const[rating,setRating]=useState(10);
    const {addFeedback} =useContext(FeedbackContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        if (text.trim().length>10){
            const newFeedback={
                text,
                rating
            }
            addFeedback(newFeedback);
            setText('')
        }
    }
    const HandleTextChange=(e)=>{
    if(text===''){
        setBtnDisabled(true)
        setMessage(null)
    }else if(text!==''&& text.trim().length<10 ){
        setBtnDisabled(true)
        setMessage('Text Messabe be atleast 10 characters');
    }else{
        setMessage(null);
        setBtnDisabled(false);
    }
    setText(e.target.value); 
}

    return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>
                How Would you Rate Our Services with us?
            </h2>
            <RatingsSelect select={(rating)=>setRating(rating)} selected={rating}/>
            <div className='input-group'>
                <input type="text" onChange={HandleTextChange} placeholder='Write a review' value={text}/>
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
        </form>
        {message &&<div className='message'>{message}</div>}
        </Card>
    )
}

export default FeedbackForm