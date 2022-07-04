import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => {
  return (
    <React.Fragment>
      <h1>Home page</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/greeting" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
