import React, { Component } from "react";
import { ScrollView, View, ListView } from "react-native";
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
import { fetchGitHubRepos, turnOnSpinner } from '../actions';

class HomeScreen extends Component {

  componentWillMount() {
    this.props.turnOnSpinner();
    this.props.fetchGitHubRepos()
    this.createDataSource(this.props);
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
    if (this.props.loading) {
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
  return { repos: state.repos, loading: state.loading };
};

export default connect(mapStateToProps, {fetchGitHubRepos, turnOnSpinner })(HomeScreen);