import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";

const FeedbackInfo = () => {

    return (
        <div>
            <Header path="info"/>
            <div className='feedbackinfo'>
                <h1>INFO</h1>
                <p>Project is about cooperation of React, PHP a MySQL Database.</p>
            </div>
            <Footer />

        </div>


    );
}

export default FeedbackInfo;