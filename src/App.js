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
import EstructuraAnalisis from './components/navegacion/analisis/EstructuraAnalisis';

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
              <Route path="/ana/analisis" element={<EstructuraAnalisis />} />
            </Routes>
          </Grid>
        </ThemProvider>

      </Router>

    </React.Fragment>
  );
}

export default App;
