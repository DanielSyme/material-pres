import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	makeStyles,
	Typography,
} from "@material-ui/core";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";
import { ExpandMore } from "@material-ui/icons";
import logo from "../bigshinelogo.png";

export function AccordionExample() {
	// useDraftState
	const [isAccordionExpanded, setIsAccordionExpanded] = useState(false);
	const classes = useStyles();
	const codeWidth = 720;
	return (
		<Box padding={4}>
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				paddingX={1}
				paddingY={0}
				marginBottom={2}
				bgcolor="grey.200"
			>
				<Box display="flex" flex={1} paddingLeft={6}>
					<Accordion
						elevation={2}
						expanded={isAccordionExpanded}
						onChange={() =>
							setIsAccordionExpanded(
								(currentAccordionExpanded) => !currentAccordionExpanded
							)
						}
					>
						<AccordionSummary expandIcon={<ExpandMore />}>
							<Typography variant="h5" color="textSecondary">
								Test Accordion
							</Typography>
						</AccordionSummary>
						<AccordionDetails className={classes.details}>
							<Typography align="center">Inner Content!</Typography>
							<img src={logo} alt="logo" className={classes.logo} />
						</AccordionDetails>
					</Accordion>
				</Box>
				<Box width={codeWidth}>
					<SyntaxHighlighter style={dark} language="javascript">
						{`
const [isAccordionExpanded, setIsAccordionExpanded] = useState(false);
...
<Accordion
elevation={2}
expanded={isAccordionExpanded}
onChange={() =>
	setIsAccordionExpanded(
		(currentAccordionExpanded) => !currentAccordionExpanded
	)
}
>
<AccordionSummary expandIcon={<ExpandMore />}>
	<Typography variant="h5" color="textSecondary">
		Test Accordion
	</Typography>
</AccordionSummary>
<AccordionDetails>
	<Typography align="center">
		Inner Content!
	</Typography>
	<img src={logo} alt="logo" className={classes.logo} />
</AccordionDetails>
</Accordion>
					`}
					</SyntaxHighlighter>
				</Box>
			</Box>
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				paddingX={1}
				paddingY={0}
				marginBottom={2}
				bgcolor="grey.200"
			>
				<Box display="flex" flex={1} paddingLeft={6}>
					<Accordion elevation={0} disabled={true} expanded={false}>
						<AccordionSummary expandIcon={<ExpandMore />}>
							<Typography variant="h5" color="textSecondary">
								Test Accordion
							</Typography>
						</AccordionSummary>
						<AccordionDetails className={classes.details}>
							<Typography>Empty</Typography>
						</AccordionDetails>
					</Accordion>
				</Box>
				<Box width={codeWidth}>
					<SyntaxHighlighter style={dark} language="javascript">
						{`
<Accordion elevation={0} disabled={true} expanded={false}>
	<AccordionSummary expandIcon={<ExpandMore />}>
		<Typography variant="h5" color="textSecondary">
			Test Accordion
		</Typography>
	</AccordionSummary>
	<AccordionDetails>
		<Typography>
			Empty
		</Typography>
	</AccordionDetails>
</Accordion>
						`}
					</SyntaxHighlighter>
				</Box>
			</Box>
		</Box>
	);
}

const useStyles = makeStyles((theme) => ({
	details: {
		flexDirection: "column",
	},
	logo: {
		objectFit: "contain",
		height: "50px",
		paddingTop: theme.spacing(1),
	},
}));
