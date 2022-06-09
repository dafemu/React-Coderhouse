import './App.css';
import Header from './components/header/Header';
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import CartContextProvider from './components/cart/CartContext';

const App = () => {
  let greeting = 'Bienvenido a la tienda de sneakers con mas hype';
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
        <Header/>
          <Routes>
              <Route exact path='/' element={<ItemListContainer greeting={greeting}/>} />
              <Route exact path='/category/:id' element={<ItemListContainer greeting={greeting}/>} />
              <Route exact path='/item/:id' element={<ItemDetailContainer />} />
              <Route exact path='/cart' element={<Cart />}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
