import './App.css';
import CardContainer from './components/CardContainer'
import {data} from './data/data'

// console.log(data);
function App() {
  return (
    <div className="App">
      <h1>Pokemon Search</h1>
      <CardContainer pokemonData={data} />
    </div>
  );
}

export default App;
