import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import useStyles from "./styles";
import memories from "../../images/memories.png";
import { Link } from "@material-ui/core";

const Navbar = () => {
  const classes = useStyles();
  const user = null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Our Memories
        </Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </div>
      <Toolbar className={classes.Toolbar}></Toolbar>
      {user ? (
        <div className={classes.profile}>
          <avatar
            classname={classes.purple}
            alt={user.result.name}
            src={user.result.imageUrl}
          >
            {user.result.name.chartArt(0)}
          </avatar>

          <Typography className={classes.userName} variant="h6">
            {" "}
            {user.result.name}
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
            >
              {" "}
              Logout
            </Button>
          </Typography>
        </div>
      ) : (
        <Button
          component={Link}
          href="/auth"
          variant="contained"
          color="primary"
        >
          {" "}
          Sign in
        </Button>
      )}
    </AppBar>
  );
};

export default Navbar;
