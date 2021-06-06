import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, makeStyles, Slide, Typography } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import React, { forwardRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";
import logo from "../bigshinelogo.png";

const Transition = forwardRef<unknown, TransitionProps & {children?: React.ReactElement }>(
    (props, ref) => <Slide direction="up" ref={ref} {...props} />)

export function ResponsiveExample() {
	const codeWidth = 720;
    const [open, setOpen] = useState(false)
    const cards = [1,2,3,4,5,6,7,8]
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
                    <Grid container spacing={4}>
                        {cards.map(card => {
                            <>
                            <p>{card}</p>
                            <Grid item key={card} xs={12}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.logo}
                                    image="https://source.unsplash.com/random"
                                    title="Shine Logo"/>
                                 <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                                </Card>
                            </Grid> 
                            </>   
                        })   
                        }
                    </Grid>
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
		</Box>
	);
}

const useStyles = makeStyles((theme) => ({
	logo: {
        paddingTop: '56.25%', // 16:9
      },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardContent: {
        flexGrow: 1,
      },
}));