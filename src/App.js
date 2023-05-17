import logo from './logo.svg';
import './App.css';
import Questao01X from './components/Questao01/Questao01X';
import Questao02 from './components/Questao02/Questao02';
import Questao03 from './components/Questao03/Questao03';


function App() {
  // adicione uma borda de 1px sólida preta ao redor do componente App
  return (
    <>
      <div className="App" style={{border: '1px solid black'}}>
        <Questao01X />
      </div>
      <div className="App" style={{border: '1px solid black'}}>
        <Questao02 />
      </div>
      <div className="App" style={{border: '1px solid black'}}>
        <Questao03 />
      </div>
    </>
  );
}

export default App;
