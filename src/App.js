import './App.css';
import NavBar from './components/NavBar';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/HomeAddProduct';
import ViewAll from './views/ViewAll';
import ViewOne from './views/ViewOne';
import Update from './views/Update';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Home path="/"/>
        <ViewAll path="/products"/>
        <ViewOne path="/products/:_id"/>
        <Update path="/products/update/:_id"/>
      </Router>
    </div>
  );
}

export default App;
