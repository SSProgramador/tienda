import './App.css';
import {NavBar} from './components/navbarComponent/index.jsx';
import {ItemListContainer} from './components/itemListContainerComponent/index.jsx';
import {ItemDetailContainer} from './components/itemDetailContainerComponent/index.jsx';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <a href="../"><img src="../images/logoNavBar.jpg" class="rounded-circle" height="75" width="75" alt="logo"/></a>
        </header>
      <NavBar/>

      <BrowserRouter>
        
        <Switch>
          <Route exact path="/">
            <ItemListContainer message="Productos"/>
          </Route>

          <Route exact path="/category/:id">
            <ItemListContainer message="Categoria"/>
          </Route>

          <Route exact path="/item/:id">
            <ItemDetailContainer message="Producto"/>
          </Route>                 
        </Switch>
      </BrowserRouter>
    


     

    </div>    
  );
}

export default App;
//<ItemListContainer message="Nuestros Productos"/>
/*<div className="App">
<header className="App-header">
  <img src="./images/logoNavBar.jpg"  height="150" width="150" alt="logo" />
</header>
<NavBar/>

<ItemDetailContainer message="Producto"/>

</div>*/