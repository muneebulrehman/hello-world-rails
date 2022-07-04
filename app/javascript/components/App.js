import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';
import store from '../redux/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <h1>Home page</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/greeting" element={<Greeting />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </Provider>
  );
};

export default App;
