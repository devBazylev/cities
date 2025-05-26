import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { cards } from './mock/offer';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element with id "root" not found');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App cards={cards} />
  </React.StrictMode>,
);
