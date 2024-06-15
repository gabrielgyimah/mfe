import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pricing from './pages/pricing';
import Home from './pages/home';
console.log('Marketing here');

// Mount function to start up the app
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const mount = (devRoot) => {
  if (devRoot) {
    createRoot(devRoot).render(<App />);
  } else {
    console.error('Target container is not a DOM element.');
  }
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
