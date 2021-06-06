import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	FormControl,
	FormControlLabel,
	InputAdornment,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Switch,
	TextField,
} from "@material-ui/core";
import * as Yup from "yup";
import { FormikProps, useFormik } from "formik";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";
import { useState } from "react";
import { KeyboardDateTimePicker } from "@material-ui/pickers";

interface ExampleFormikProps {
	firstName: string;
	amount: string;
	todaysDate: Date | null;
	otherDate: Date | null;
	fillAll: boolean;
	selectedPackages: string[];
}

export function FormExample() {
	const [open, setOpen] = useState(false);
	const codeWidth = 780;

	const formikProps: FormikProps<ExampleFormikProps> = useFormik<ExampleFormikProps>(
		{
			initialValues: {
				firstName: "",
				amount: "",
				todaysDate: null,
				otherDate: null,
				fillAll: false,
				selectedPackages: [],
			},
			validationSchema: Yup.object({
				firstName: Yup.string()
					.required("First name is required")
					.matches(/^Daniel$/, "Thats not your name!"),
				amount: Yup.number()
					.required("Amount is required")
					.max(10, "No more than $10"),
				todaysDate: Yup.date()
					.required("Todays date is required")
					.typeError("A valid date is required")
					.min(new Date("June 9, 2021 00:00:00"), "That's not todays date!")
					.max(new Date("June 9, 2021 23:59:59"), "That's not todays date!"),
				otherDate: Yup.date()
					.typeError("Invalid Date Format")
					.nullable()
					.when("fillAll", {
						is: true,
						then: Yup.date()
							.typeError("A valid date is required")
							.required("This date field is required"),
					}),
				fillAll: Yup.boolean(),
				selectedPackages: Yup.array().length(5, "5 packages were used"),
			}),
			onSubmit: () => setOpen(true),
			validateOnMount: true,
		}
	);

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
				<Box display="flex" flex={1} paddingX={3} paddingY={4}>
					<Paper>
						<form noValidate={true} name="form example">
							<Box
								display="flex"
								flexDirection="column"
								justifyContent="space-between"
								padding={4}
								height={500}
							>
								<TextField
									label="First Name"
									name="firstName"
									value={formikProps.values.firstName}
									onChange={formikProps.handleChange}
									onBlur={formikProps.handleBlur}
									error={
										formikProps.touched.firstName &&
										!!formikProps.errors.firstName
									}
									helperText={
										formikProps.touched.firstName &&
										formikProps.errors.firstName
									}
								/>
								<TextField
									label="Amount"
									name="amount"
									value={formikProps.values.amount}
									onChange={formikProps.handleChange}
									onBlur={formikProps.handleBlur}
									error={
										formikProps.touched.amount && !!formikProps.errors.amount
									}
									helperText={
										formikProps.touched.amount && formikProps.errors.amount
									}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">$</InputAdornment>
										),
									}}
								/>
								<KeyboardDateTimePicker
									label="Todays date"
									value={formikProps.values.todaysDate}
									name="todaysDate"
									format="yyyy-MM-dd HH:mm:ss"
									onChange={(date) => {
										formikProps.setFieldValue(
											"todaysDate",
											date?.toJSDate() ?? null
										);

										setTimeout(() =>
											formikProps.setFieldTouched("todaysDate", true)
										);
									}}
									onBlur={formikProps.handleBlur}
									error={
										formikProps.touched.todaysDate &&
										!!formikProps.errors.todaysDate
									}
									helperText={
										formikProps.touched.todaysDate &&
										formikProps.errors.todaysDate
									}
								/>
								<TextField
									type="datetime-local"
									label="Other date"
									value={formikProps.values.otherDate}
									name="otherDate"
									onChange={formikProps.handleChange}
									onBlur={formikProps.handleBlur}
									error={
										formikProps.touched.otherDate &&
										!!formikProps.errors.otherDate
									}
									helperText={
										formikProps.touched.otherDate &&
										formikProps.errors.otherDate
									}
									InputLabelProps={{
										shrink: true,
									}}
								/>
								<Box display="flex" flexDirection="column">
									<FormControl
										error={
											formikProps.touched.selectedPackages &&
											!!formikProps.errors.selectedPackages
										}
									>
										<InputLabel
											htmlFor="selectedPackages"
											id="selectedPackagesLabel"
										>
											Packages Used
										</InputLabel>
										<Select
											labelId="selectedPackagesLabel"
											name="selectedPackages"
											multiple={true}
											displayEmpty={true}
											id="selectedPackages"
											value={formikProps.values.selectedPackages}
											onChange={formikProps.handleChange}
											onBlur={formikProps.handleBlur}
											error={
												formikProps.touched.selectedPackages &&
												!!formikProps.errors.selectedPackages
											}
											renderValue={(selected) =>
												(selected as string[]).join(", ")
											}
										>
											<MenuItem value="Material UI">Material UI</MenuItem>
											<MenuItem value="Formik">Formik</MenuItem>
											<MenuItem value="Angular">Angular</MenuItem>
											<MenuItem value="Yup">Yup</MenuItem>
											<MenuItem value="Pickers">Pickers</MenuItem>
											<MenuItem value="jQuery">jQuery</MenuItem>
											<MenuItem value="React">React</MenuItem>
										</Select>
									</FormControl>
								</Box>
								<FormControlLabel
									label="Fill all fields?"
									labelPlacement="start"
									control={
										<Switch
											name="fillAll"
											checked={formikProps.values.fillAll}
											onChange={formikProps.handleChange}
										/>
									}
								/>
								<Box>
									<Button
										disabled={!formikProps.isValid}
										variant="contained"
										color="primary"
										onClick={async () => {
											const validationResult = await formikProps.validateForm();
											if (Object.keys(validationResult).length === 0) {
												formikProps.submitForm();
											}
										}}
									>
										Submit
									</Button>
								</Box>
							</Box>
						</form>
					</Paper>
				</Box>
				<Box width={codeWidth}>
					<SyntaxHighlighter
						style={dark}
						language="jsx"
						customStyle={{ maxHeight: 800 }}
					>
						{`
const [open, setOpen] = useState(false);
const formikProps: FormikProps<ExampleFormikProps> =
	useFormik<ExampleFormikProps>({
		initialValues: {
			firstName: "",
			amount: "",
			todaysDate: null,
			otherDate: null,
			fillAll: false,
			selectedPackages: [],
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.required("First name is required")
				.matches(/^Daniel$/, "Thats not your name!"),
			amount: Yup.number()
				.required("Amount is required")
				.max(10, "No more than $10"),
			todaysDate: Yup.date()
				.required("Todays date is required")
				.typeError("A valid date is required")
				.min(new Date("June 9, 2021 00:00:00"),
					"That's not todays date!")
				.max(new Date("June 9, 2021 23:59:59"),
					"That's not todays date!"),
			otherDate: Yup.date()
				.typeError("Invalid Date Format")
				.nullable()
				.when("fillAll", {
					is: true,
					then: Yup.date()
						.typeError("A valid date is required")
						.required("This date field is required"),
				}),
			fillAll: Yup.boolean(),
			selectedPackages: Yup.array().length(5, "5 packages were used"),
		}),
		onSubmit: () => setOpen(true),
		validateOnMount: true,
	}
);
...
<Paper>
	<form noValidate={true} name="form example">
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="space-between"
			padding={4}
			height={500}
		>
			<TextField
				label="First Name"
				name="firstName"
				value={formikProps.values.firstName}
				onChange={formikProps.handleChange}
				onBlur={formikProps.handleBlur}
				error={
					formikProps.touched.firstName &&
					!!formikProps.errors.firstName
				}
				helperText={
					formikProps.touched.firstName &&
					formikProps.errors.firstName
				}
			/>
			<TextField
				label="Amount"
				name="amount"
				value={formikProps.values.amount}
				onChange={formikProps.handleChange}
				onBlur={formikProps.handleBlur}
				error={
					formikProps.touched.amount &&
					!!formikProps.errors.amount
				}
				helperText={
					formikProps.touched.amount &&
					formikProps.errors.amount
				}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">$</InputAdornment>
					),
				}}
			/>
			<KeyboardDateTimePicker
				label="Todays date"
				value={formikProps.values.todaysDate}
				name="todaysDate"
				format="yyyy-MM-dd HH:mm:ss"
				onChange={(date) => {
					formikProps.setFieldValue(
						"todaysDate",
						date?.toJSDate() ?? null
					);

					setTimeout(() =>
						formikProps.setFieldTouched("todaysDate", true)
					);
				}}
				onBlur={formikProps.handleBlur}
				error={
					formikProps.touched.todaysDate &&
					!!formikProps.errors.todaysDate
				}
				helperText={
					formikProps.touched.todaysDate &&
					formikProps.errors.todaysDate
				}
			/>
			<TextField
				type="datetime-local"
				label="Other date"
				value={formikProps.values.otherDate}
				name="otherDate"
				onChange={formikProps.handleChange}
				onBlur={formikProps.handleBlur}
				error={
					formikProps.touched.otherDate &&
					!!formikProps.errors.otherDate
				}
				helperText={
					formikProps.touched.otherDate &&
					formikProps.errors.otherDate
				}
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<Box display="flex" flexDirection="column">
				<FormControl
					error={
						formikProps.touched.selectedPackages &&
						!!formikProps.errors.selectedPackages
					}
				>
					<InputLabel
						htmlFor="selectedPackages"
						id="selectedPackagesLabel"
					>
						Packages Used
					</InputLabel>
					<Select
						labelId="selectedPackagesLabel"
						name="selectedPackages"
						multiple={true}
						displayEmpty={true}
						id="selectedPackages"
						value={formikProps.values.selectedPackages}
						onChange={formikProps.handleChange}
						onBlur={formikProps.handleBlur}
						error={
							formikProps.touched.selectedPackages &&
							!!formikProps.errors.selectedPackages
						}
						renderValue={(selected) =>
							(selected as string[]).join(", ")
						}
					>
						<MenuItem value="Material UI">Material UI</MenuItem>
						<MenuItem value="Formik">Formik</MenuItem>
						<MenuItem value="Angular">Angular</MenuItem>
						<MenuItem value="Yup">Yup</MenuItem>
						<MenuItem value="Pickers">Pickers</MenuItem>
						<MenuItem value="jQuery">jQuery</MenuItem>
						<MenuItem value="React">React</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<FormControlLabel
				label="Fill all fields?"
				labelPlacement="start"
				control={
					<Switch
						name="fillAll"
						checked={formikProps.values.fillAll}
						onChange={formikProps.handleChange}
					/>
				}
			/>
			<Box>
				<Button
					disabled={!formikProps.isValid}
					variant="contained"
					color="primary"
					onClick={async () => {
						const validationResult =
							await formikProps.validateForm();
						if (Object.keys(validationResult).length === 0) {
							formikProps.submitForm();
						}
					}}
				>
					Submit
				</Button>
			</Box>
		</Box>
	</form>
</Paper>
...
<Dialog
	open={open}
	onClose={() => setOpen(false)}
	aria-labelledby="alert-dialog-form-submitted"
	aria-describedby="alert-dialog-description"
>
	<DialogTitle id="alert-dialog-title">Form Example</DialogTitle>
	<DialogContent>
		<DialogContentText id="alert-dialog-description">
			Form submitted
		</DialogContentText>
	</DialogContent>
	<DialogActions>
		<Button onClick={() => setOpen(false)} color="primary">
			OK
		</Button>
	</DialogActions>
</Dialog>
							`}
					</SyntaxHighlighter>
				</Box>
			</Box>
			<Dialog
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby="alert-dialog-form-submitted"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">Form Example</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Form submitted
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpen(false)} color="primary">
						OK
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
}
