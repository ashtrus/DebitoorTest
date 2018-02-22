import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from "./components/HomeScreen";
import RepoDetailScreen from "./components/RepoDetailScreen";

const NavigationApp = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  RepoDetailScreen: { screen: RepoDetailScreen }
});

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  render() {
    return <NavigationApp />
  }
}