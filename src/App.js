import './App.css';
import Header from './components/header/Header';
import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer';

const App = () => {
  return (
    <>
    <Header/>
      <div className="App">
        <ItemListContainer greeting={'Hola Mundo'}/>
      </div>
    </>
  );
}

export default App;