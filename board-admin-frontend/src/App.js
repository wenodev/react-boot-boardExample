import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListBoardComponent from './components/ListBoardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateBoardComponent from './components/CreateBoardComponent';
import ViewBoardComponent from './components/ViewBoardComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListBoardComponent}></Route>
            <Route path="/boards" component={ListBoardComponent}></Route>
            <Route path="/add-board/:id" component={CreateBoardComponent}></Route>
            <Route path="/view-board/:id" component={ViewBoardComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
