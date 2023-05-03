import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {key1: 0, key2: 0}

  onIncrementMongo = () => {
    this.setState(prevState => ({key1: prevState.key1 + 1}))
  }

  onIncrementBanana = () => {
    this.setState(prevState => ({key2: prevState.key2 + 1}))
  }

  render() {
    const {key1, key2} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">
            Bob ate <span className="mango-count">{key1}</span> mangoes
            <span className="banana-count">{key2}</span> bananas
          </h1>
          <div className="content-container">
            <div className="content1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="mango-img"
                alt="mango"
              />
              <div className="btn-center">
                <button
                  className="btn-mango"
                  onClick={this.onIncrementMango}
                  type="button"
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="content2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="mango-img"
                alt="banana"
              />

              <div className="btn-center">
                <button
                  className="btn-mango"
                  onClick={this.onIncrementBanana}
                  type="button"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
