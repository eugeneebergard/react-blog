import './App.css';
import React from 'react';
import Routes from './routes';
import Header from './components/containers/Header';
import Footer from './components/containers/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main role="main" className="main">
        <Routes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
