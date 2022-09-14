import FeedbackHome from "./components/FeedbackHome";
import FeedbackList from "./components/FeedbackList";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import FeedbackInfo from "./components/FeedbackInfo";

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path='/' element={<FeedbackHome/>}/>
          <Route exact path='/list' element={<FeedbackList/>}/>
          <Route exact path='/info' element={<FeedbackInfo/>}/>

      </Routes>
    </Router>
  );
}

export default App;
