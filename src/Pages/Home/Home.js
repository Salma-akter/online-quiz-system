import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import useSound from 'use-sound';
import { useHistory } from "react-router";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Header from "../../components/Header/Header";
import Categories from "../../Data/Categories";
import Play from "../../sounds/play.mp3"
import "./Home.css";

const Home = ({ name, setName, category,setCategory, fetchQuestions }) => {
  const [error, setError] = useState(false);
  const history = useHistory();
  const [letsPlay] = useSound(Play);

  const handleSubmit = () => {
    if (!category || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      letsPlay();
      history.push("/quiz");
      fetchQuestions(category);
    }
  };

  return (
    <>
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings__select">
          {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
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
          {/* <TextField
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
          </TextField> */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="/quiz.svg" className="banner" alt="quiz app" />
    </div>
    </>
  );
};

export default Home;
