import React, { useState } from 'react';
import PrivateRoutes from './PrivateRoutes';
import Login from './components/Login';
import HomePage from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import styles from './components/NavigationBar.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };


  return (

    <div className='App'>
      <Router>
        <Routes>
          <Route element = {<PrivateRoutes />}>
            <Route className={styles.item} element={<HomePage />} path="/" exact/>
            <Route className={styles.item} element={<AboutUs />} path="/about"/>
            <Route className={styles.item} element={<ContactUs />} path="/contact"/>
          </Route>
          <Route element={<Login onLogin={handleLogin} />} path='/login'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
