import React, { useState } from 'react';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Password Checker</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Welcome to Password Strength Checker</h1>
      <p>Ensure your passwords are strong and secured </p>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: k.vaishnav.ae@gmail.com</p>
          <p>Phone: 8089055382</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Password Strength Checker. All rights reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState({
    score: 0,
    message: '',
    color: '#ccc'
  });

  const checkStrength = (pass) => {
    let score = 0;
    
    if (pass.length >= 8) score += 1;
    if (pass.length >= 12) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    let message = '';
    let color = '';
    
    switch(score) {
      case 0:
        message = 'Very Weak';
        color = '#ff4444';
        break;
      case 1:
        message = 'Weak';
        color = '#ffaa44';
        break;
      case 2:
        message = 'Fair';
        color = '#ffff44';
        break;
      case 3:
        message = 'Good';
        color = '#44ff44';
        break;
      case 4:
      case 5:
        message = 'Strong';
        color = '#44ff88';
        break;
      default:
        message = 'Enter Password';
        color = '#ccc';
    }

    setStrength({ score, message, color });
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkStrength(newPassword);
  };

  return (
    <div className="App">
      <Navbar />
      <Header />
      <main className="main-content">
        <div className="password-checker-container">
          <div className="password-checker">
            <div className="checker-header">
              <div className="lock-icon">🔒</div>
              <h2>Password Strength Test</h2>
              <p className="subtitle">Create a secure password that meets all requirements</p>
            </div>
            
            <div className="input-section">
              <label htmlFor="password">Enter Password</label>
              <div className="input-container">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Type your password here"
                  className="password-input"
                />
              </div>
            </div>

            <div className="strength-section">
              <div className="strength-label">
                <span>Strength:</span>
                <span className="strength-text" style={{ color: strength.color }}>
                  {strength.message}
                </span>
              </div>
              <div className="strength-meter">
                <div 
                  className="strength-bar"
                  style={{
                    width: `${(strength.score / 5) * 100}%`,
                    backgroundColor: strength.color,
                  }}
                ></div>
              </div>
            </div>

            <div className="requirements-section">
              <h3>Password Requirements</h3>
              <div className="requirements-grid">
                <div className="requirement-item">
                  <div className="requirement-icon">📏</div>
                  <div className="requirement-text">
                    <h4>Length</h4>
                    <p>Minimum 8 characters</p>
                  </div>
                </div>
                <div className="requirement-item">
                  <div className="requirement-icon">🔠</div>
                  <div className="requirement-text">
                    <h4>Uppercase</h4>
                    <p>At least one capital letter</p>
                  </div>
                </div>
                <div className="requirement-item">
                  <div className="requirement-icon">123</div>
                  <div className="requirement-text">
                    <h4>Numbers</h4>
                    <p>At least one number</p>
                  </div>
                </div>
                <div className="requirement-item">
                  <div className="requirement-icon">#@!</div>
                  <div className="requirement-text">
                    <h4>Special Characters</h4>
                    <p>At least one special character</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tips-section">
              <h3>Password Tips</h3>
              <ul className="tips-list">
                <li>Avoid using personal information</li>
                <li>Don't use common word patterns</li>
                <li>Use a unique password for each account</li>
                <li>Consider using a password manager</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
