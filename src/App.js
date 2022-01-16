import axios from "axios";
import {  useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import GetReview from "./Pages/Testimonial/GetReview";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import AuthProvider from "./context/AuthProvider";
import Login from "./components/LoginAuth/Login/Login";
import PrivateRoute from "./components/LoginAuth/PrivateRoute/PrivateRoute";
import Dashboard from "./Dashboard/Dashboard/Dashboard";


function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState('');

  const fetchQuestions = async (category = "") => {
    const { data } = await axios.get(`http://localhost:8000/quiz?category=` + category);
    setQuestions(data);
  };
  return (
    <AuthProvider>
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: 'url("")' }}>
        {/* <Header /> */}
        <Switch>
          <PrivateRoute path="/" exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
              category={category}
              setCategory={setCategory}
            />
          </PrivateRoute>
          <PrivateRoute path="/quiz">
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </PrivateRoute>
          <Route path="/result">
            <Result name={name} score={score} category={category} />
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/review">
            <GetReview/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
