import { Avatar, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import mapa from "../../assets/inicio/mapa.jpg"
import AvatarH from "../../assets/inicio/avatarH.jpg"
import AvatarM from "../../assets/inicio/avatarM.jpg"


const Inicio = () => {
    return (
        <Container component="main" >
            <Box /*style={{backgroundColor :"orange"}}*/ sx={{paddingTop:"10px"}} >
                <Typography component="h1" variant="h5">
                    Nuestro Proyecto
                </Typography>
                <Grid container justifyContent="flex-start" >
                    <Grid item xs={12} md={6} sx={{/*backgroundColor :"blue",*/ padding : "10px"}}>
                        <Typography component ="h4" variant ="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris in varius orci. Morbi condimentum scelerisque mattis. 
                            Nulla posuere egestas erat, in rhoncus libero. Etiam vehicula 
                            luctus sapien maximus sodales. Integer in eleifend augue. 
                            Nulla ornare nisi quis dui gravida gravida. Maecenas vehicula 
                            lorem efficitur lacus dignissim scelerisque. Suspendisse vitae 
                            lacus tempus, ultrices mauris ac, luctus dui. Donec auctor mi 
                            at fermentum accumsan.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{/*backgroundColor :"red",*/ marginLeft:"20px"}} justifyContent="Center">
                        <img src= {mapa} width="100%" height="100%"/>
                    </Grid>
                </Grid>
            </Box>
            <Box /*style={{backgroundColor :"orange"}}*/ sx={{paddingTop:"10px"}} >
                <Typography component="h1" variant="h5">
                    Investigadores
                </Typography>
                <Grid container   >
                    <Grid container item xs={12} md={10} sx={{/*backgroundColor :"blue",*/ padding : "10px"}} direction="row">
                        <Avatar src={AvatarM} sx={{ width: 200, height: 200 }}/>
                        <Avatar src={AvatarH} sx={{ width: 200, height: 200 }}/>
                        <Avatar src={AvatarM} sx={{ width: 200, height: 200 }}/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Inicio;