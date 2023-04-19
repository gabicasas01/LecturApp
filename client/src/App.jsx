import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import BackgroundTemplate from './layouts/BackgroundTemplate.jsx';
import HomeComponent from './components/HomeComponent.jsx';
import CuestionaryComponent from './components/CuestionaryComponent.jsx'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<BackgroundTemplate Component={HomeComponent}/>}></Route>
          <Route exact path="/cuestionary" element={<BackgroundTemplate Component={CuestionaryComponent}/>} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
