import React, {Component, Fragment} from 'react'
import { TextField, Typography, Button, Grid, Paper } from 'material-ui'

export default props =>
  <div>
    <Paper>
      <Typography variant="headline">User Login</Typography>
      <form>
        <TextField
          id="email"
          label="Yahoo Email"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
        />
      </form>
    </Paper>
  </div>
