import React from 'react';
import Swal from 'sweetalert2';
import { getAuth, signOut } from 'firebase/auth';

const Logout = () => {
  const handleLogout = () => {
    const auth = getAuth();
    
    Swal.fire({
      icon: 'question',
      title: 'Logging Out',
      text: 'Are you sure you want to log out?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then(result => {
      if (result.isConfirmed) {
        signOut(auth).then(() => {
          // After successfully signing out, Firebase's onAuthStateChanged 
          // listener (set up in your main App component) will automatically 
          // handle the change in authentication state.
          Swal.fire('Logged out!', '', 'success');
        }).catch((error) => {
          // Handle errors here
          console.error('Sign out error', error);
        });
      }
    });
  };

  return (
    <button style={{ marginLeft: '12px' }} className="muted-button" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;