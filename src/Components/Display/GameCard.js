import React, {Component, Fragment} from 'react'
import { Typography, Button, Grid, Paper } from 'material-ui'
import Expanded from './Expanded'

let dataJSON = require('../../Data/sample.json');
console.log(dataJSON.roster[0]);

export default class GameCard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { data: dataJSON, isExpanded: false };
    this.showExpanded = this.showExpanded.bind(this);
  }

  showExpanded(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isExpanded
    }));
    if (this.state.isExpanded){

    }
  }

  render(){
    return (
      <div class="row center-xs">
      <div class="box">
        <Paper elevation={4}>
            <Typography variant="subheading" color="textSecondary">
              {this.state.data.team_name}    {this.state.data.matchup.opponent_name}
            </Typography>
            <Typography variant="headline" >
              {this.state.data.matchup.user_score}  |  {this.state.data.matchup.opponent_score}
            </Typography>
          <Button onClick={this.showExpanded} size="small">See More Detail</Button>
          <Button size="small">View On Yahoo</Button>
        </Paper>
      </div>
      </div>
    );
  }
}
