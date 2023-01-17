import {Component} from 'react'
import './index.css'

const initialState = {
  timerInMinutes: 0,
  timerInSeconds: 0,
}

// Write your code here
class Stopwatch extends Component {
  state = initialState

  componentWillUnmount() {
    this.clearTimerInterval(this.intervalId)
  }

  clearTimerInterval = () => {
    clearInterval(this.intervalId)
  }

  tikTok = () => {
    this.setState(prevState => ({
      timerInSeconds: prevState.timerInSeconds + 1,
    }))
  }

  onstartTimer = () => {
    this.intervalId = setInterval(this.tikTok, 1000)
  }

  onStopTimer = () => {
    this.clearTimerInterval()
  }

  onResetTimer = () => {
    this.setState({
      timerInSeconds: 0,
    })
    this.clearTimerInterval()
  }

  getElapsedTimer = () => {
    const {timerInMinutes, timerInSeconds} = this.state
    const totalSeconds = timerInMinutes * 60 + timerInSeconds
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = Math.floor(totalSeconds % 60)
    const stringyFiedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const stringyFiedSeconds = seconds < 10 ? `0${seconds}` : seconds

    return `${stringyFiedMinutes}:${stringyFiedSeconds}`
  }

  render() {
    return (
      <div className="stop-watch-bg-container">
        <div className="stopwatch-mini-container">
          <h1 className="stopwatch-heading">Stopwatch</h1>
          <div className="stop-watch-card-container">
            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="image-size"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1 className="timer-count">{this.getElapsedTimer()}</h1>
            <div className="btn-container">
              <button
                className="start-btn"
                type="button"
                onClick={this.onstartTimer}
              >
                Start
              </button>
              <button
                className="stop-btn"
                type="button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                className="reset-btn"
                type="button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
