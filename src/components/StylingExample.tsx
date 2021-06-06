import {
	Box,
	Button,
	Paper,
	Typography,
	ThemeProvider,
	createMuiTheme,
	FormControlLabel,
	Switch,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	makeStyles,
	Chip,
} from "@material-ui/core";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";

enum Status {
	ACTIVE,
	PENDING,
	SUSPENDED,
}

type StatusChipProps = {
	status: Status;
};

export function StylingExample() {
	const [selectedTheme, setSelectedTheme] = useState("theme0");
	const [selectedSubTheme, setSelectedSubTheme] = useState("theme0");
	const codeWidth = 700;
	const classes = useStyles({ status: Status.ACTIVE });
	const classes2 = useStyles({ status: Status.PENDING });
	const classes3 = useStyles({ status: Status.SUSPENDED });

	const theme0 = createMuiTheme({});

	const theme1 = createMuiTheme({
		palette: {
			primary: {
				main: "#67fcf1",
			},
			secondary: {
				main: "#202833",
			},
			text: {
				primary: "#46a29f",
				secondary: "#c5c6c8",
			},
		},
		typography: {
			h4: {
				fontWeight: "bold",
			},
		},
		props: {
			MuiButton: {
				disableElevation: true,
			},
		},
	});

	const theme2 = createMuiTheme({
		palette: {
			primary: {
				main: "#53C4FF",
			},
			secondary: {
				main: "#202833",
			},
			text: {
				primary: "#46a29f",
				secondary: "#67fcf1",
			},
		},
		typography: {
			h4: {
				fontWeight: "bold",
				background: "linear-gradient(45deg, #FE6B8B 50%, #FF8E53 50%)",
				"-webkit-background-clip": "text",
				"-webkit-text-fill-color": "transparent",
			},
			subtitle1: {
				fontSize: 28,
				textDecoration: "underline",
			},
			button: {
				fontWeight: "bold",
			},
		},
		overrides: {
			MuiButton: {
				root: {
					background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
				},
			},
		},
	});

	const theme3 = createMuiTheme({
		palette: {
			type: "dark",
		},
	});

	const subTheme = createMuiTheme({
		palette: {
			background: {
				default: "#2a2a2a",
			},
			primary: {
				main: "#8038fb",
			},
			secondary: {
				main: "#05b3a6",
			},
			text: {
				primary: "#037374",
				secondary: "#5700e8",
			},
		},
		overrides: {
			MuiPaper: {
				root: {
					backgroundColor: "#2a2a2a",
				},
			},
		},
	});

	let selectedThemeObject = theme0;
	let themeObjectCode = `selectedThemeObject = createMuiTheme({});`;

	if (selectedTheme === "theme1") {
		selectedThemeObject = theme1;
		themeObjectCode = `selectedThemeObject = createMuiTheme({
	palette: {
		primary: {
			main: "#67fcf1",
		},
		secondary: {
			main: "#202833",
		},
		text: {
			primary: "#46a29f",
			secondary: "#c5c6c8",
		},
	},
	typography: {
		h4: {
			fontWeight: "bold",
		},
	},
	props: {
		MuiButton: {
			disableElevation: true,
		},
	},
});`;
	} else if (selectedTheme === "theme2") {
		selectedThemeObject = theme2;
		themeObjectCode = `selectedThemeObject = createMuiTheme({
	palette: {
		primary: {
			main: "#53C4FF",
		},
		secondary: {
			main: "#202833",
		},
		text: {
			primary: "#46a29f",
			secondary: "#67fcf1",
		},
	},
	typography: {
		h4: {
			fontWeight: "bold",
			background: "linear-gradient(45deg, #FE6B8B 50%, #FF8E53 50%)",
			"-webkit-background-clip": "text",
			"-webkit-text-fill-color": "transparent",
		},
		subtitle1: {
			fontSize: 28,
			textDecoration: "underline",
		},
		button: {
			fontWeight: "bold",
		},
	},
	overrides: {
		MuiButton: {
			root: {
				background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
			},
		},
	},
});`;
	} else if (selectedTheme === "theme3") {
		selectedThemeObject = theme3;
		themeObjectCode = `selectedThemeObject = createMuiTheme({
	palette: {
		type: "dark",
	},
});`;
	}

	let subThemeObject = selectedThemeObject;

	if (selectedSubTheme === "subTheme") {
		subThemeObject = subTheme;

		themeObjectCode += `
...
subThemeObject = createMuiTheme({
	palette: {
		background: {
			default: "#2a2a2a",
		},
		primary: {
			main: "#8038fb",
		},
		secondary: {
			main: "#05b3a6",
		},
		text: {
			primary: "#037374",
			secondary: "#5700e8",
		},
	},
	overrides: {
		MuiPaper: {
			root: {
				backgroundColor: "#2a2a2a",
			},
		},
	},
});`;
	} else {
		themeObjectCode += `
...
subThemeObject = selectedThemeObject;`;
	}

	return (
		<ThemeProvider theme={theme0}>
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
					<Box paddingLeft={6}>
						<ThemeProvider theme={selectedThemeObject}>
							<Paper>
								<Box
									display="flex"
									flexDirection="column"
									justifyContent="space-around"
									height={340}
									margin={4}
								>
									<Button variant="contained" color="primary">
										Contained Button
									</Button>
									<Button variant="outlined" color="secondary">
										Outlined Button
									</Button>
									<ThemeProvider theme={subThemeObject}>
										<Button variant="contained" color="primary">
											Contained Button 2
										</Button>
										<Typography variant="h4" color="textPrimary">
											H4 Text
										</Typography>
									</ThemeProvider>
									<Typography variant="h4" color="textPrimary">
										H4 Text 2
									</Typography>
									<Typography variant="subtitle1" color="textSecondary">
										Subtitle Text
									</Typography>
								</Box>
							</Paper>
						</ThemeProvider>
						<Paper>
							<Box
								display="flex"
								flexDirection="column"
								justifyContent="space-around"
								height={150}
								margin={4}
							>
								<FormControl>
									<InputLabel htmlFor="selectedTheme" id="selectedThemeLabel">
										Select a Theme
									</InputLabel>
									<Select
										labelId="selectedThemeLabel"
										name="selectedTheme"
										displayEmpty={true}
										id="selectedTheme"
										value={selectedTheme}
										onChange={({ target: { value } }) =>
											setSelectedTheme(value as string)
										}
									>
										<MenuItem value="theme0">Original</MenuItem>
										<MenuItem value="theme1">Custom Theme 1</MenuItem>
										<MenuItem value="theme2">Custom Theme 2</MenuItem>
										<MenuItem value="theme3">Dark Theme</MenuItem>
									</Select>
								</FormControl>
								<FormControlLabel
									label="Set Sub Theme?"
									labelPlacement="start"
									control={
										<Switch
											checked={selectedSubTheme !== "theme0"}
											onChange={() =>
												setSelectedSubTheme((currentSelectedTheme) => {
													return currentSelectedTheme === "theme0"
														? "subTheme"
														: "theme0";
												})
											}
										/>
									}
								/>
							</Box>
						</Paper>
					</Box>
					<Box width={codeWidth}>
						<Box>
							<SyntaxHighlighter
								style={dark}
								language="jsx"
								customStyle={{ maxHeight: 500 }}
							>
								{themeObjectCode}
							</SyntaxHighlighter>
						</Box>
						<Box width={codeWidth}>
							<SyntaxHighlighter
								style={dark}
								language="jsx"
								customStyle={{ maxHeight: 630 }}
							>
								{`
<ThemeProvider theme={selectedThemeObject}>
	<Paper>
		<Button variant="contained" color="primary">
			Contained Button
		</Button>
		<Button variant="outlined" color="secondary">
			Outlined Button
		</Button>
		<ThemeProvider theme={subThemeObject}>
			<Button variant="contained" color="primary">
				Contained Button 2
			</Button>
			<Typography variant="h4" color="textPrimary">
				H4 Text
			</Typography>
		</ThemeProvider>
		<Typography variant="h4" color="textPrimary">
			H4 Text 2
		</Typography>
		<Typography variant="subtitle1" color="textSecondary">
			Subtitle Text
		</Typography>
	</Paper>
</ThemeProvider>
							`}
							</SyntaxHighlighter>
						</Box>
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
					<Box paddingLeft={6}>
						<Button className={classes.button}>Some Button</Button>
					</Box>
					<Box width={codeWidth}>
						<SyntaxHighlighter
							style={dark}
							language="jsx"
							customStyle={{ maxHeight: 800 }}
						>
							{`
const useStyles = makeStyles((theme) => ({
	button: {
		fontSize: 20,
		textTransform: "none",
		padding: theme.spacing(4),
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.grey[200],
		boxShadow: ${"`"}0px 0px 8px 0px ${"${"}theme.palette.text.disabled${"}"}${"`"}
	},
}));
...
const classes = useStyles();
...
<Button className={classes.button}>Some Button</Button>
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
					<Box paddingLeft={6}>
						<Chip
							label="ACTIVE"
							classes={{
								root: classes.chip,
								label: classes.label,
							}}
						/>
						<Chip
							label="PENDING"
							classes={{
								root: classes2.chip,
								label: classes2.label,
							}}
						/>
						<Chip
							label="SUSPENDED"
							classes={{
								root: classes3.chip,
								label: classes3.label,
							}}
						/>
					</Box>
					<Box width={codeWidth}>
						<SyntaxHighlighter
							style={dark}
							language="jsx"
							customStyle={{ maxHeight: 800 }}
						>
							{`
const useStyles = makeStyles((theme) => ({
	chip: {
		margin: theme.spacing(1),
		padding: theme.spacing(0.5),
		backgroundColor: ({ status }: StatusChipProps) => {
			switch (status) {
				case Status.ACTIVE:
					return theme.palette.success.main;
				case Status.PENDING:
					return theme.palette.warning.dark;
				case Status.SUSPENDED:
					return theme.palette.error.dark;
			}
		},
		color: ({ status }: StatusChipProps) => {
			switch (status) {
				case Status.PENDING:
					return theme.palette.warning.contrastText;
				default:
					return "#FFF";
			}
		},
	},
	label: {
		fontWeight: "bold",
	},
}));
...
const classes = useStyles({ status });
...
<Chip
	label="ACTIVE"
	classes={{
		root: classes.chip,
		label: classes.label,
	}}
/>
...
<Chip
	label="PENDING"
	classes={{
		root: classes.chip,
		label: classes.label,
	}}
/>
...
<Chip
	label="SUSPENDED"
	classes={{
		root: classes.chip,
		label: classes.label,
	}}
/>
							`}
						</SyntaxHighlighter>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

const useStyles = makeStyles((theme) => ({
	button: {
		fontSize: 20,
		textTransform: "none",
		padding: theme.spacing(4),
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.grey[200],
		boxShadow: `0px 0px 8px 0px ${theme.palette.text.disabled}`,
	},
	chip: {
		margin: theme.spacing(1),
		padding: theme.spacing(0.5),
		backgroundColor: ({ status }: StatusChipProps) => {
			switch (status) {
				case Status.ACTIVE:
					return theme.palette.success.main;
				case Status.PENDING:
					return theme.palette.warning.dark;
				case Status.SUSPENDED:
					return theme.palette.error.dark;
			}
		},
		color: ({ status }: StatusChipProps) => {
			switch (status) {
				case Status.PENDING:
					return theme.palette.warning.contrastText;
				default:
					return "#FFF";
			}
		},
	},
	label: {
		fontWeight: "bold",
	},
}));
