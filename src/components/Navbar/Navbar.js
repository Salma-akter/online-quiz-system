import React from 'react';
import { AppBar, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Logo from '../../assets/ideas.png';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
 const {user, logout} = useAuth();
console.log(user)
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img component={Link} to="/" src={Logo} alt="icon" height="45px" />
      </Link>
      <Toolbar className={classes.toolbar}>
    
        {user?.email ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.displayName} src={user?.photoURL}>{user?.displayName.charAt(0)}</Avatar>
            <Button component={Link} to="/dashboard" variant="contained" color="primary">Dashboard</Button>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/login" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;