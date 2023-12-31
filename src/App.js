import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useMemo } from 'react';
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import HomePage from './scenes/homePage';
import LoginPage from './scenes/loginPage';
import ProfilePage from './scenes/profilePage';

function App() {
  const mode = useSelector((state)=>state.mode);
  const theme = useMemo(()=> createTheme(themeSettings(mode)),[mode]);
  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes> 
            <Route path='/home' element={<HomePage />}/>
            <Route path='/' element={<LoginPage />}/>  
            <Route path='/profile/:userId' element={<ProfilePage />}/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
