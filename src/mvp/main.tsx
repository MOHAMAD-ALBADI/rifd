import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/tajawal/400.css';
import '@fontsource/tajawal/700.css';
import '@fontsource/tajawal/800.css';
import { RifdApp } from './RifdApp';
import { useRifdStore } from './store';

function Standalone() {
  const store = useRifdStore({ persist: true });
  return <RifdApp store={store} />;
}

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Standalone />
  </React.StrictMode>,
);
