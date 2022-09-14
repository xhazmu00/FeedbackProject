import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";


const FeedbackList = () => {

    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        getFeedbacks();
    }, []);

    const getFeedbacks = async () => {
        const response = await axios.get('http://localhost:3000/backend/configuration/get_feedback.php');
        setFeedback(response.data);
    }

    return (
        <div>
            <Header path="list" />
            <div>
                <div className='feedbacklist'>
                    {feedback.slice(0).reverse().map(function(result, index) {
                        return <div key={index} className="card my-3">
                            <div className="card-body text-center">
                                {result.body}
                                <div className="text-secondary mt-2">
                                    By {result.name} on {result.date}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <Footer />
        </div>


    );
}

export default FeedbackList;