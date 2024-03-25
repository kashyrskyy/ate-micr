// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useManageUserDocument from './hooks/useManageUserDocument'; // Adjust the path as necessary

import Login from './components/Login/index.jsx';
import Dashboard from './components/Dashboard/index.jsx';

const App = () => {
  const { userDetails, loading } = useManageUserDocument();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router basename="/ate-micr">
      <Routes>
        {userDetails ? (
          <Route path="/" element={<Dashboard />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;



