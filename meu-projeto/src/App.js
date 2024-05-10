import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = "Maria"

  return (
    <div className="App">
      <SayMyName nome="Lucas" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa nome="Lucas" idade="23" profissao="Programador" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
