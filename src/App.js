import React from 'react';
import Counter from './pages/Counter';
import Search from './pages/Search';
import Checklist from './pages/Checklist';
import Grid from '@mui/material/Grid';
import './App.css';

function App() {
  return (
    <div className="App">

      <Grid container spacing={2}>
        <Grid item xs={4}>
         <Counter />
        </Grid>
        <Grid item xs={4}>
        <Search/>
        </Grid>
        <Grid item xs={4}>
         <Checklist/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
