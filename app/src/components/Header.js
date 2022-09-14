import React, { useState, useEffect } from 'react';

const Header = (props) => {

console.log(props);
    return (<div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">FEEDBACK PROJECT</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className={props.path === "home" ? "nav-item nav-link active" : "nav-item nav-link"} href="/">Home</a>
                    <a className={props.path === "info" ? "nav-item nav-link active" : "nav-item nav-link"} href="/info">Info</a>
                    <a className={props.path === "link" ? "nav-item nav-link active" : "nav-item nav-link"} href="/list">Feedback</a>
                </div>
            </div>
        </nav>
    </div>);

};

export default Header;