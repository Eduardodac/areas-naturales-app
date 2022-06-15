import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ThemProvider from "@mui/material/styles/ThemeProvider"
import { Grid } from "@mui/material"
import Inicio from './components/navegacion/Inicio';
import Analisis from './components/navegacion/Analisis';
import Galeria from './components/navegacion/Galeria';
import Rutas from './components/navegacion/Rutas';
import theme from './theme/theme';
import Bar from './components/navegacion/Bar';
import Galeria1 from './components/navegacion/galerias/Galeria1';

function App() {
  return ( 
    <React.Fragment>
      <Router>
        <ThemProvider theme = {theme}>
          {<Bar />}
          <Grid container>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/Analisis" element={<Analisis />} />
              <Route path="/Galerias" element={<Galeria />} />
              <Route path="/Rutas" element={<Rutas />} />
              <Route path="/Galeria1" element={<Galeria1 />} />
            </Routes>
          </Grid>
        </ThemProvider>

      </Router>

    </React.Fragment>
  );
}

export default App;
