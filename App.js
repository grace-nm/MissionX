import React from 'react';
import './App.css';
import PageNavBar from './PageNavBar.js';

import PageOne from './PageOne.js';
import PageTwo from './PageTwo.js';
import PageThree from './PageThree.js';

import {Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <PageNavBar />
      <Route exact path="/" component={PageOne} />
      <Route exact path="/PageTwo" component={PageTwo} />
      <Route exact path="/PageThree" component={PageThree} />
     
    </div>
  );
}


export default App;
