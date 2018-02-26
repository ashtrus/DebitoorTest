import React, { Component } from "react";
import { Text, View, Linking } from "react-native";
import {
  Image,
  Title,
  Subtitle,
  Row,
  Icon,
  Screen,
  ImageBackground,
  Tile,
  Heading
} from "@shoutem/ui";
import Button from "./Button";

export default class RepoDetailScreen extends Component {

  render() {
    const { name, description, stargazers_count, owner, html_url } = this.props.repo;
    
    return (
      <Screen>
        <ImageBackground styleName="large" source={{ uri: owner.avatar_url }} />
        <Tile>
          <Row styleName="small">
            <Heading>{name}</Heading>
            <Icon name="add-to-favorites-off" />
            <Text>{stargazers_count}</Text>
          </Row>
          <Subtitle styleName="md-gutter-left">{description}</Subtitle>
        </Tile>
        <View style={styles.containerStyle}>
          <Button onPress={() => Linking.openURL(html_url)}>Open GitHub</Button>
        </View>
      </Screen>
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingTop: 15,
    paddingBottom: 10
  }
};