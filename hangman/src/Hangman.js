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
                        value={letter}
                        onClick={this.handleClick}
                        disabled={this.state.guessed.has(letter)}
                    >{letter}</button>
                );
            })
        );
    }
    handleClick() {

    }
    render() {
        return (
            <div className="Hangman">
                <h1>Hangman</h1>
                <img src={this.props.imgStatusSrc[this.state.wrongAnswers]} alt="" />
                <p className="Hangman-word">
                    {this.guessedWord()}
                </p>
                <p className="Hangman-btns">
                    {this.generateButtons()}
                </p>
            </div>
        )
    }
}

export default Hangman;