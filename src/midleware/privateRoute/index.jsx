import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthMiddleware = ({ children }) => {
  const [loading, setLoading] = useState(true); // Menambahkan state loading
  const navigate = useNavigate();

  useEffect(() => {
    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');

    // Mengecek jika tidak ada username atau password di sessionStorage
    if (!username || !password) {
      // Redirect jika tidak ada sessionStorage
      navigate('/login');
    } else {
      // Set loading ke false jika pengecekan selesai
      setLoading(false);
    }
  }, [navigate]);

  // Jika masih loading, tampilkan loading spinner atau elemen apapun
  if (loading) {
    return <section>sek yo...</section>; // Bisa diganti dengan spinner atau komponen loading
  }

  return <>{children}</>;
};

export default AuthMiddleware;
