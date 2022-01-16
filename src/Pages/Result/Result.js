import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header/Header";
import "./Result.css";

const Result = ({ name, score, category }) => {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [userScore,setUserScore] = useState('');
  const [questionsType, setQuestionType] = useState('');
  const [isClick, setIsClick] = useState(false);


  useEffect(() => {
    if (!name) {
      history.push("/");
    }
    else if(name){
      setUserName(name)
    }
  }, [name, history]);
  useEffect(() => {
    if(category){ 
      setUserScore(score)
    }
  }, [score])
  
  useEffect(() => {
    if(category){  
      setQuestionType(category)
    }
  }, [category])

  const examineeScore = {
    yourScore: userScore,
    yourName: userName,
    category: questionsType
  }
  const handleSubmit = () => {
  
    fetch('http://localhost:8000/score', {
      method: "POST",
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(examineeScore)
  })
  setIsClick(true)
  }
 

  return (
    <>
    {/* <Header/> */}
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
      <Button disabled={isClick} onClick={()=>handleSubmit()}>Save Your Score</Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/dashboard"
      >
        Feedback
      </Button>

    </div>
    </>
  );
};

export default Result;
