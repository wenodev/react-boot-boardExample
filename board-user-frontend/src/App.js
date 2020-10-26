import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home/HomeContent'
import InquiryTable from './Component/Inquiry/InquiryTable'
import InquiryCreate from './Component/Inquiry/InquiryCreate'


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/inquiries" exact component={InquiryTable}></Route>
          <Route path="/add-inquiry" exact component={InquiryCreate}></Route>
        </Switch>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
