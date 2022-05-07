import './App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex';


function App() {
  return (
    <div className="App App-header wrapper">
      <Pokedex list={pokemons}/>
    </div>
  );
}

export default App;
