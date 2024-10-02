import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { AppBar } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function App() {

  return (
   
    <div className="App">
      <AppBar position="static" color="inherit">
      <Toolbar variant="dense" color="dark">
      <Typography variant="h6" color="black" component="div">
      Welcome to React Router
      </Typography>
    </Toolbar>
    </AppBar>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <Outlet />

    </div>
  );
}

export default App