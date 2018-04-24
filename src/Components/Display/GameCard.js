import React, {Component, Fragment} from 'react'
import { Typography, Button, Grid, Paper } from 'material-ui'

export default props =>
  <div>
    <Paper elevation={4}>
      <Grid container spacing={6}>
        <Grid item xs={2}>
          <Typography variant="subheading" color="textSecondary">
          Team 1
          </Typography>
          <Typography variant="headline" >
          165
          </Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography variant="subheading" color="textSecondary">
        Team 2
        </Typography>
        <Typography variant="headline" >
        137.5
        </Typography>
        </Grid>
      </Grid>
      <Button size="small">See More Detail</Button>
      <Button size="small">View On Yahoo</Button>
    </Paper>
  </div>
