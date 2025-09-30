import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Staking from './pages/Staking';
import Swap from './pages/Swap';
import Vote from './pages/Vote';
import Delegates from './pages/Delegates';
import ProposalDetails from './pages/ProposalDetails';
import VotingPage from './pages/VotingPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Staking />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/vote/delegates" element={<Delegates />} />
          <Route path="/delegates" element={<Delegates />} />
          <Route path="/proposal/:id" element={<ProposalDetails />} />
          <Route path="/proposal/:id/vote" element={<VotingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;