import './App.css';
import Header from './components/header/Header';

const App = () => {
  let school = 'coderHouse';

  return (
    <>
    <Header/>
      <div className="App">
        hola mundo!! somos {school}
      </div>
    </>
  );
}

export default App;