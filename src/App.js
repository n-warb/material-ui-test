import logo from './logo.svg';
import './App.css';
import { Button, makeStyles } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',  
  },  
});

function App() {
  const classes = useStyles();
  return (
  <Grid container    className={classes.container}>
  <Grid item  >
  <Button variant="contained" color="primary">
  Primary
</Button>
  </Grid>
</Grid>

  );
}

export default App;
