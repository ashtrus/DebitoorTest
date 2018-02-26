import React, { Component } from "react";
import { ScrollView, View, ListView } from "react-native";
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  Image,
  Subtitle,
  Row,
  Screen,
  Title,
  ImageBackground,
  Tile,
  Overlay,
  Heading
} from "@shoutem/ui";
import ListItem from './ListItem';
import Spinner from "./Spinner";
import { fetchGitHubRepos } from '../actions';

class HomeScreen extends Component {

  componentWillMount() {
    this.props.fetchGitHubRepos();
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource({repos}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(repos);
  }

  renderContent() {
    if (this.props.isSpinner) {
      return <Spinner size="large" />;
    }
    return <ListView dataSource={this.dataSource} renderRow={this.renderRow} enableEmptySections />;
  }
  
  renderRow(repo) {
    return <ListItem repo={repo} />;
  }
  
  render() {
    return (
      <ScrollView>
        <ImageBackground styleName="large" source={{ uri: "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" }}>
          <Tile>
            <Overlay>
              <Heading styleName="bold">GitHub Repos</Heading>
              <Subtitle>Sorted by Rating</Subtitle>
            </Overlay>
          </Tile>
        </ImageBackground>
        {this.renderContent()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const repos = _.map(state.repos, (val, id) => {
    return {...val, id}
  });

  return { repos };
};

export default connect(mapStateToProps, {fetchGitHubRepos})(HomeScreen);