import { Box, CircularProgress, Container, LinearProgress } from "@material-ui/core";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";

export function Spinners()
{
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
                    <CircularProgress />
					</Box>
					<Box width={codeWidth}>
						<SyntaxHighlighter style={dark} language="javascript">
							{`
<CircularProgress />

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
                    <CircularProgress color="secondary" />
					</Box>
					<Box width={codeWidth}>
						<SyntaxHighlighter style={dark} language="javascript">
							{`
<CircularProgress color="secondary" />
							`}
						</SyntaxHighlighter>
					</Box>
				</Box>
			</Box>
		
        </Container>)
}