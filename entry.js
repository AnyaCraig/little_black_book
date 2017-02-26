import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import './firebase';

import App from './components/app';
import AddContact from './components/add_contact';
import Favourites from './components/favourites';
import Contact from "./components/contact";
import SearchFilter from "./components/search_filter";
import ErrorPage from "./components/error_page";

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SearchFilter}/>
      <Route path="addcontact" component={AddContact}/>
      <Route path="favourites" component={Favourites}/>
      <Route path="contacts" component={SearchFilter}/>
      <Route path="contact/:id" component={Contact}/>
      <Route path="*" component={ErrorPage}/>
    </Route>
  </Router>
), document.getElementById('placeholder'));
