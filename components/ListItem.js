import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import {
  Image,
  Subtitle,
  Row,
  Caption,
  Button,
  Icon,
  Title,
  Tile,
} from "@shoutem/ui";
import { Actions } from 'react-native-router-flux';

export default class ListItem extends Component {

  onRowPress() {
    Actions.details({repo: this.props.repo});
  }

  render() {
    const { name, owner, stargazers_count } = this.props.repo;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <Row>
          <Image styleName="small rounded-corners" source={{ uri: owner.avatar_url }} />
          
          <Tile>
            <Title>
              {name}
            </Title>
            <Subtitle>{stargazers_count}</Subtitle>
          </Tile>

          <Caption />

          <Button styleName="right-icon">
            <Text>View</Text>
            <Icon name="right-arrow" />
          </Button>
          
        </Row>
      </TouchableWithoutFeedback>
    );
  }
}
