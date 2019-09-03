import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux'

import './App.css';
import Header from './common/header'
import Home from './home/Index'
import CreateList from './createList'
import store from './store'

const theme = createMuiTheme({
  typography:{
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#00e676',
    },
  },
});

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <div>
              <Header />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/lista/:action" component={CreateList}/>
              </Switch>
            </div>          
          </Router>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App;
