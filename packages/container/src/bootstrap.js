import React from 'react';
import { createRoot } from 'react-dom/client';
import { mount as MarketingMount } from 'marketing/MarketingApp'
import MarketingApp from './components/marketing-app';
console.log('Home here')
console.log(MarketingMount)
// Mount function to start up the app
// If in development, mount immediately

const App = () => {
  return (
    <div>
      Home is better
      <hr />
      <MarketingApp />
    </div>
  )
}

const containerMount = (devRoot) => {
  devRoot.render(
      <App />
  );
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = createRoot(
    document.getElementById('root')
  );

  if (devRoot) {
    containerMount(devRoot)
  }
}