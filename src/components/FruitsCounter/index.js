// Write your code here
import {Component} from 'react'
import './index.css'

class FruitCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  eatMango = () => {
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount + 1,
    }))
  }

  eatBanana = () => {
    this.setState(prevState => ({
      bananaCount: prevState.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount} = this.state
    const {bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">
            Bob ate <span className="span-style"> {mangoCount} </span>
            mangoes
            <span className="span-style"> {bananaCount} </span> bananas
            <div className="image-container">
              <div className="image-button-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  className="image"
                  alt="mango"
                />
                <button
                  className="button"
                  onClick={this.eatMango}
                  type="button"
                >
                  Eat Mango
                </button>
              </div>
              <div className="image-button-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  className="image"
                  alt="banana"
                />
                <button
                  className="button"
                  onClick={this.eatBanana}
                  type="button"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </h1>
        </div>
      </div>
    )
  }
}

export default FruitCounter
