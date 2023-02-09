// import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackContext from "../Context/FeedbackContext";
import Spinner from "./shared/Spinner";
function FeedbackList() {
const {feedback,isLoading}=useContext(FeedbackContext)
    if (!isLoading&&(!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet!</p>;
    }
    return isLoading?<Spinner/>
    :(
    <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((item) => (
            <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // layout
            >
            <FeedbackItem key={item.id} item={item}  />
            </motion.div>
        ))}
        </AnimatePresence>
    </div>)
}

// FeedbackList.prototype = {
// feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         text: PropTypes.string.isRequired,
//         rating: PropTypes.number.isRequired,
//     })
// ),
// };

export default FeedbackList;