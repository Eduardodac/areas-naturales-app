import { AppBar } from '@mui/material';
import React from 'react';
import Navbar from './bar/Navbar';

const Bar = () => {
    return (
        <AppBar position = "static">
            <Navbar/>
        </AppBar>
    );
};

export default Bar;