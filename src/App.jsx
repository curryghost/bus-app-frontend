import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { theme } from './theme';
import { Navbar } from './comps/Navbar/Navbar'
import { Home } from './pages/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initStateAsync } from './store/busStopSlice';
import { getBusStops } from './api/api';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('busStop') == null || undefined) {
      getBusStops()
        .then(res => {
          localStorage.setItem('busStop', JSON.stringify(res.data))
          dispatch(initStateAsync(JSON.parse(localStorage.getItem('busStop'))))
        })
    } else {
      dispatch(initStateAsync(JSON.parse(localStorage.getItem('busStop'))))
    }
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
