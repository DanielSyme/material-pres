import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";
import logo from "../bigshinelogo.png";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '40%',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Test() {
    const codeWidth = 520;
    const classes = useStyles();

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
                <Box display="flex" flex={1} pl={6} pt={2} pb={2}>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={logo}
                    title="Image title"
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
          </Box>
          <Box width={codeWidth} pl={4}>
          <SyntaxHighlighter
						style={dark}
						language="jsx"
						customStyle={{ maxHeight: 800 }}
                        >
{`<Grid container spacing={4}>
    {cards.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={logo}
                    title="Image title"
                  />
            </Card>
        </Grid>
    ))}
</Grid>`}
            </SyntaxHighlighter>	
                        </Box>
        </Box>
        </Box>
  );
}
