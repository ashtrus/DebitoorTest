import React, { Component } from "react";
import { AppRegistry, Text, View, ScrollView } from "react-native";
import {
  Image,
  Subtitle,
  Row,
  Caption,
  Button,
  Icon,
  Screen,
  Title,
  ListView,
  ImageBackground,
  Tile,
  Overlay,
  Heading
} from "@shoutem/ui";
import RepoDetailScreen from "./RepoDetailScreen";

export default class HomeScreen extends Component {
    
  static navigationOptions = {
    title: 'Debitoor test',
    hasHistory: true
  } 

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      isSpinner: true,
      gitHubRepos: []
    }
  }

  componentDidMount() {
    this.getGitHubMostStarredRepositories();
  }

  getGitHubMostStarredRepositories() {
    fetch('https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&per_page=50&order=desc')
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          gitHubRepos : resJson.items
        })
      })
      .catch((err) => {
        console.log(err);
      })
  } 

  openRepoDetails(repo) {
    const data = {}
    data.name = repo.name
    data.author = repo.owner.login
    data.description = repo.description
    data.avatar = repo.owner.avatar_url
    data.url = repo.html_url;
    data.stars = repo.stargazers_count

    this.props.navigation.navigate("RepoDetailScreen", { data });
  }
  
  renderRow(repo) {
    return <Row>
        <Image styleName="small rounded-corners" source={{ uri: repo.owner.avatar_url }} />
        <Tile>
          <Title onPress={() => this.openRepoDetails(repo)}>
            {repo.name}
          </Title>
          <Subtitle>{repo.stargazers_count}</Subtitle>
        </Tile>
        <Caption />
        <Button styleName="right-icon" onPress={() => this.openRepoDetails(repo)}>
          <Text>View</Text>
          <Icon name="right-arrow" />
        </Button>
      </Row>;
  }


  
  render() {
    return <ScrollView>
        <ImageBackground styleName="large" source={{ uri: "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" }}>
          <Tile>
            <Overlay>
              <Heading styleName="bold">GitHub Repos</Heading>
              <Subtitle>Sorted by Rating</Subtitle>
            </Overlay>
          </Tile>
        </ImageBackground>
        <ListView data={this.state.gitHubRepos} renderRow={this.renderRow} />
      </ScrollView>;
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent("AwesomeProject", () => HomeScreen);
