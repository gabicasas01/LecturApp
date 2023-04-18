import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store.js';
import HomePage from './pages/HomePage.jsx'


function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  )
}

export default App
