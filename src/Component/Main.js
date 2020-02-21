import React from 'react';
import {Route, Switch} from 'react-router-dom';


// pages 

import Photo from './Photo';
import Socket from './Socket';

/**
 * Main page with tow page route path and exports Main function 
 */


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Photo}/>
      <Route exact path= "/socket" component={Socket}/>
    </Switch>
  </main>
)



export default Main;