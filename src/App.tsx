import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './routes';

import { GlobalStyled } from './styles/global';

export function App(){
  return (
    <>
    <GlobalStyled />
    <Router>
      <Routes />
    </Router>
  </>
  )
}

