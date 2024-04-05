// App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useUser } from './contexts/UserContext';

// Lazy loading components
const Login = lazy(() => import('./components/Login/index.jsx'));
const Dashboard = lazy(() => import('./components/Dashboard/index.jsx'));

import CircularProgress from '@mui/material/CircularProgress';

const App = () => {
  const { userDetails, loading } = useUser();

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {/* Using Material-UI CircularProgress component */}
        <CircularProgress />
      </div>
    );
  }

  console.log("App loaded")

  return (
    <Router basename="/ate-micr">
      <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><CircularProgress /></div>}>
        <Routes>
          {userDetails ? (
            <Route path="/" element={<Dashboard />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;