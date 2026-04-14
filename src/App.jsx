import React, { useState } from 'react';
import TopBar from './components/TopBar';
import BreakingTicker from './components/BreakingTicker';
import Masthead from './components/Masthead';
import NavBar from './components/NavBar';
import FrontPage from './pages/FrontPage';
import CareerMarkets from './pages/CareerMarkets';
import CrosswordPage from './pages/CrosswordPage';
import WordlePage from './pages/WordlePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('front');

  const renderPage = () => {
    switch (activePage) {
      case 'front':     return <FrontPage />;
      case 'career':    return <CareerMarkets />;
      case 'crossword': return <CrosswordPage />;
      case 'wordle':    return <WordlePage />;
      case 'contact':   return <ContactPage />;
      default:          return <FrontPage />;
    }
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <TopBar />
      <BreakingTicker />
      <Masthead />
      <NavBar activePage={activePage} setActivePage={setActivePage} />
      <main>{renderPage()}</main>
    </div>
  );
}
