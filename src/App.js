import './App.css';
import Header from './components/header/Header';
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';
import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer';

const App = () => {
  return (
    <>
    <Header/>
      <div className="App">
        {/* <ItemListContainer greeting={'Hola Mundo'}/> */}
        <ItemDetailContainer />
      </div>
    </>
  );
}

export default App;