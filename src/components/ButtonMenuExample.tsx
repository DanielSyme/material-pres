import { Box, Button, Menu, MenuItem, Tooltip } from "@material-ui/core";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";

export function ButtonMenuExample() {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const [anchorEl2, setAnchorEl2] = useState<HTMLButtonElement | null>(null);
	const codeWidth = 844;
	const close = () => setAnchorEl(null);
	const close2 = () => setAnchorEl2(null);

	return (
		<Box padding={2}>
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
							<MenuItem value="create" onClick={close}>
								Create
							</MenuItem>
							<MenuItem value="update" onClick={close}>
								Update
							</MenuItem>
							<MenuItem value="delete" onClick={close}>
								Delete
							</MenuItem>
						</Menu>
					</Box>
				</Box>
				<Box width={codeWidth}>
					<SyntaxHighlighter
						style={dark}
						language="jsx"
						customStyle={{ maxHeight: 800 }}
					>
						{`
const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
const close = () => setAnchorEl(null);
...
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
>
	<MenuItem value="create" onClick={close}>
		Create
	</MenuItem>
	<MenuItem value="update" onClick={close}>
		Update
	</MenuItem>
	<MenuItem value="delete" onClick={close}>
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
							aria-owns={anchorEl2 ? "simple-menu2" : undefined}
							aria-haspopup="true"
							onClick={(event) => setAnchorEl2(event.currentTarget)}
						>
							Protected Menu Example
						</Button>
						<Menu
							id="simple-menu2"
							open={!!anchorEl2}
							onClose={close2}
							anchorEl={anchorEl2}
							anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
							transformOrigin={{ vertical: "top", horizontal: "center" }}
							getContentAnchorEl={null}
						>
							<MenuItem value="create" onClick={close2}>
								Create
							</MenuItem>
							<Tooltip title="Unauthorized!" placement="left">
								<span>
									<MenuItem value="update" onClick={close2} disabled>
										Update
									</MenuItem>
								</span>
							</Tooltip>
							<Tooltip title="Unauthorized!" placement="left">
								<span>
									<MenuItem value="delete" onClick={close2} disabled>
										Delete
									</MenuItem>
								</span>
							</Tooltip>
						</Menu>
					</Box>
				</Box>
				<Box width={codeWidth}>
					<SyntaxHighlighter
						style={dark}
						language="jsx"
						customStyle={{ maxHeight: 800 }}
					>
						{`
export function useCheckedDocument<TData, TVariables>(
	documentNode: TypedDocument<TData, TVariables>
): CheckedDocument<TData, TVariables> {
	const user = useUser();
	return canUserAccess(user, documentNode) ? documentNode : "NOT_AUTHORIZED";
}
...
export function isAuthorizedDocument<TData, TVariables>(
	checked: CheckedDocument<TData, TVariables>
): checked is AuthorizedDocument<TData, TVariables> {
	return checked !== "NOT_AUTHORIZED";
}
...
export function ProtectorButtonMenu({
	disabled = false,
	protects: checkedDocuments,
	buttonLabel,
	children: renderMenuItems,
}: {
	disabled?: boolean;
	protects: CheckedDocument[];
	buttonLabel: string;
	children: (closeMenu: () => void) => JSX.Element[];
}) {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const close = () => setAnchorEl(null);

	return (
		<>
			<Button
				variant="contained"
				aria-owns={anchorEl ? "simple-menu" : undefined}
				aria-haspopup="true"
				onClick={(event) => setAnchorEl(event.currentTarget)}
				disabled={disabled || !checkedDocuments.find(isAuthorizedDocument)}
			>
				{buttonLabel}
			</Button>
			<Menu
				id="simple-menu"
				open={!!anchorEl}
				onClose={close}
				anchorEl={anchorEl}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				transformOrigin={{ vertical: "top", horizontal: "center" }}
			>
				{renderMenuItems(close)}
			</Menu>
		</>
	);
}
...
<ProtectorButtonMenu
	protects={[createMutation, updateMutation, deleteMutation]}
	buttonLabel="Protected Menu Example"
>
	{(closeMenu) => [
		<Protector protects={createMutation} key="create">
			{(isNotAuthorized) => (
				<MenuItem
					value="create"
					onClick={closeMenu}
					disabled={isNotAuthorized}
				>
					Create
				</MenuItem>
			)}
		</Protector>,
		<Protector protects={updateMutation} key="update">
			{(isNotAuthorized) => (
				<MenuItem
					value="update"
					onClick={closeMenu}
					disabled={isNotAuthorized}
				>
					Update
				</MenuItem>
			)}
		</Protector>,
		<Protector protects={deleteMutation} key="delete">
			{(isNotAuthorized) => (
				<MenuItem
					value="delete"
					onClick={closeMenu}
					disabled={isNotAuthorized}
				>
					Delete
				</MenuItem>
			)}
		</Protector>,
	]}
</ProtectorButtonMenu>
...
export function Protector({
	protects: checkedDocument,
	children,
}: {
	protects: CheckedDocument;
	children: (isNotAuthorized: boolean) => ReactElement;
}) {
	const isNotAuthorized = !isAuthorizedDocument(checkedDocument);
	return isNotAuthorized ? (
		<Tooltip title="Unauthorized!">
			<span>{children(isNotAuthorized)}</span>
		</Tooltip>
	) : (
		children(isNotAuthorized)
	);
}
							`}
					</SyntaxHighlighter>
				</Box>
			</Box>
		</Box>
	);
}
