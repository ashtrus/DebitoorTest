import React, { Component } from 'react';
// import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from "./Router";
// import HomeScreen from "./components/HomeScreen";
// import RepoDetailScreen from "./components/RepoDetailScreen";

// const NavigationApp = StackNavigator({
//   HomeScreen: { screen: HomeScreen },
//   RepoDetailScreen: { screen: RepoDetailScreen }
// });

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>        
    );
  }
}