import { Box, Button, Container } from "@material-ui/core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";

function App() {
	const codeWidth = 520;
	return (
		<Container maxWidth="xl">
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
						<Button>Some Button</Button>
					</Box>
					<Box width={codeWidth}>
						<SyntaxHighlighter style={dark} language="javascript">
							{`
<Button>
	Some Button
</Button>
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
						<Button variant="contained" color="primary">
							Some Button
						</Button>
					</Box>
					<Box width={codeWidth}>
						<SyntaxHighlighter style={dark} language="javascript">
							{`
<Button variant="contained" color="primary">
	Some Button
</Button>
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
						<Button variant="outlined" color="secondary">
							Some Button
						</Button>
					</Box>
					<Box width={codeWidth}>
						<SyntaxHighlighter style={dark} language="javascript">
							{`
<Button variant="outlined" color="secondary">
	Some Button
</Button>
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
						<Button variant="contained" size="large" disabled>
							Some Button
						</Button>
					</Box>
					<Box width={codeWidth}>
						<SyntaxHighlighter style={dark} language="javascript">
							{`
<Button variant="contained" size="large" disabled>
	Some Button
</Button>
							`}
						</SyntaxHighlighter>
					</Box>
				</Box>
			</Box>
		</Container>
	);
}

export default App;
