// Javascript Entry Point
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from './main';
import Contacts from './contacts';
import ContactView from './contact_view';
import NewCon from './new_con';

render((
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Contacts}/>
      <Route path='/new' component={NewCon}/>
      <Route path='/edit/:id' component={EditView}/>
      <Route path='/contacts/:id' component={ContactView}/>
    </Route>
  </Router>
), document.querySelector('.app'))
