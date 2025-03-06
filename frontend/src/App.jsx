import { Routes, Route, Navigate, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import ShoppingList from './pages/ShoppingList';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login (dummy authentication for now)
  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/');
  };

  // Function to handle sign-out
  const handleSignOut = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <div>
      {/* Show navbar only if user is authenticated */}
      {isAuthenticated && location.pathname !== "/login" && location.pathname !== "/signup" && (
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/shopping-list">Shopping List</Link>
          <button className="signout-btn" onClick={handleSignOut}>Sign Out</button>
        </nav>
      )}

      <div className="container">
        <Routes>
          {/* Authentication Routes */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          {isAuthenticated ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/shopping-list" element={<ShoppingList />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
