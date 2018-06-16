import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Home from '../home'
import Header from '../../components/header'


const App = () => (
  <div>
  <Header/>
    <main>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </main>
  </div>
)
export default App