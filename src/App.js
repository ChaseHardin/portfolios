import React from 'react';
import { AppProvider } from './app-context';
import { MainContent } from './main-content';

function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

export default App;
