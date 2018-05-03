import React, {Component, Fragment} from 'react'
import { Grid, AppBar, Toolbar, Typography, IconButton, Button } from 'material-ui'
import GameCard from './Display/GameCard'
import Header from './Display/Header'
import Login from './Display/Login'
import Expanded from './Display/Expanded'
import '../css/flexboxgrid.min.css';


function frontPage(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return(
      <Fragment>
        <Header />
        <GameCard />
      </Fragment>
    );
  }else{
    return(
      <Fragment>
        <Header />
        <Expanded />
      </Fragment>
    );
  }
}

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
    console.log(typeof isLogged)
    console.log(isLogged)
    if ({isLogged}) {
      return <Fragment>
        <Header />
        <div>
          <GameCard />
        </div>
      </Fragment>
    } else {
      return <Fragment>
        <Header />
        <Expanded />
      </Fragment>
    }
  }
}
