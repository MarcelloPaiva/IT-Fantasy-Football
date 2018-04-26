import React, {Component, Fragment} from 'react'
import { Typography, Button } from 'material-ui'

export default class Login extends Component {
  executeYahooAuthScript() {
    window.alert("Once we have it up, execute server.js for Yahoo auth");
  }
  
  unsupported() {
    window.alert("This fantasy provider is not supported at this time.");
  }

  render() {
    return (
      <div>
        <Typography variant="headline">Login with a Fantasy Football Provider to Add a Team</Typography>
        <p><Button onClick={() => this.executeYahooAuthScript()}>Add Yahoo Team</Button></p>
        <p><Button onClick={() => this.unsupported()} style={{color: '#bbbbbb'}}>Add NFL Team</Button></p>
        <p><Button onClick={() => this.unsupported()} style={{color: '#bbbbbb'}}>Add CBS Team</Button></p>
        <p><Button onClick={() => this.unsupported()} style={{color: '#bbbbbb'}}>Add ESPN Team</Button></p>     
      </div>
    );
  }
}
  
