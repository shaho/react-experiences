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
      loading: false,
      jokesList: JSON.parse(window.localStorage.getItem("jokes") || "[]")
    };
    this.seenJokes = new Set(
      this.state.jokesList.map(joke => {
        return joke.id;
      })
    );
    console.log(this.seenJokes);
    this.handleClick = this.handleClick.bind(this);
  }
  ////////////////////////////////
  componentDidMount() {
    if (this.state.jokesList.length === 0) this.fetchJokesList();
    // console.log(response.data.joke);
  }
  ////////////////////////////////
  async fetchJokesList() {
    try {
      let newJokeList = [];
      while (newJokeList.length < this.props.numberOfJokesToGet) {
        let response = await axios.get(Jokes_API_URL, {
          headers: { Accept: "application/json" }
        });
        console.log(response.data.id);
        const jokeExist = newJokeList.some(joke => {
          return joke.id === response.data.id;
        });
        if (jokeExist) {
          console.log("Duplicate from Array: " + response.data.joke);
        }
        if (this.seenJokes.has(response.data.id)) {
          console.log("Duplicate from seenJokes: " + response.data.joke);
        }

        if (!jokeExist && !this.seenJokes.has(response.data.id)) {
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
            loading: false,
            jokesList: [...prevState.jokesList, ...newJokeList]
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
      console.log(newJokeList);
    } catch (error) {
      alert(`Whoops! something went wrong! ${error}`);
      this.setState({ loading: false });
    }
  }
  ////////////////////////////////
  handleClick() {
    this.setState({ loading: true }, this.fetchJokesList);
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
    let sortedJokes = this.state.jokesList.sort((a, b) => {
      return b.votes - a.votes;
    });
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
            {sortedJokes.map(joke => {
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
