import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { theme } from './theme';
import { Navbar } from './comps/navbar/Navbar'
import { Home } from './page/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initStateAsync } from './store/busStopSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initStateAsync())
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
