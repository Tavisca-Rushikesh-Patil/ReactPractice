//Code Example (Real-World Use Case): Theme Switcher App
import React, { useState, useContext, createContext } from 'react';

// 1. Create a Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // 3. Access the context
  return (
    <nav style={{
      background: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      padding: '10px',
    }}>
      <h1>Theme Switcher</h1>
      <button onClick={toggleTheme}>Switch Theme</button>
    </nav>
  );
};

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{
      background: theme === 'light' ? '#f9f9f9' : '#121212',
      color: theme === 'light' ? '#000' : '#fff',
      padding: '20px',
    }}>
      <h2>Welcome Home!</h2>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
};

export default App;