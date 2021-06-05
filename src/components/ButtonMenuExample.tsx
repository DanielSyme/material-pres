import { Box, Button, Menu, MenuItem } from "@material-ui/core";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";

export function ButtonMenuExample() {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const codeWidth = 800;
	const close = () => setAnchorEl(null);

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
					<Box display="flex">
						<Button
							variant="contained"
							aria-owns={anchorEl ? "simple-menu" : undefined}
							aria-haspopup="true"
							onClick={(event) => setAnchorEl(event.currentTarget)}
						>
							Button Menu Example
						</Button>
						<Menu
							id="simple-menu"
							open={!!anchorEl}
							onClose={close}
							anchorEl={anchorEl}
							anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
							transformOrigin={{ vertical: "top", horizontal: "center" }}
							getContentAnchorEl={null}
						>
							<MenuItem value="typography" onClick={close}>
								Create
							</MenuItem>
							<MenuItem value="button" onClick={close}>
								Update
							</MenuItem>
							<MenuItem value="button menu" onClick={close}>
								Delete
							</MenuItem>
						</Menu>
					</Box>
				</Box>
				<Box width={codeWidth}>
					<SyntaxHighlighter style={dark} language="jsx">
						{`
<Button
	variant="contained"
	aria-owns={anchorEl ? "simple-menu" : undefined}
	aria-haspopup="true"
	onClick={(event) => setAnchorEl(event.currentTarget)}
>
	Button Menu Example
</Button>
<Menu
	id="simple-menu"
	open={!!anchorEl}
	onClose={close}
	anchorEl={anchorEl}
	anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
	transformOrigin={{ vertical: "top", horizontal: "center" }}
	getContentAnchorEl={null}
>
	<MenuItem value="typography" onClick={close}>
		Create
	</MenuItem>
	<MenuItem value="button" onClick={close}>
		Update
	</MenuItem>
	<MenuItem value="button menu" onClick={close}>
		Delete
	</MenuItem>
</Menu>
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
					<Box display="flex">
						<Button
							variant="contained"
							aria-owns={anchorEl ? "simple-menu" : undefined}
							aria-haspopup="true"
							// disabled is optional prop boolean
							// protects props is CheckedDocument[]
							// disabled={disabled || !checkedDocuments.find(isAuthorizedDocument)}
							onClick={(event) => setAnchorEl(event.currentTarget)}
						>
							Protected Menu Example
						</Button>
						<Menu
							id="simple-menu"
							open={!!anchorEl}
							onClose={close}
							anchorEl={anchorEl}
							anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
							transformOrigin={{ vertical: "top", horizontal: "center" }}
							getContentAnchorEl={null}
						>
							<MenuItem value="typography" onClick={close}>
								Create
							</MenuItem>
							<MenuItem value="button" onClick={close} disabled>
								Update
							</MenuItem>
							<MenuItem value="button menu" onClick={close} disabled>
								Delete
							</MenuItem>
						</Menu>
					</Box>
				</Box>
				<Box width={codeWidth}>
					<SyntaxHighlighter style={dark} language="jsx">
						{`
<Button>
	Some Button
</Button>
							`}
					</SyntaxHighlighter>
				</Box>
			</Box>
		</Box>
	);
}
