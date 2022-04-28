import React, { useEffect, useState } from "react";
import { AppBar, Typography, Toolbar, Button, Avatar } from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import memories from "../../images/memories.png";
import { Link } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("profile");
    dispatch({ type: "LOGOUT" });
    navigate.push("/");
  };

  console.log(user);

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [user]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          href="/"
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
          <Avatar
            className={classes.purple}
            alt={user.result.name}
            src={user.result.imageUrl}
          >
            {user.result.name.charAt(0)}
          </Avatar>
          <Typography className={classes.userName} variant="h6">
            {user.result.name}
          </Typography>
          <Button
            variant="contained"
            className={classes.logout}
            color="secondary"
            onClick={logout}
          >
            Logout
          </Button>
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
