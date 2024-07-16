// App.tsx
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Use HashRouter
import { useUser } from './contexts/UserContext';

// Importing MUI components
import { ThemeProvider, CssBaseline, CircularProgress, createTheme } from '@mui/material';

// Import custom components
import DeviceVersion from './components/DeviceVersion';
import Footer from './components/Dashboard/Footer';
import SelectionPage from './components/SelectionPage';
import AddMaterialForm from './components/Supplemental/AddMaterialForm';
import EditMaterialForm from './components/Supplemental/EditMaterialForm';
import ViewMaterial from './components/Supplemental/ViewMaterial';
import PrivateRoute from './components/PrivateRoute';
import AddMessage from './components/Messages/AddMessage';
import EditMessage from './components/Messages/EditMessage';
import UserManagement from './components/UserPermissions/UserManagement';

// Lazy loading components
const Login = lazy(() => import('./components/Login/index'));
const Dashboard = lazy(() => import('./components/Dashboard/index'));
const SupplementalMaterials = lazy(() => import('./components/Supplemental/SupplementalMaterials'));

const App = () => {
  const { userDetails, loading, isSuperAdmin } = useUser();

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {/* Using Material-UI CircularProgress component */}
        <CircularProgress />
      </div>
    );
  }

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  console.log("App loaded")

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="content">
          <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><CircularProgress /></div>}>
            <Routes>
              <Route path="/" element={userDetails ? <SelectionPage /> : <Login />} />
              <Route path="/laboratory-notebooks" element={<PrivateRoute element={Dashboard} />} />
              <Route path="/supplemental-materials" element={<PrivateRoute element={SupplementalMaterials} />} />
              <Route path="/add-material" element={<PrivateRoute element={AddMaterialForm} />} />
              <Route path="/edit-material/:id" element={<PrivateRoute element={EditMaterialForm} />} />
              <Route path="/view-material/:id" element={<PrivateRoute element={ViewMaterial} />} />
              <Route path="/add-message" element={<PrivateRoute element={AddMessage} />} />
              <Route path="/edit-message/:id" element={<PrivateRoute element={EditMessage} />} />
              {isSuperAdmin && <Route path="/user-management" element={<PrivateRoute element={UserManagement} />} />}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
        <DeviceVersion />
      </Router>
    </ThemeProvider>
  );
};

export default App;