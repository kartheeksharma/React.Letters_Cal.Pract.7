// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeInputPhrase = event => {
    const {value} = event.target

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="app-cont">
        <div className="letters-cal-cont">
          <div className="cal-cont">
            <h1 className="heading">Calculate the letters you enter</h1>
            <div className="input-phrase-cont">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                type="text"
                id="phraseText"
                className="letter-input"
                placeholder="Enter the phrase"
                onChange={this.onChangeInputPhrase}
                value={inputPhrase}
              />
            </div>
            <p className="letters-count">No.of letters: {inputPhrase.length}</p>
          </div>
          <img
            alt="letters calculator"
            className="letters-cal-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
