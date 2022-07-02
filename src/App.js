import logo from './logo.svg';
import {Weather} from "./components"
import { ThemeProvider } from '@mui/material/styles';
import {Theme} from "./Theme"
import './App.css';

function App() {
  return (
<ThemeProvider theme={Theme}>
    <Weather />
    </ThemeProvider>

  );
}

export default App;
