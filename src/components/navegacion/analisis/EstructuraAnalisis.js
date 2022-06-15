import { Avatar, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


const EstructuraAnalisis = (props) => {

    const heigthVariable = "500px"
    return (
        <Grid container justifyContent = "space-around"  >
            <Grid item xs={12} md={5} sx={{textAlign: "center", height : heigthVariable, padding: "20px"}} >
                <Avatar src= {props.mapa} variant= "square" sx = {{width: "100%", height: "100%"}}/>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: "flex", height : heigthVariable, padding: "20px"}} direction ="column" alignItems="center">
                <Typography sx= {{alignSelf: "flex-start"}} variant = "h6">Total de comentarios obtenidos: </Typography>
                <Typography sx= {{alignSelf: "flex-start", margin : "10px 10px"}} variant = "body1">Youtube 430 </Typography>
                <Avatar src= {props.pastel} variant= "square" sx = {{width: "75%", height: "60%"}}/>
                <Box boxShadow={3} sx={{marginTop: "10px", padding:"10px 10px 10px 10px"}}>
                     <Typography variant="body1">Análisis de la gráfica</Typography>
                </Box>

            </Grid>
            <Grid item xs={12} md={3} sx={{ display: "flex", height : heigthVariable, padding: "20px"}} direction ="column" alignItems="center">
                <Typography  variant = "h6">Periodo: 2020 </Typography>
                <Typography sx= {{alignSelf: "flex-start", margin : "10px 10px", padding:"0 20px 0 30px", textAlign:"center"}} variant = "body1">Palabras frecuentes identificadas en comentarios negativos </Typography>
                <Avatar src= {props.nubePalabras} variant= "square" sx = {{width: "75%", height: "60%"}}/>
                
            </Grid>
        </Grid>
    );
};

export default EstructuraAnalisis;