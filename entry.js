import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import AddContact from './components/add_contact';
import Favourites from './components/favourites';
import ContactList from './components/contact_list';
import Contact from "./components/contact";
import ContactPreview from "./components/contact_preview";
import SearchFilter from "./components/search_filter";

// Include your React components like this:
// import MyComponent from 'components/my_component';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SearchFilter}/>
      <Route path="addcontact" component={AddContact}/>
      <Route path="favourites" component={Favourites}/>
      <Route path="contacts" component={SearchFilter}/>
    </Route>
  </Router>
), document.getElementById('placeholder'));