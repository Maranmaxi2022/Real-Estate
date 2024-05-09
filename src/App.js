import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/login/LogIn';
import { auth } from './configuration/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Broker from "./pages/broker/Broker";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/broker" element={<Broker />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
