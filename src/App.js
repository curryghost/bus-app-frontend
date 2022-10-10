import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { theme } from './theme';
import { Navbar } from './comps/navbar/Navbar'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
