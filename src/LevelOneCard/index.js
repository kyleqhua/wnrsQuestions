import React from "react";
import "./styles.css";
import GameCards from "../GameCards/index.js";
import GenericButton from '../GenericButton/index.js'
class LevelOneCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qList: [],
      selectedQ: "Click the button for a new question"
    };

  }

  componentDidMount() {
    //this is burner airtable account with burner keys.
    fetch('https://api.airtable.com/v0/appzuxlfcCMsUs8Nb/Speed?api_key=keyIol9Z3RTY1PZr7&view=Grid%20view')
      .then(res => res.json())
      .then(res => res.records)
      .then(res => {
        let qmap = res.map(record => record.fields.Notes)
        console.log(qmap)
        this.setState({ qList: qmap })
      })
      .catch(error => console.log(error))
  }

  getRandomCard() {
    let questions = this.state.qList;
    let index = Math.floor(Math.random() * questions.length);
    this.setState({ selectedQ: questions[index] });
  }

  render() {
    let question = this.state.selectedQ
    return (
      <div className="Level1Card">
        <GameCards label={question}></GameCards>
        <GenericButton label='Press to Change Question' changeQ={this.getRandomCard.bind(this)} />
      </div>)
  }
}

export default LevelOneCard;
