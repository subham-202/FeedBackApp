import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid'
const FeedbackContext=createContext();
export const FeedbackProvider=({children})=>{
    const [feedback,setFeedback]=useState([
        {
            id:1,
            text:'This Feedback item 1',
            rating:9
        },
        {
            id: 2,
            text: 'This Feedback item 2',
            rating: 7
        }, {
            id: 3,
            text: 'This Feedback item 3',
            rating: 8
        }
    ])
    const[feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit: false
    })
    //Update Feedback
    const updateFeedback=(id,updItem)=>{
        console.log(id,updItem)
        setFeedback(
        feedback.map((item)=>(item.id===id?
        {...item,...updItem}:item)))
        }
    //Set Items to be updated
    const editFeedback =(item)=>{
        setFeedbackEdit({
            item,
            edit:true,
        })
    }
    // Delete Feedback
    const deleteFeedback = (id) => {
        // console.log(`App`,id);
        if (window.confirm("Are You Sure You want To Delete this Item?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }
    // Add Feeedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
    }
return (
    <FeedbackContext.Provider value={{ feedback, feedbackEdit, editFeedback, deleteFeedback, addFeedback, editFeedback, updateFeedback }}>
    {children}
    </FeedbackContext.Provider>
)
}
export default FeedbackContext;