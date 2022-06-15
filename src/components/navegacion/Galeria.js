import React, { useState, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container, Grid} from '@mui/material';
import Galeria1 from "./galerias/Galeria1";
import itemData1 from "./galerias/ListaGaleria1";
import itemData2 from "./galerias/ListaGaleria2";


export default function BasicSelect() {
  const [Ruta, setRuta] = useState(10);
  const [itemDataList, setItemDataList] = useState(itemData1)
 
  useEffect(()=>{
    if (Ruta === 10){
        setItemDataList(itemData1);
    }else {
        setItemDataList(itemData2)
    }
  }, [Ruta])

  const cambiarRuta = (event) => {
    setRuta(event.target.value);
  };

  return (
    <Container  sx={{ minWidth: 120, margin: "20px 20px" }}>
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
        </Select>
      </FormControl>
      <Grid container justifyContent="center">
        <Galeria1 itemData={itemDataList}></Galeria1>
      </Grid>
    </Container>
  );
}

