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
	TypographyExample,
} from "./components";
import logo from "./smallshinelogo.png";

function App() {
	const [currentComponent, setCurrentComponent] = useState("button");
	return (
		<>
			<Box marginTop={2} marginLeft={2}>
				<FormControl variant="outlined">
					<Select
						id="component-select"
						value={currentComponent}
						onChange={(event) =>
							setCurrentComponent(event.target.value as string)
						}
					>
						<MenuItem value="button">Button</MenuItem>
						<MenuItem value="typography">Typography</MenuItem>
						<MenuItem value="accordion">Accordion</MenuItem>
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
				{currentComponent === "button" && <ButtonExample />}
				{currentComponent === "typography" && <TypographyExample />}
				{currentComponent === "accordion" && <AccordionExample />}
			</Container>
		</>
	);
}

export default App;
