import './App.css';
// import { connect } from 'react-redux';

import NavBar from './components/NavBar/NavBar';
import Calculator from './containers/Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="navSpacer"></div>
      <Calculator />
    </div>
  );
}

export default App;