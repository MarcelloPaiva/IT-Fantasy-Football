import React, {Component, Fragment} from 'react'
import { Grid, AppBar, Toolbar, Typography, IconButton, Button } from 'material-ui'
import GameCard from './Display/GameCard'
import Header from './Display/Header'
import Login from './Display/Login'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }

  //For some reason, whether 'loggedIn' is false or true it returns the GameCards
  render() {
    var isLogged = this.state.loggedIn
    if ({isLogged}) {
      return <Fragment>
        <Header />
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <GameCard />
          </Grid>
          <Grid item xs={2}>
            <GameCard />
          </Grid>
          <Grid item xs={2}>
            <GameCard />
          </Grid>
        </Grid>
      </Fragment>
    } else {
      return <Fragment>
        <Header />
        <Login />
      </Fragment>
    }
  }
}
