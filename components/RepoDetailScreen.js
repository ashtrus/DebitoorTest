import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  Image,
  Title,
  Subtitle,
  Row,
  Caption,
  Icon,
  Card,
  Screen,
  ImageBackground,
  Tile,
  Heading
} from "@shoutem/ui";
import HomeScreen from "./HomeScreen";

export default class RepoDetailScreen extends Component {
  
  static navigationOptions = {
    title: 'Details'
  };

  render() {
    this.state = {
      repo: this.props.navigation.state.params.data
    };

    const repo = this.state.repo

    return <Screen>
        <ImageBackground styleName="large" source={{ uri: repo.avatar }} />
        <Tile>
          <Row styleName="small">
            <Heading>{repo.name}</Heading>
            <Icon name="add-to-favorites-off" />
            <Text>{repo.stars}</Text>
          </Row>
          <Subtitle styleName="md-gutter-left">{repo.description}</Subtitle>
          <Caption styleName="md-gutter-left md-gutter-top">
            {repo.url}
          </Caption>
          <Row />
        </Tile>
      </Screen>;
  }
}
