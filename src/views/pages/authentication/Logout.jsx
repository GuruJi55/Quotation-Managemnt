import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const confirmLogout = window.confirm('Are you sure you want to exit?');

    if (confirmLogout) {
      // If you're using a Vite base path like /free, use absolute path
      navigate('/pages/login', { replace: true }); // 👈 this ensures absolute navigation
    } else {
      navigate(-1); // Go back to previous page
    }
  }, [navigate]);

  return null;
}
