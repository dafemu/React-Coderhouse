import './App.css';
import Header from './components/header/Header';
import { ItemCount } from './components/itemcount/ItemCount';
import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer';

const App = () => {
  return (
    <>
    <Header/>
      <div className="App">
        <ItemListContainer greeting={'Hola Mundo'}/>
        <ItemCount stock={5} initial={1} />
      </div>
    </>
  );
}

export default App;