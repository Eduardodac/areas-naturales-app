import { Avatar, Button, Grid, Stack, Toolbar } from '@mui/material';
import React from 'react';
import theme from '../../../theme/theme';
import { styled } from '@mui/system';
import lorem1 from "../../../assets/Lorem1.png"
import lorem2 from "../../../assets/lorem2.jpg"
import { Link } from 'react-router-dom';

const Escritorio = styled(Stack)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
}));

const Navbar = () => {
    return (
        <React.Fragment>
            <Toolbar>
                <Grid container sx = {{flexGrow : 1}} component = "div">
                    <Button component ={Link} to= "/" color="inherit">
                        Inicio
                    </Button>
                    <Button color="inherit" component ={Link} to= "/Analisis">
                        Análisis
                    </Button>
                    <Button color="inherit" component ={Link} to= "/Rutas">
                        Rutas
                    </Button>
                    <Button color="inherit" component ={Link} to= "/Galerias">
                        Galerías
                    </Button>
                </Grid>
                <Escritorio direction ="row">
                    <Avatar src={lorem1} variant ="square"/>
                    <Avatar src={lorem2} variant ="square"/>
                </Escritorio>
            </Toolbar>
        </React.Fragment>
    );
};

export default Navbar;