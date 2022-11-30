import logo from './logo.svg';
import './App.css';
import PrimerComponente from './PrimerComponente';
import SegundoComponente from './SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <PrimerComponente />
        <SegundoComponente />
      </header>
    </div>
  );
}

export default App;
