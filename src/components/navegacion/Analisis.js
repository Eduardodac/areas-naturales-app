import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import EstructuraAnalisis from "./analisis/EstructuraAnalisis";
import { Box } from "@mui/system";
import mapa1 from "../../assets/analisis/Mapa1.png";
import mapa2 from "../../assets/analisis/Mapa2.png";
import pastel1 from "../../assets/analisis/pastel1.png";
import pastel2 from "../../assets/analisis/pastel2.png";
import nubePalabras1 from "../../assets/analisis/nubePalabras1.png";
import nubePalabras2 from "../../assets/analisis/nubePalabras2.png";

export default function Analisis() {
  const [analisis, setAnalisis] = useState(10);
  const [mapa, setMapa] = useState(mapa1);
  const [pastel, setPastel] = useState(pastel1);
  const [nubePalabras, setNubePalabras] = useState(nubePalabras1);

  useEffect(() => {
    if (analisis === 10) {
      setMapa(mapa1);
      setPastel(pastel1);
      setNubePalabras(nubePalabras1);
    } else {
      setMapa(mapa2);
      setPastel(pastel2);
      setNubePalabras(nubePalabras2);
    }
  }, [analisis]);

  const cambiarAnalisis = (event) => {
    setAnalisis(event.target.value);
  };

  return (
    <Box sx={{ margin: "10px" }}>
      <FormControl sx={{ width: "50%" }}>
        <InputLabel id="demo-simple-select-label">Análisis</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={analisis}
          label="Analisis"
          onChange={cambiarAnalisis}
        >
          <MenuItem value={10}>Análisis 1</MenuItem>
          <MenuItem value={20}>Análisis 2</MenuItem>
        </Select>
      </FormControl>
      <EstructuraAnalisis mapa={mapa} pastel={pastel} nubePalabras={nubePalabras}></EstructuraAnalisis>
    </Box>
  );
}
