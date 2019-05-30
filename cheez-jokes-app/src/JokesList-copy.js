import React, { Component } from "react";
import axios from "axios";
import Joke from "./Joke";

import "./JokesList.css";

const Jokes_API_URL = "https://icanhazdadjoke.com/";

class JokesList extends Component {
  static defaultProps = {
    numberOfJokesToGet: 10
  };
  constructor(props) {
    super(props);
    this.state = {
      jokesCount: 0,
      jokesList: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      loading: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  ////////////////////////////////
  componentDidMount() {
    if (this.state.jokesList.length === 0) {
      this.fetchJokesList();
    } else {
      this.setState({
        loading: false
      });
    }

    // console.log(response.data.joke);
  }
  ////////////////////////////////
  fetchNewJokes() {
    this.fetchJokesList();
  }
  ////////////////////////////////
  async fetchJokesList() {
    this.setState({
      loading: false
    });
    let newJokeList = [];
    while (newJokeList.length < this.props.numberOfJokesToGet) {
      let response = await axios.get(Jokes_API_URL, {
        headers: { Accept: "application/json" }
      });
      console.log(response.data.id);
      // console.log(newJokeList.id);
      // console.log(newJokeList.joke);
      // if (!newJokeList.includes(response.data)) {
      //   newJokeList.push(response.data);
      //   console.log(newJokeList.id);
      // }
      const jokeExist = newJokeList.some(joke => {
        return joke.id === response.data.id;
      });
      if (!jokeExist) {
        newJokeList.push({
          id: response.data.id,
          joke: response.data.joke,
          votes: 0
        });
      }
    }
    this.setState(
      prevState => {
        return {
          jokesList: [...prevState.jokesList, ...newJokeList],
          loading: false
        };
      },
      // Callback
      () => {
        return window.localStorage.setItem(
          "jokes",
          JSON.stringify(this.state.jokesList)
        );
      }
    );
    window.localStorage.setItem("jokes", JSON.stringify(newJokeList));
    console.log(newJokeList);
  }
  ////////////////////////////////
  handleClick() {
    this.fetchJokesList();
  }
  ////////////////////////////////
  handleVote(id, delta) {
    this.setState(
      prevState => {
        return {
          jokesList: prevState.jokesList.map(jokeItem => {
            return jokeItem.id === id
              ? { ...jokeItem, votes: jokeItem.votes + delta }
              : jokeItem;
          })
        };
      },
      // Callback
      () => {
        return window.localStorage.setItem(
          "jokes",
          JSON.stringify(this.state.jokesList)
        );
      }
    );
  }
  ////////////////////////////////
  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt=""
          />
          <button onClick={this.handleClick} className="JokeList-getmore">
            New Jokes
          </button>
        </div>
        {this.state.loading ? (
          <div className="loader" />
        ) : (
          <div className="JokeList-jokes">
            {this.state.jokesList.map(joke => {
              return (
                <Joke
                  id={joke.id}
                  key={joke.id}
                  text={joke.joke}
                  votes={joke.votes}
                  upvote={() => this.handleVote(joke.id, 1)}
                  downvote={() => this.handleVote(joke.id, -1)}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default JokesList;
