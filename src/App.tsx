import { useState } from "react";
import {
	FormControl,
	Select,
	MenuItem,
	Box,
	Typography,
	Container,
} from "@material-ui/core";
import {
	AccordionExample,
	ButtonExample,
	ButtonMenuExample,
	FormExample,
	StylingExample,
	TransitionsExample,
	TypographyExample,
	TableExample,
	ResponsiveExample
} from "./components";
import logo from "./smallshinelogo.png";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import LuxonUtils from "@date-io/luxon";

function App() {
	const [currentComponent, setCurrentComponent] = useState("typography");
	return (
		<MuiPickersUtilsProvider utils={LuxonUtils}>
			<Box marginTop={2} marginLeft={2}>
				<FormControl variant="outlined">
					<Select
						id="component-select"
						value={currentComponent}
						onChange={(event) =>
							setCurrentComponent(event.target.value as string)
						}
					>
						<MenuItem value="typography">Typography</MenuItem>
						<MenuItem value="button">Button</MenuItem>
						<MenuItem value="button menu">Button Menu</MenuItem>
						<MenuItem value="accordion">Accordion</MenuItem>
						<MenuItem value="form">Form</MenuItem>
						<MenuItem value="styling">Styling</MenuItem>
						<MenuItem value="table">Table</MenuItem>
						<MenuItem value="transitions">Transitions</MenuItem>
						<MenuItem value="responsive">Responsive</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<Container maxWidth="lg">
				<Box marginTop={4} marginLeft={4} display="flex">
					<img
						src={logo}
						alt="logo"
						style={{
							objectFit: "contain",
							height: "50px",
							marginRight: "30px",
							position: "relative",
							top: "5px",
						}}
					/>
					<Typography
						variant="h3"
						style={{
							fontFamily: "MavenPro",
							color: "#f47920",
							textTransform: "capitalize",
						}}
					>
						{currentComponent}
					</Typography>
				</Box>
				{currentComponent === "typography" && <TypographyExample />}
				{currentComponent === "button" && <ButtonExample />}
				{currentComponent === "button menu" && <ButtonMenuExample />}
				{currentComponent === "accordion" && <AccordionExample />}
				{currentComponent === "form" && <FormExample />}
				{currentComponent === "styling" && <StylingExample />}
				{currentComponent === "table" && <TableExample />}
				{currentComponent === "transitions" && <TransitionsExample />}
				{currentComponent === "responsive" && <ResponsiveExample />}
			</Container>
		</MuiPickersUtilsProvider>
	);
}

export default App;
  