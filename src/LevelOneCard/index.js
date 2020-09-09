import React from "react";
import "./styles.css";
import GameCards from "../GameCards/index.js";

class LevelOneCard extends React.Component{
  constructor(props) { super(props); 
      this.state = {qList: []}; 
  }

  componentDidMount () {
    fetch('https://api.airtable.com/v0/appMu2ml24abXK2X4/PercepQues?api_key=API_KEY&view=Grid%20view') //returns promise // 
    .then(res => res.json()) // returns promise that gives json // 
    .then(res => res.records)
    .then(res => {
      let qmap = res.map(record => record.fields.Question)
      console.log(qmap)
      this.setState({ qList: qmap })
    })
    .catch(error => console.log(error))
}

  
  
  render () {
    const questions = this.state.qList;
    return (
    <div className="Level1Card">
      {questions 
      ? <GameCards label = {questions[3]}></GameCards>
      : <GameCards label = {"No questions"}></GameCards>}
    </div>)
  }
}

export default LevelOneCard;
