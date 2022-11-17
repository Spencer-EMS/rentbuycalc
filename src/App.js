import './App.css';
import { connect } from 'react-redux';

import NavBar from './components/NavBar/NavBar';
import Calculator from './containers/Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Calculator />
    </div>
  );
}

export default connect(store=>store)(App);