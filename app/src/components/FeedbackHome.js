import { useState, useEffect } from 'react'
import $ from "jquery";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';

// import Note from "./Note";
// import '../styles/NoteList.css';
// import axios from "axios";


const FeedbackHome = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [nameErr, setNameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [messageErr, setMessageErr] = useState('');

    const history = useNavigate();

    const saveFeedback = async (e) => {

        e.preventDefault();
        var validateState = true;

        if (!name || !email || !message) {
            validateState = false;
            setNameErr(!name);
            setEmailErr(!email);
            setMessageErr(!message);
        }

        if (validateState == true) {
            // SAVE
            const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                console.log(data);
                history('/list');
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.error(xhr.status);
                console.error(thrownError);
            }
        });
        }

        console.log(name, email, message);
    }



    return (
        <div>
                      <Header path="home"/>

            <div className='feedbackhome'>

                <form
                    action="http://localhost:3000/backend/configuration/save_feedback.php"
                    method="post"
                    onSubmit={saveFeedback} className="needs-validation">
                    <h2>Feedback</h2>
                    <p>Leave feedback for us</p>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input onChange={(e) =>
                            setName(e.target.value)
                        } type="text" className={"form-control " + (nameErr ? "is-invalid" : "")} name="name" placeholder="Enter name"></input>
                        <div className="invalid-feedback">Please choose a username.</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input onChange={(e) =>
                            setEmail(e.target.value)
                        } type="email" name="email" className={"form-control " + (emailErr ? "is-invalid" : "")} aria-describedby="emailHelp" placeholder="Enter email"></input>
                        <div className="invalid-feedback">Please choose a email.</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea onChange={(e) =>
                            setMessage(e.target.value)
                        } type="text" className={"form-control " + (messageErr ? "is-invalid" : "")} placeholder="Enter message" name="message"></textarea>
                        <div className="invalid-feedback">Please choose a message.</div>
                    </div>
                    <button name="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
            <Footer />
        </div>
    )


}

export default FeedbackHome;

