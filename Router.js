import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import HomeScreen from './components/HomeScreen';
import RepoDetailScreen from './components/RepoDetailScreen';

const RouterComponent = () => (
  <Router>
    <Scene key='root'>
      <Scene
        key='home'
        component={HomeScreen}
        title='Debitoor Test'
        initial />
      <Scene key='details' component={RepoDetailScreen} title='GitHub repo details' />
    </Scene>
  </Router>
);

export default RouterComponent;
