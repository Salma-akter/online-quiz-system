import * as React from 'react';
import './Ranking.css';

export default function Ranking() {
 const [userData, setUserData]= React.useState([])

    React.useEffect(() => {
        fetch(`http://localhost:8000/getScore`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, []);


   const sortData = userData?.sort((a, b) => (a.yourScore < b.yourScore) ? 1 : -1)
  return (
    <div class="container">
    <h1 className="header1">LeaderBoard</h1>
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th >Name</th>
        <th >QuestionType</th>
        <th style={{textAlign: 'center'}}>score</th>
        <th style={{textAlign: 'center'}}>Position</th>
      </tr>
    </thead>
    <tbody>
      {
          sortData?.map((data, index) => 
              <tr>
                  <td>{data._id}</td>
                  <td>{data.yourName}</td>
                  <td>{data.category}</td>
                  <td style={{textAlign: 'center'}}>{data.yourScore}</td>
                  <td style={{textAlign: 'center'}}>{index+1}</td>
              </tr>
          )
      }
        
    </tbody>
  </table>
  </div>

  );
}
