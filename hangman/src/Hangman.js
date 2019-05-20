import React, { Component } from "react";

import "./Hangman.css";

import img0 from "./img/0.jpg"
import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.jpg"
import img4 from "./img/4.jpg"
import img5 from "./img/5.jpg"
import img6 from "./img/6.jpg"

class Hangman extends Component {
    static defaultProps = {
        maxWrongAnswers: 6,
        imgStatusSrc: [img0, img1, img2, img3, img4, img5, img6]
    };
    constructor(props) {
        super(props);
        this.state = {
            wrongAnswers: 0,
            guessed: new Set(),
            answer: "apple"
        };
        this.handleGuess = this.handleGuess.bind(this)
    }
    guessedWord() {
        return (
            this.state.answer
                .split("")
                .map(letter => {
                    return this.state.guessed.has(letter) ? letter : "_";
                })
        );
    }
    generateButtons() {
        return (
            "abcdefghijklmnopqrstuvxwyz".split("").map(letter => {
                return (
                    <button
                        key={letter}
                        value={letter}
                        onClick={this.handleGuess}
                        disabled={this.state.guessed.has(letter)}
                    >{letter}</button>
                );
            })
        );
    }
    handleGuess(e) {
        let letter = e.target.value;
        this.setState(prevState => ({
            guessed: prevState.guessed.add(letter),
            wrongAnswers: prevState.wrongAnswers + (prevState.answer.includes(letter) ? 0 : 1)
        }));
    }
    render() {
        return (
            <div className="Hangman">
                <h1>Hangman</h1>
                <img src={this.props.imgStatusSrc[this.state.wrongAnswers]} alt="" />
                <p>Guessed Wrong: {this.state.wrongAnswers}</p>
                <p className="Hangman-word">
                    {this.guessedWord()}
                </p>
                <p className="Hangman-btns">
                    {this.state.wrongAnswers < this.props.maxWrongAnswers
                        ? this.generateButtons()
                        : `You lose: ${this.state.answer}`}
                </p>
            </div>
        )
    }
}

export default Hangman;