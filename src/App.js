import logo from './logo.svg';
import './App.css';
// import Product from './Components/Product';
import { CartProvider } from './Context/CartContext';
import Header from './Components/Header';
import AppContent from './AppContent';

function App() {
  return (
    <CartProvider>
      <Header/>
      <AppContent/>
    </CartProvider>
  );
}

export default App;
