import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import {
  Image,
  Subtitle,
  Row,
  Caption,
  Button,
  Icon,
  Screen,
  Title,
  Tile,
} from "@shoutem/ui";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {

  onRowPress() {
    Actions.details({repo: this.props.repo});
  }

  render() {
    const { id, name, owner, stargazers_count } = this.props.repo;
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

const mapStateToProps = (state, ownProps) => {
  const selected = state.selectedGitHubItemId === ownProps.repo.id;
  return { selected };
};

export default connect(mapStateToProps, actions)(ListItem);
