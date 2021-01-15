import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/carnes'>
          <Category category='Carnes' />
        </Route>
        <Route path='/vegetales'>
          <Category category='Vegetales' />
        </Route>
        <Route path='/frutas'>
          <Category category='Frutas' />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
