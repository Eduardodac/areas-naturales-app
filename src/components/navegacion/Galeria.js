import React, { useState, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container, Grid} from '@mui/material';
import EstructuraGaleria from "./galerias/EstructuraGaleria";
import itemData1 from "./galerias/ListaGaleria1";
import itemData2 from "./galerias/ListaGaleria2";


export default function BasicSelect() {
  const [analisis, setAnalisis] = useState(10);
  const [itemDataList, setItemDataList] = useState(itemData1)
 
  useEffect(()=>{
    if (analisis === 10){
        setItemDataList(itemData1);
    }else {
        setItemDataList(itemData2)
    }
  }, [analisis])

  const cambiarGaleria = (event) => {
    setAnalisis(event.target.value);
  };

  return (
    <Container  sx={{ minWidth: 120, margin: "20px 20px" }}>
      <FormControl  sx={{width : "50%"}}>
        <InputLabel id="demo-simple-select-label">Galeria</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={analisis}
          label="Rutas"
          onChange={cambiarGaleria}
        >
          <MenuItem value={10}>Galería 1</MenuItem>
          <MenuItem value={20}>Galería 2</MenuItem>
        </Select>
      </FormControl>
      <Grid container justifyContent="center">
        <EstructuraGaleria itemData={itemDataList}></EstructuraGaleria>
      </Grid>
    </Container>
  );
}

