import { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { isAuthenticated, getCurrentUserEmail } from './api/auth';

interface User {
  email: string;
  name: string;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is already authenticated on mount
    const checkAuth = async () => {
      const authenticated = isAuthenticated();
      if (authenticated) {
        const email = getCurrentUserEmail();
        if (email) {
          setUser({
            email,
            name: email.split('@')[0], // Extract name from email
          });
          setIsLoggedIn(true);
        }
      }
    };

    checkAuth();
  }, []);

  const handleLoginSuccess = (loggedInUser: User) => {
    setUser(loggedInUser);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn && user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
