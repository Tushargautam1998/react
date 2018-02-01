import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MenuExampleBasic from './components/menu.js';
import DimmerExampleBlurringInverted from './components/dimmer.js';

const dimmer = ()=><DimmerExampleBlurringInverted/>
const menu = ()=><MenuExampleBasic/>
ReactDOM.render(

    <BrowserRouter>
    <Switch>
          <Route exact path="/dimmer" component={dimmer}/>
          <Route exact path="/" component={menu}/>
    </Switch>
    </BrowserRouter>,
    document.getElementById('root')
  );