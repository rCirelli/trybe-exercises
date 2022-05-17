import './App.css';
import FancyButton from './components/FancyButton';

function App() {
  return (
    <div className="App App-header">
      <h2>Exercícios do dia 11.1</h2>
      <FancyButton text="Button 1" message="Click 1!" />
      <FancyButton text="Button 2" message="Click 2!" />
      <FancyButton text="Button 3" message="Click 3!" />
    </div>
  );
}

export default App;
