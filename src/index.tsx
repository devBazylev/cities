import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/main/main';

const Setting = {
  CARDS_COUNT: 5,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Main
      cardsCount = {Setting.CARDS_COUNT}
    />
  </React.StrictMode>,
);
