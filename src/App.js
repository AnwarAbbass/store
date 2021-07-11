import Header from './components/header/header';
import Footer from './components/footer/footer';
import Category from './components/storefront/categories';
import Products from './components/storefront/products';
import Carts from './components/cart/simplecart';
import { Grid } from '@material-ui/core';


function App() {
  return (
    <>
    <Header />
    <Category />
    <Grid container>
    <Grid item xs>
    <Products/>
    </Grid>
    <Carts/>
    </Grid>
    <Footer />
    </>
  );
}

export default App;
