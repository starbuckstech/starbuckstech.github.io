import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AptabaseProvider } from "@aptabase/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AptabaseProvider 
    appKey= "A-SH-3492479320"
    options={{
      host: "http://a.starbuckstech.com"
    }}>
      <App />
    </AptabaseProvider>
  </StrictMode>
);
