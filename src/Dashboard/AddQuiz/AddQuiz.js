import { useState } from "react";
import { Button, MenuItem, TextField } from "@material-ui/core";
import Categories from "../../Data/Categories"
import './AddQuiz.css'
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
const AddQuiz = () => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [question, setQuestion] = useState("");
    const [inCorrect, setIncorrect] = useState("");
    const [correct, setCorrect] = useState("");
    const [type, setType] = useState("");
    const [error] = useState(false);


  
    const handleSubmit = () => {
        const Result = {
            category: category,
            difficulty: difficulty,
            question: question,
            type: type,
            correct_answer: correct,
            incorrect_answers: inCorrect
               
        };
        fetch('http://localhost:8000/addQuestion', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Result)
        })
            .then(res => {
                console.log('res data', res);
            })
    };
    return (
        <div className="content">
             <div className="settings">
        <span style={{ fontSize: 30 }}>Add A Niw Quiz</span>
        <div className="settings__select">
          {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
            <TextField
            style={{ marginBottom: 25 }}
            label="Write Question"
            variant="outlined"
            onChange={(e) => setQuestion(e.target.value)}
          />
          <TextField
            label="Select Question Type"
            variant="outlined"
            select
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{ marginBottom: 30 }}
          >
              <MenuItem key="Multiple" value="multiple">
              multiple
            </MenuItem>
            <MenuItem key="Medium" value="boolean">
            boolean
            </MenuItem>
         
              </TextField>
          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.category}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <TextField
            style={{ marginBottom: 25 }}
            label="Write Correct Answer"
            variant="outlined"
            onChange={(e) => setCorrect(e.target.value)}
          />
          <TextField
            style={{ marginBottom: 25 }}
            label="Write Three InCorrect Answer"
            variant="outlined"
            onChange={(e) => setIncorrect(e.target.value.split(" "))}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          </div>
      </div>
      <img src="/sid.svg" className="sideBanner" alt="sid" />
    </div>
    );
};

export default AddQuiz;