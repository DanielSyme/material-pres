import {
	Box,
	createStyles,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	Theme,
	withStyles,
} from "@material-ui/core";
import MaterialTable from "material-table";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";

export function TableExample() {
	const codeWidth = 600;
	const materialTableColumn = [
		{ title: "Name", field: "name" },
		{
			title: "Price",
			field: "price",
		},
		{
			title: "Quantity",
			field: "quantity",
			type: "numeric",
			initialEditValue: 1,
		},
		{
			title: "Sum",
			field: "total",
		},
	];

	const tableData = {
		items: [
			{
				name: "Item One",
				price: "$2.00",
				quantity: 3,
				total: "$6.00",
			},
			{
				name: "Item Two",
				price: "$0.40",
				quantity: 11,
				total: "$4.40",
			},
			{
				name: "Item Three",
				price: "$17.00",
				quantity: 1,
				total: "$17.00",
			},
			{
				name: "Item Four",
				price: "$23.50",
				quantity: 2,
				total: "$47.00",
			},
		],
		total: "$74.40",
	};

	const [data, setData] = useState(tableData.items);

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
				<Box paddingLeft={6} paddingY={4}>
					<TableContainer component={Paper}>
						<Table size="small" aria-label="table one">
							<TableHead>
								<TableRow>
									<TableCell>Name</TableCell>
									<TableCell align="right">Price</TableCell>
									<TableCell align="right">Quantity</TableCell>
									<TableCell align="right">Sum</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{tableData.items.map((row) => (
									<TableRow key={row.name}>
										<TableCell>{row.name}</TableCell>
										<TableCell align="right">{row.price}</TableCell>
										<TableCell align="right">{row.quantity}</TableCell>
										<TableCell align="right">{row.total}</TableCell>
									</TableRow>
								))}
								<TableRow key="total">
									<TableCell
										component="th"
										scope="row"
										colSpan={3}
										align="right"
									>
										Total
									</TableCell>
									<TableCell component="th" scope="row">
										{tableData.total}
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
						<TablePagination
							rowsPerPageOptions={[4, 8, 16]}
							component="div"
							count={200}
							rowsPerPage={4}
							page={0}
							onChangePage={() => {}}
							onChangeRowsPerPage={() => {}}
						/>
					</TableContainer>
				</Box>
				<Box width={codeWidth}>
					<SyntaxHighlighter
						style={dark}
						language="jsx"
						customStyle={{ maxHeight: 800 }}
					>
						{`
<TableContainer component={Paper}>
	<Table size="small" aria-label="table one">
		<TableHead>
			<TableRow>
				<TableCell>Name</TableCell>
				<TableCell align="right">Price</TableCell>
				<TableCell align="right">Quantity</TableCell>
				<TableCell align="right">Sum</TableCell>
			</TableRow>
		</TableHead>
		<TableBody>
			{tableData.items.map((row) => (
				<TableRow key={row.name}>
					<TableCell>{row.name}</TableCell>
					<TableCell align="right">
						{row.price}
					</TableCell>
					<TableCell align="right">
						{row.quantity}
					</TableCell>
					<TableCell align="right">
						{row.total}
					</TableCell>
				</TableRow>
			))}
			<TableRow key="total">
				<TableCell
					component="th"
					scope="row"
					colSpan={3}
					align="right"
				>
					Total
				</TableCell>
				<TableCell component="th" scope="row">
					{tableData.total}
				</TableCell>
			</TableRow>
		</TableBody>
	</Table>
	<TablePagination
		rowsPerPageOptions={[4, 8, 16]}
		component="div"
		count={200}
		rowsPerPage={4}
		page={0}
		onChangePage={onChangePage}
		onChangeRowsPerPage={onChangeRowsPerPage}
	/>
</TableContainer>
...
const tableData = {
	items: [
		{
			name: "Item One",
			price: "$2.00",
			quantity: 3,
			total: "$6.00",
		},
		{
			name: "Item Two",
			price: "$0.40",
			quantity: 11,
			total: "$4.40",
		},
		{
			name: "Item Three",
			price: "$17.00",
			quantity: 1,
			total: "$17.00",
		},
		{
			name: "Item Four",
			price: "$23.50",
			quantity: 2,
			total: "$47.00",
		},
	],
	total: "$74.40",
};
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
				<Box paddingLeft={6} paddingY={4}>
					<TableContainer component={Paper}>
						<Table size="small" aria-label="table one">
							<TableHead>
								<TableRow>
									<StyledTableCell>Name</StyledTableCell>
									<StyledTableCell align="right">Price</StyledTableCell>
									<StyledTableCell align="right">Quantity</StyledTableCell>
									<StyledTableCell align="right">Sum</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{tableData.items.map((row) => (
									<StyledTableRow key={row.name}>
										<StyledTableCell>{row.name}</StyledTableCell>
										<StyledTableCell align="right">{row.price}</StyledTableCell>
										<StyledTableCell align="right">
											{row.quantity}
										</StyledTableCell>
										<StyledTableCell align="right">{row.total}</StyledTableCell>
									</StyledTableRow>
								))}
								<StyledTableRow key="total">
									<StyledTableCell
										component="th"
										scope="row"
										colSpan={3}
										align="right"
									>
										Total
									</StyledTableCell>
									<StyledTableCell component="th" scope="row">
										{tableData.total}
									</StyledTableCell>
								</StyledTableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
				<Box width={codeWidth}>
					<SyntaxHighlighter
						style={dark}
						language="jsx"
						customStyle={{ maxHeight: 800 }}
					>
						{`
<TableContainer component={Paper}>
	<Table size="small" aria-label="table one">
		<TableHead>
			<TableRow>
				<StyledTableCell>Name</StyledTableCell>
				<StyledTableCell align="right">
					Price
				</StyledTableCell>
				<StyledTableCell align="right">
					Quantity
				</StyledTableCell>
				<StyledTableCell align="right">
					Sum
				</StyledTableCell>
			</TableRow>
		</TableHead>
		<TableBody>
			{tableData.items.map((row) => (
				<StyledTableRow key={row.name}>
					<StyledTableCell>
						{row.name}
					</StyledTableCell>
					<StyledTableCell align="right">
						{row.price}
					</StyledTableCell>
					<StyledTableCell align="right">
						{row.quantity}
					</StyledTableCell>
					<StyledTableCell align="right">
						{row.total}
					</StyledTableCell>
				</StyledTableRow>
			))}
			<StyledTableRow key="total">
				<StyledTableCell
					component="th"
					scope="row"
					colSpan={3}
					align="right"
				>
					Total
				</StyledTableCell>
				<StyledTableCell
					component="th"
					scope="row"
				>
					{tableData.total}
				</StyledTableCell>
			</StyledTableRow>
		</TableBody>
	</Table>
</TableContainer>
...
const StyledTableCell = withStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: theme.spacing(2),
		},
		head: {
			fontSize: 18,
			fontWeight: "bold",
			backgroundColor: theme.palette.grey[400],
		},
		body: {
			fontSize: 16,
			"&:nth-of-type(even)": {
				backgroundColor:
					theme.palette.action.hover,
			},
		},
	})
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
	createStyles({
		root: {
			"&:nth-of-type(odd)": {
				backgroundColor:
					theme.palette.action.hover,
			},
		},
	})
)(TableRow);
...
const tableData = {
	items: [
		{
			name: "Item One",
			price: "$2.00",
			quantity: 3,
			total: "$6.00",
		},
		{
			name: "Item Two",
			price: "$0.40",
			quantity: 11,
			total: "$4.40",
		},
		{
			name: "Item Three",
			price: "$17.00",
			quantity: 1,
			total: "$17.00",
		},
		{
			name: "Item Four",
			price: "$23.50",
			quantity: 2,
			total: "$47.00",
		},
	],
	total: "$74.40",
};
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
				<Box paddingLeft={1} paddingY={4} width={530}>
					<MaterialTable
						title="Editable Table"
						columns={materialTableColumn}
						data={data}
						editable={{
							onRowAdd: async (newData) => setData([...data, newData]),
							onRowUpdate: async (newData, oldData) => {
								const dataUpdate = [...data];
								const index = oldData.tableData.id;
								dataUpdate[index] = newData;
								setData(dataUpdate);
							},
							onRowDelete: async (oldData) => {
								const dataDelete = [...data];
								const index = oldData.tableData.id;
								dataDelete.splice(index, 1);
								setData(dataDelete);
							},
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
const materialTableColumn = [
	{ title: "Name", field: "name" },
	{
		title: "Price",
		field: "price",
	},
	{
		title: "Quantity",
		field: "quantity",
		type: "numeric",
		initialEditValue: 1,
	},
	{
		title: "Sum",
		field: "total",
	},
];
const [data, setData] = useState(tableData.items);
...
<MaterialTable
	title="Editable Table"
	columns={materialTableColumn}
	data={data}
	editable={{
		onRowAdd: async (newData) =>
			setData([...data, newData]),
		onRowUpdate: async (newData, oldData) => {
			const dataUpdate = [...data];
			const index = oldData.tableData.id;
			dataUpdate[index] = newData;
			setData(dataUpdate);
		},
		onRowDelete: async (oldData) => {
			const dataDelete = [...data];
			const index = oldData.tableData.id;
			dataDelete.splice(index, 1);
			setData(dataDelete);
		},
	}}
/>
...
const tableData = {
	items: [
		{
			name: "Item One",
			price: "$2.00",
			quantity: 3,
			total: "$6.00",
		},
		{
			name: "Item Two",
			price: "$0.40",
			quantity: 11,
			total: "$4.40",
		},
		{
			name: "Item Three",
			price: "$17.00",
			quantity: 1,
			total: "$17.00",
		},
		{
			name: "Item Four",
			price: "$23.50",
			quantity: 2,
			total: "$47.00",
		},
	],
	total: "$74.40",
};
							`}
					</SyntaxHighlighter>
				</Box>
			</Box>
		</Box>
	);
}

const StyledTableCell = withStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: theme.spacing(2),
		},
		head: {
			fontSize: 18,
			fontWeight: "bold",
			backgroundColor: theme.palette.grey[400],
		},
		body: {
			fontSize: 16,
			"&:nth-of-type(even)": {
				backgroundColor: theme.palette.action.hover,
			},
		},
	})
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
	createStyles({
		root: {
			"&:nth-of-type(odd)": {
				backgroundColor: theme.palette.action.hover,
			},
		},
	})
)(TableRow);
