import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = "Lucas"

  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1>Alterando JSX</h1>
      <p>Olá, {name}</p>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(2, 1)}</p>
      <img src={url} alt="Minha imagem" />
      <HelloWorld />
    </div>
  );
}

export default App;
