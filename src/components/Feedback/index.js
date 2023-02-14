// Write your React code here.
import {Component} from 'react'

class Feedback extends Component {
  state = {isClicked: false}

  submitFeed = () => this.setState({isClicked: true})

  emojies = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div>
        <h1>How satisfied are you with our customer support performance</h1>
        <ul>
          {emojis.map(eachItem => (
            <li key={eachItem.id}>
              <button key={eachItem.id} type="button" onClick={this.submitFeed}>
                <img src={eachItem.imageUrl} alt={eachItem.name} />
                <span>{eachItem.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankyou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div>
        <div>
          <img src={loveEmojiUrl} alt="love emoji" />
          <h1>Thank You!</h1>
          <p>
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isClicked} = this.state

    return (
      <div>
        <div>{isClicked ? this.thankyou() : this.emojies()}</div>
      </div>
    )
  }
}

export default Feedback
