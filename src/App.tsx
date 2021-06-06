import { AppBar, FormControl, InputLabel, makeStyles, MenuItem, Select, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Buttons } from "./Buttons";
import {Link, BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Spinners } from "./Spinners";

function App() {
	const [component, setComponent] = useState('')
	const buttonPath = "/buttons"
	const spinnerPath = "/spinners"
	const classes = useStyles()
	return (
		<>
		<Router>
		<AppBar position='relative'>
			<img className={classes.logo}
			src={require("./images/orange_on_grey.jpeg").default}
			/>
		<FormControl className={classes.formControl}>
		<InputLabel id="demo-simple-select-label">Components</InputLabel>
		<Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
		  autoWidth
          value={component}
          onChange={(event) => {
			setComponent(event.target.value)
			
		  	}
		  }
        >
          <MenuItem value={'Buttons'}><Link to={buttonPath}>Buttons</Link></MenuItem>
          <MenuItem value={'Spinner'}><Link to={spinnerPath}>Spinner</Link></MenuItem>
        </Select>
		</FormControl>
		  </AppBar>
		  <Typography 
		  	variant='h3' 
		  	align="center">
			  Material UI Presentation
			  </Typography>
		  <Switch>
			  <Route path={buttonPath}>
				  <Buttons/>
				  </Route>
				  <Route path={spinnerPath}>
				  <Spinners/>
				  </Route>
				  <Route path={"/"} />
		  </Switch>
		  </Router>
		</>
	);
}

export default App;

const useStyles = makeStyles((theme) => ({
	formControl: {
	  margin: theme.spacing(1),
	  maxWidth: 120,
	},
	selectEmpty: {
	  marginTop: theme.spacing(2),
	},
	logo:{
		width: "32px",
		height: "32px",
		margin: theme.spacing(1,1,1,1)
	}
  }));
  