import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import WelcomePage from './components/WelcomePage';
import AboutMe from './components/AboutMe';

function App() {
  console.log('Base URL:', process.env.PUBLIC_URL);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Router>
    // <div className="App">
    //   <AboutMe />
    // </div>
  );
}

export default App;
