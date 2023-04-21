import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import BackgroundTemplate from './layouts/BackgroundTemplate.jsx';
import HomeComponent from './components/HomeComponent.jsx';
import CuestionaryInit from './components/CuestionaryInit.jsx'
import CuestionaryGenres from './components/CuestionaryGenres.jsx'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<BackgroundTemplate Component={HomeComponent}/>}></Route>
          <Route exact path="/cuestionaryInit" element={<BackgroundTemplate Component={CuestionaryInit}/>} />
          <Route exact path="/cuestionaryGenres" element={<BackgroundTemplate Component={CuestionaryGenres}/>} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
