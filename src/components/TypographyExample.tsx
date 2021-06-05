import { Box, Typography } from "@material-ui/core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";

export function TypographyExample() {
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
					<Typography>Some Text</Typography>
				</Box>
				<Box width={codeWidth}>
					<SyntaxHighlighter style={dark} language="jsx">
						{`
<Typography>
	Some Text
</Typography>
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
					<Typography variant="button" component="div" color="textSecondary">
						Some Text
					</Typography>
				</Box>
				<Box width={codeWidth}>
					<SyntaxHighlighter style={dark} language="jsx">
						{`
<Typography variant="button" component="div" color="textSecondary">
	Some Text
</Typography>
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
					<Typography variant="h4" color="primary">
						Some Text
					</Typography>
				</Box>
				<Box width={codeWidth}>
					<SyntaxHighlighter style={dark} language="jsx">
						{`
<Typography variant="h4" color="primary">
	Some Text
</Typography>
							`}
					</SyntaxHighlighter>
				</Box>
			</Box>
		</Box>
	);
}
