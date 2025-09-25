import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Staking from './pages/Staking';
import Swap from './pages/Swap';
import Vote from './pages/Vote';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Staking />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/vote" element={<Vote />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;