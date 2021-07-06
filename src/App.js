import Header from './components/header/header';
import Footer from './components/footer/footer';
import Category from './components/storefront/categories';
import Products from './components/storefront/products';
import Carts from './components/cart/simplecart';

function App() {
  return (
    <>
    <Carts/>
    <Header />
    <Category />
    <Products />
    <Footer />
    </>
  );
}

export default App;
