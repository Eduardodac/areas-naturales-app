import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container, Typography } from '@mui/material';

export default function BasicSelect() {
  const [Ruta, setRuta] = useState(10);
  const [rutaImg, setRutaImg] = useState("galería 1")

  useEffect(()=>{
    if (Ruta == 10){
        setRutaImg("galería 1");
    }else if (Ruta == 20) {
        setRutaImg("galería 2");
    }else {
        setRutaImg("galería 3")
    }
  }, [Ruta])

  const cambiarRuta = (event) => {
    setRuta(event.target.value);
  };

  return (
    <Box  sx={{ minWidth: 120, marginTop: "20px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Rutas</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Ruta}
          label="Rutas"
          onChange={cambiarRuta}
        >
          <MenuItem value={10}>Galería 1</MenuItem>
          <MenuItem value={20}>Galería 2</MenuItem>
          <MenuItem value={30}>Galería 3</MenuItem>
        </Select>
      </FormControl>
      <Typography>
        Ruta: {Ruta}
      </Typography>
      <Typography>
        IMG: {rutaImg}
      </Typography>
    </Box>
  );
}