import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 250,
    textAlign: "center",
    padding: "2rem",
    justifyContent: "space-evenly",
    height: 300,
    borderRadius: "1.2rem",
    // background: "rgb(4 4 4 / 25%)",
    background: "linear-gradient(45deg, #212121, #0e0e0e)",
    // backdropFilter: "blur(30px)",
    border: "1px solid #333333",
    boxShadow: "2px 2px 10px #000000ba",
    fontSize: "var(--card-font-size)",
    margin: "2rem 5rem",
    // boxShadow: "7px 7px 10px #000000ba, -8px -8px 10px #e8e8e808",
    boxShadow:
      "inset 9px 9px 13px rgb(2 2 2 / 70%), inset -7px -7px 13px #ffffff0a",

    border: "1px solid #ce920c7a",
    transition: "all 200ms ease",

    "&:hover": {
      // transform: "scale(1.03)",
      filter: "grayscale(0)",
    },
    cursor: "default",
  },

  stepBg: {
    background: "transparent",
    border: "none",
    boxShadow: "none",
    // filter: "grayscale(3)",
  },
  cardContent: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  media: {
    height: 60,
    objectFit: "contain",
  },
  title: {
    fontFamily: "var(--font1)",
    fontSize: "1.8em",
    color: "#ce920d",
    marginTop: "2rem",
  },
  step: {
    fontFamily: "var(--font1)",
    fontSize: "6em",
    color: "#ce920d",
  },
  content: {
    fontFamily: "var(--font2)",
    fontSize: "1.2em",
    color: "white",
  },
  stepContent: {
    fontFamily: "var(--font2)",
    fontSize: "1.75em",
    color: "white",
  },
  actions: {
    alignItems: "center",
    justifyContent: "center",
  },
  action: {
    fontFamily: "var(--font2)",
    textAlign: "center",
    color: "#5d8bf5",
    fontSize: 10,
  },
});

export default function MediaCard({
  image,
  step,
  title,
  content,
  action,
  links,
  handleAction,
}) {
  const classes = useStyles();

  return (
    <Card className={[classes.root, step ? classes.stepBg : null, "c-card"]}>
      {image && (
        <CardMedia
          component="img"
          height="50"
          className={classes.media}
          image={image}
        />
      )}
      <CardContent className={classes.cardContent}>
        {step ? (
          <>
            <Typography
              gutterBottom
              variant="h1"
              component="h1"
              className={classes.step}
            >
              {step}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.stepContent}
            >
              {content}
            </Typography>
          </>
        ) : (
          <>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.content}
            >
              {content}
            </Typography>
          </>
        )}
      </CardContent>
      {links && (
        <CardActions className={classes.actions}>
          {links.map((link) => (
            <Button size="small" color="primary">
              <Link href={link.href} target="_blank" underline="none">
                <Typography className={classes.action}>{link.text}</Typography>
              </Link>
            </Button>
          ))}
        </CardActions>
      )}

      {action && (
        <CardActions className={classes.actions}>
          <Button onClick={handleAction}>
            <Typography className={classes.action}>{action}</Typography>
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
