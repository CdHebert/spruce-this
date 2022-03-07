
import './App.css';
import Header from './components/Header';
import Home from './pages/homepage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Home />
    </div>
  );
}

export default App;
