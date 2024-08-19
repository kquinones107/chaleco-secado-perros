import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faQuestionCircle, faTree, faChartBar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Home from './components/Home';
import Problema from './components/Problema';
import Arboles from './components/Arboles';
import EstudioMercado from './components/EstudioMercado';
import Localizacion from './components/Localizacion';

function App() {
  return (
      <Router>
          <div className="App">
              <nav>
                  <ul>
                      <li>
                          <Link to="/">
                          <FontAwesomeIcon icon={faHome} /> {/* Ícono de inicio */}
                          </Link>
                      </li>
                      <li>
                          <Link to="/problema">
                          <FontAwesomeIcon icon={faQuestionCircle} />
                          </Link>
                      </li>
                      <li>
                          <Link to="/arboles">
                          <FontAwesomeIcon icon={faTree} />
                          </Link>
                      </li>
                      <li>
                          <Link to="/estudio-mercado">
                          <FontAwesomeIcon icon={faChartBar} />
                          </Link>
                      </li>
                      <li>
                          <Link to="/localizacion">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                          </Link>
                      </li>
                  </ul>
              </nav>

              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/problema" element={<Problema />} />
                  <Route path="/arboles" element={<Arboles />} />
                  <Route path="/estudio-mercado" element={<EstudioMercado />} />
                  <Route path="/localizacion" element={<Localizacion />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;


