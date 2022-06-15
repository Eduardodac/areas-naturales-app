import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Avatar, Container, Grid, Typography } from "@mui/material";


export default function Rutas() {
  
  const [Ruta, setRuta] = useState(10);
  const [rutaImg, setRutaImg] = useState("/static/media/ruta_panam.e2479e384efff89af173.jpg");

  useEffect(() => {
    //console.log(ruta_mexpue);
    if (Ruta === 10) {
      setRutaImg("/static/media/ruta_panam.e2479e384efff89af173.jpg");
    } else if (Ruta === 20) {
      setRutaImg("/static/media/ruta_baltica.afe84d63fd8510c48c9c.jpg");
    } else {
      setRutaImg("/static/media/ruta_mexpue.2556d89c629e1f3c9547.jpg");
    }
  }, [Ruta]);

  const cambiarRuta = (event) => {
    setRuta(event.target.value);
  };

  return (
    <Container
      component="main"
      
      sx={{ minWidth: 120, marginTop: "20px"}}
    >
      <Grid container sx={{padding : "10px"}}>
        <FormControl sx={{width : "50%"}}>
          <InputLabel id="demo-simple-select-label">Rutas</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Ruta}
            label="Rutas"
            onChange={cambiarRuta}
          >
            <MenuItem value={10}>Ruta Panamericana</MenuItem>
            <MenuItem value={20}>Ruta Báltica</MenuItem>
            <MenuItem value={30}>Ruta México Puebla</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Typography>{Ruta}</Typography>
      <Typography>{rutaImg}</Typography>
    </Container>
  );
}
