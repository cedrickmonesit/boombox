import React from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Switch, Link } from "react-router-dom";

import { setTokenStatus } from "../actions";

import history from "../history";
import SpotifyWebApi from "spotify-web-api-js";

import UserPlaylists from "./playlists/UserPlaylists";
import Playlist from "./playlists/Playlist";
import SearchResults from "./searchresults/SearchResults";
import Navigation from "./navigation/Navigation";
import Home from "./home/Home";
import Search from "./search/Search";
import logo from "../images/logo.png";
import Artists from "./artists/Artists";
import Artist from "./artist/Artist";
import Albums from "./albums/Albums";
import Browse from "./browse/Browse";
import Album from "./album/Album";
import "./app.scss";

const spotifyApi = new SpotifyWebApi();

class App extends React.Component {
  constructor(props) {
    super(props);
    const params = this.getHashParams();
    const token = params.token;

    //const isLoggedIn = token ? true : false;
    //set new token when signin
    if (token) {
      localStorage.setItem("token", token);

      // sessionStorage.setItem("token", token);
      //spotify-web-api-library needs the token to use library methods to request to the api
      spotifyApi.setAccessToken(localStorage.getItem("token"));

      //action creator
      //update status
      //this.props.setTokenStatus(token, isLoggedIn);
      //set token on refresh
    } else if (localStorage.getItem("token")) {
      //set token for api library use
      spotifyApi.setAccessToken(localStorage.getItem("token"));
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
    history.push("/");
    return hashParams;
  }

  //these routes are from Router used to navigate the one page app
  //navigation is using history.push and Link tags to show components
  //anything outside of the switch will not be changed on the one page app
  render() {
    return (
      <HashRouter history={history}>
        <div className="main">
          <div className="main-header">
            <h1>Boombox</h1>
            <a href="https://shrouded-reef-81516.herokuapp.com/">Login</a>
          </div>
          <div className="sidebar">
            <img className="logo" src={logo} alt="Boombox logo" />
            <Link to="/">Browse</Link>
            <Link to="/search">Search</Link>
            <Link to="/albums">Albums</Link>
            <Link to="/artists">Artists</Link>
            <Link to="/playlists">Playlists</Link>
          </div>
          <div className="content">
            <div className="main-playlists-nav">
              <Link to="/playlists">Playlists</Link>
              <Link to="/artists">Artists</Link>
              <Link to="/albums">Albums</Link>
            </div>
            <div className="grid-content">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search" exact component={Search} />
                <Route path="/search/results" exact component={SearchResults} />
                <Route path="/playlists" exact component={UserPlaylists} />
                <Route path="/playlist/:name" exact component={Playlist} />
                <Route path="/album/:id" exact component={Album} />
                <Route path="/user/album/:id" exact component={Playlist} />
                <Route path="/browse/:id" exact component={Browse} />
                <Route path="/artists" exact component={Artists} />
                <Route path="/artist/:artist_id" exact component={Artist} />
                <Route path="/albums" exact component={Albums} />
              </Switch>
            </div>
          </div>
          <div className="right"></div>
          <div className="left"></div>

          <Navigation />
        </div>
      </HashRouter>
    );
  }
}

export default connect(null, { setTokenStatus })(App);
