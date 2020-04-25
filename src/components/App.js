import React from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Switch, Link } from "react-router-dom";

import { setTokenStatus, setCurrentMusicIndex } from "../actions";

import history from "../history";
import SpotifyWebApi from "spotify-web-api-js";

import UserPlaylists from "./playlists/UserPlaylists";
import playlist from "./playlists/playlist";
import AudioPlayer from "./AudioPlayer/Player";

const spotifyApi = new SpotifyWebApi();

class App extends React.Component {
  constructor(props) {
    super(props);
    if (!sessionStorage.getItem("token")) {
      const params = this.getHashParams();
      const token = params.token;
      const isLoggedIn = token ? true : false;
      if (token) {
        // sessionStorage.setItem("token", token);
        //spotify-web-api-library needs the token to use library methods to request to the api
        spotifyApi.setAccessToken(token);

        //action creator
        //update status
        this.props.setTokenStatus(token, isLoggedIn);
      }
    }
    //spotifyApi.setAccessToken(sessionStorage.getItem("token"));
  }

  //get hash params for token
  getHashParams() {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(9);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  //these routes are from Router used to navigate the one page app
  //navigation is using history.push and Link tags to show components
  //anything outside of the switch will not be changed on the one page app
  render() {
    return (
      <HashRouter history={history}>
        <div className="main">
          <a href="http://localhost:8888"> Login to Spotify </a>
          <Link to={"/"}>UserPlaylists</Link>
          <Switch>
            <Route path="/" exact component={UserPlaylists} />
            <Route path="/playlist/:name" exact component={playlist} />
          </Switch>
          <AudioPlayer />
        </div>
      </HashRouter>
    );
  }
}

export default connect(null, { setTokenStatus })(App);
