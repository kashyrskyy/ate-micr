// App.tsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useUser } from './contexts/UserContext';
import Footer from './components/Dashboard/Footer'; // Import the Footer component

import CircularProgress from '@mui/material/CircularProgress';

import SelectionPage from './components/SelectionPage';
import AddMaterialForm from './components/Supplemental/AddMaterialForm'; // Import AddMaterialForm
import EditMaterialForm from './components/Supplemental/EditMaterialForm'; // Import AddMaterialForm
import ViewMaterial from './components/Supplemental/ViewMaterial'; // Import AddMaterialForm
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute
import AddMessage from './components/Messages/AddMessage';
import EditMessage from './components/Messages/EditMessage';

// Lazy loading components
const Login = lazy(() => import('./components/Login/index'));
const Dashboard = lazy(() => import('./components/Dashboard/index'));
const SupplementalMaterials = lazy(() => import('./components/Supplemental/SupplementalMaterials'));

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
    <Router basename={import.meta.env.VITE_DEPLOY_ENV === 'github' ? '/ate-micr' : '/'}>
      <div className="content">
        <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><CircularProgress /></div>}>
          <Routes>
            <Route path="/" element={userDetails ? <SelectionPage /> : <Login />} />
            <Route path="/laboratory-notebooks" element={<PrivateRoute element={Dashboard} />} />
            <Route path="/supplemental-materials" element={<PrivateRoute element={SupplementalMaterials} />} />
            <Route path="/add-material" element={<PrivateRoute element={AddMaterialForm} />} />
            <Route path="/edit-material/:id" element={<EditMaterialForm />} />
            <Route path="/view-material/:id" element={<ViewMaterial />} />
            <Route path="/add-message" element={<PrivateRoute element={AddMessage} />} />
            <Route path="/edit-message/:id" element={<PrivateRoute element={EditMessage} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
};

export default App;