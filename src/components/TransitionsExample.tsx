import { Box, Button, Collapse, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, makeStyles, Paper, Slide, Switch, Toolbar, Typography } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import React, { forwardRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";
import logo from "../bigshinelogo.png";

const Transition = forwardRef<unknown, TransitionProps & {children?: React.ReactElement }>(
    (props, ref) => <Slide direction="up" ref={ref} {...props} />)

export function TransitionsExample() {
	const codeWidth = 720;
    const [checked, setChecked] = useState(false)
    const [open, setOpen] = useState(false)
    
    const classes = useStyles()
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
                    <FormControlLabel
                        control={<Switch checked={checked} onChange={() => setChecked(!checked)} />}
                        label="Show"
                    />
                    <Box display="flex" pl={2}>
                        <Collapse in={checked}>
                            <Paper elevation={4}>
                                <img src={logo} alt="logo" className={classes.logo} />
                            </Paper>
                        </Collapse>
                    </Box>
				</Box>
				<Box width={codeWidth}>
					<SyntaxHighlighter
						style={dark}
						language="jsx"
						customStyle={{ maxHeight: 800 }}
					>
						{`
<Collapse in={checked}>
    <Paper elevation={4}>
        <img src={logo} alt="logo" className={classes.logo} />
    </Paper>
</Collapse>
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
                    <FormControlLabel
                        control={<Switch checked={open} onChange={() => {
                            setOpen((open) => !open)}
                        } />}
                        label="Show"
                    />
                        <Dialog 
                            fullWidth={true}
                            maxWidth={"sm"}
                            open={open} 
                            onClose={() => setOpen(false)}
                            TransitionComponent={Transition}
                        >
                            <DialogTitle>
                                Material UI Presentation
                            </DialogTitle>
                            <DialogContent>
                                <img src={logo} alt="logo" className={classes.logo} />
                            </DialogContent>
                            <DialogActions>
					            <Button onClick={() => setOpen(false)} color="primary">
						            CLOSE
					            </Button>
                            </DialogActions>
                        </Dialog>
				</Box>
				<Box width={codeWidth}>
					<SyntaxHighlighter
						style={dark}
						language="jsx"
						customStyle={{ maxHeight: 800 }}
					>
						{`
<Dialog 
fullWidth={true}
maxWidth={"sm"}
open={open} 
onClose={() => setOpen(false)}
TransitionComponent={Transition}
>
    <DialogTitle>
        Material UI Presentation
    </DialogTitle>
    <DialogContent>
        <img src={logo} alt="logo" className={classes.logo} />
    </DialogContent>
    <DialogActions>
        <Button onClick={() => setOpen(false)} color="primary">
            CLOSE
        </Button>
    </DialogActions>
</Dialog>
							`}
					</SyntaxHighlighter>
				</Box>
			</Box>
		</Box>
	);
}

const useStyles = makeStyles((theme) => ({
	logo: {
		objectFit: "contain",
		height: "50px",
		paddingTop: theme.spacing(1),
	}
}));