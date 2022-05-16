import './App.css';
import Header from './components/header/Header';
import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer';

const App = () => {
  return (
    <>
    <Header/>
      <div className="App">
        <ItemListContainer />
      </div>
    </>
  );
}

export default App;