import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const nome = "Maria"

  return (
    <div className="App">
      <Frase />
      <Frase />
      <h1>sasada</h1>
      <SayMyName nome="Lucas" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa nome="Lucas" idade="23" profissao="Programador" foto="https://via.placeholder.com/150" />
      <List />
    </div>
  );
}

export default App;
