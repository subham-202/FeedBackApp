import { createContext,useState,useEffect } from "react";
// import { v4 as uuidv4 } from 'uuid'
const FeedbackContext=createContext();
export const FeedbackProvider=({children})=>{
    const[isLoading,setIsLoading]=useState(true);
    const [feedback,setFeedback]=useState([
        // {
        //     id:1,
        //     text:'This Feedback item 1',
        //     rating:9
        // },
        // {
        //     id: 2,
        //     text: 'This Feedback item 2',
        //     rating: 7 
        // }, {
        //     id: 3,
        //     text: 'This Feedback item 3',
        //     rating: 8
        // }
    ])
    const[feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit: false
    })
    useEffect(()=>{
        fetchFeedback();
    },[])
    //Fetch Feedback
    const fetchFeedback= async()=>{
    const response = await fetch(`https://feedbackuiserver.onrender.com/feedback?_sort=id&_order=desc`);
    const data =await response.json();
    setFeedback(data);
    setIsLoading(false);
    }
    //Update Feedback
    const updateFeedback = async (id,updItem)=>{
        // console.log(id,updItem)
        const response = await fetch(`/feedback/${id}`,{
        method:'PUT',
        headers:{
            "Content-Type":"application/json",
        }
        })
        const data =await response.json()
        setFeedback(
        feedback.map((item)=>(item.id===id?{...item,...data}:item)))
        }
    //Set Items to be updated
    const editFeedback =(item)=>{
        setFeedbackEdit({
            item,
            edit:true,
        })
    }
    // Delete Feedback
    const deleteFeedback =async (id) => {
        // console.log(`App`,id);
        if (window.confirm("Are You Sure You want To Delete this Item?")) {
            await fetch(`https://feedbackuiserver.onrender.com/feedback/${id}`,{method:'DELETE'})
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }
    // Add Feeedback
    const addFeedback =async (newFeedback) => {
        // newFeedback.id = uuidv4();
        const response = await fetch('https://feedbackuiserver.onrender.com/feedback',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newFeedback),
    })
    const data =await response.json();
    setFeedback([data, ...feedback])
    }
return (
    <FeedbackContext.Provider value={{ feedback, feedbackEdit, isLoading, editFeedback, deleteFeedback, addFeedback, updateFeedback }}>
    {children}
    </FeedbackContext.Provider>
)
}
export default FeedbackContext;