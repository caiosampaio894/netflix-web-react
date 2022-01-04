import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './screens/login/login.screen';
import { Route, Routes, useNavigate } from 'react-router';
import { LoginPath } from './screens/login/login.types';
import { ThemeProvider } from 'styled-components';
import theme from './themes/main/theme';
import { GlobalStyle } from './themes/main/global-style';
import { HomePath } from './screens/home/home.types';
import UseGuard from './components/routers/user.guard/user.guard.component';
import Home from './screens/home/home.screen';
import {Provider} from 'react-redux'
import store from './store/store/store';
function App() {

  return (
    <Provider store={store}> 
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
          <Routes>
              <Route path={LoginPath} element={<Login/>}></Route>
              <Route path={HomePath} element={<UseGuard><Home /></UseGuard>}/>
          </Routes>
        </ThemeProvider>
    </Provider>     
  );
}

export default App;
