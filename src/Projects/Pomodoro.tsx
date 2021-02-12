import React from "react";

import "../fontawesome/css/all.css";
import styled from "styled-components";
type Props = {};

type State = {
  [index: string]: string | boolean | number;
  on: boolean;
  screen: string;
  session: number;
  break: number;
  timer: string;
  config: boolean;
};
interface ConfigProps {
  sessionLength: number;
  breakLength: number;
  change: Function;
  toggle: Function;
}
const StyledPomodoro = styled.div`
  .config--hide {
    display: none;
  }
  .config {
    position: absolute;
    background-color: #02805c;
    color: white;
    z-index: 2;
  }

  .container {
    background-color: #02805c;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container-session {
    background-color: #a13341;
  }

  .container-break {
    background-color: #02805c;
  }
  .label {
    font-family: "Arial";
    text-align: center;
    font-size: 2rem;
    color: white;
  }

  .pomodoro-box,
  .config {
    border-radius: 2%;
    width: 350px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .pomodoro-box {
    box-shadow: 3px 10px 30px 10px rgba(0, 0, 0, 0.27);
  }

  .row-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 30px;
    padding: 0px 20px;
  }

  .row-group {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .button {
    width: 40px;
    margin: 20px;
    height: 40px;
    border: none;
    border-radius: 50%;
    color: white;
    box-shadow: 2px 1px 15px 0px rgba(0, 0, 0, 0.27);
  }

  .button:hover {
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.27);
  }

  .button-session:active {
    /* when pressed */
    background-color: #841b2a;
  }

  .button-session:focus {
    /* removes/modifies the box created by browser when you press abutton */
    outline: #841b2a;
  }

  .session {
    background-color: #c4283e;
    position: relative;
    align-items: center;
  }

  .button-session {
    background-color: #d53148;
  }

  .break {
    position: relative;
    align-items: center;
    background-color: #02805c;
  }

  .button-break {
    background-color: #1a8d6c;
  }

  .button-break:active {
    /* when pressed */
    background-color: #005a40;
  }

  .button-break:focus {
    /* removes/modifies the box created by browser when you press abutton */
    outline: #005a40;
  }

  .button-controls {
    background-color: #1a8d6c;
    font-size: 1.2rem;
  }

  .button-controls:active {
    /* when pressed */
    background-color: #005a40;
  }

  .button-controls:focus {
    /* removes/modifies the box created by browser when you press abutton */
    outline: #005a40;
  }

  .button-toggle {
    position: absolute;
    top: -5px;
    right: -5px;
    margin: 0px;
    border-radius: 50%;
    background-color: #fff7f8;
    color: #32021f;
  }
  .button-toggle:active {
    background-color: #cecece;
  }
  .lengthValue {
    font-size: 1.5rem;
    font-family: "Arial";
  }

  #session-label,
  #break-label {
    font-size: 1.4rem;
  }
  /*# sourceMappingURL=style.css.map */
`;

class Config extends React.Component<ConfigProps> {
  render() {
    return (
      <div className="config">
        <button
          className="button button-controls button-toggle"
          onClick={(ev) => this.props.toggle(ev)}
        >
          <i className="fas fa-cogs"></i>
        </button>
        <div className="row-group">
          <div className="label" id="break-label">
            Break Length
          </div>
          <div className="row-buttons">
            <button
              id="break-decrement"
              className="button button-controls"
              onClick={(ev) => this.props.change(ev)}
            >
              -
            </button>
            <div id="break-length" className="lengthValue">
              {this.props.breakLength}
            </div>
            <button
              id="break-increment"
              className="button button-controls"
              onClick={(ev) => this.props.change(ev)}
            >
              +
            </button>
          </div>
        </div>
        <div className="row-group">
          <div className="label" id="session-label">
            Session Length
          </div>
          <div className="row-buttons">
            <button
              id="session-decrement"
              className="button button-controls"
              onClick={(ev) => this.props.change(ev)}
            >
              -
            </button>
            <div id="session-length" className="lengthValue">
              {this.props.sessionLength}
            </div>
            <button
              id="session-increment"
              className="button button-controls"
              onClick={(ev) => this.props.change(ev)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      on: false,
      screen: "session",
      session: 25,
      break: 5,
      timer: "25:00",
      config: false,
    };
    this.changeLength = this.changeLength.bind(this);
    this.resetTimers = this.resetTimers.bind(this);
    this.startStopTimer = this.startStopTimer.bind(this);
    this.toggleConfig = this.toggleConfig.bind(this);
  }

  changeCounter(minute: number) {
    let clockMode = minute > 9 ? minute + ":00" : "0" + minute + ":00";
    this.setState({ timer: clockMode });
  }
  toggleConfig() {
    this.setState({ config: !this.state.config });
  }
  changeLength(e: MouseEvent) {
    let target = e.target;
    if (target) {
      //mode can be "session" or "break"
      let [mode, change] = (target as HTMLElement).id.split("-");

      if (change === "increment" && this.state[mode] < 60) {
        this.setState({
          [mode]: (this.state[mode] as number) + 1,
        });
        if (this.state.screen === mode) {
          this.changeCounter((this.state[mode] as number) + 1);
        }
      } else if (change === "decrement" && this.state[mode] > 1) {
        this.setState({
          [mode]: (this.state[mode] as number) - 1,
        });
        if (this.state.screen === mode) {
          this.changeCounter((this.state[mode] as number) - 1);
        }
      }
    }
  }
  resetTimers() {
    this.setState({
      session: 25,
      break: 5,
      timer: "25:00",
      screen: "session",
      on: false,
    });
    let audio = document.getElementById("beep") as HTMLAudioElement;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      document.title = "25:00";
    }
  }
  startStopTimer() {
    var timeinterval = setInterval(() => {
      if (this.state.on) {
        //If timer is counting
        let a = this.state.timer.split(":");
        let total = parseInt(a[0]) * 60 + parseInt(a[1]);
        if (total <= 0) {
          (document.getElementById("beep") as HTMLAudioElement).play();
          //If the timer is counting, When timer reaches zero, switch the mode
          if (this.state.screen === "break") {
            // If the timer is counting, When timer reaches zero, Start pomodoro if in break
            this.setState({
              screen: "session",
            });
            this.changeCounter(this.state.session);
          } else if (this.state.screen === "session") {
            // If the timer is counting, When timer reaches zero, Start break if in pomodoro
            this.setState({
              screen: "break",
            });
            this.changeCounter(this.state.break);
          }
        } else {
          //If the timer is counting, If clock is not close to 0, subtract 1
          total -= 1;
          let min: string | number = Math.floor(total / 60);
          let sec: string | number = total - min * 60;
          if (min < 10) {
            min = "0" + min;
          }
          if (sec < 10) {
            sec = "0" + sec;
          }
          this.setState({
            timer: min + ":" + sec,
          });
          document.title = min + ":" + sec;
        }
      } else {
        //If the clock is stopped, clear the counter, the time of the counter is stored in variable timer
        clearInterval(timeinterval);
      }
    }, 1000);

    /* Basically starts and pauses the timer, main function of the button*/
    this.setState({
      on: !this.state.on,
    });
  }

  render() {
    return (
      <StyledPomodoro style={{ flex: 1 }}>
        {" "}
        <div className={"container container-" + this.state.screen}>
          <audio id="beep">
            <source src="done.mp3" type="audio/mpeg" />
          </audio>
          {this.state.config && (
            <Config
              sessionLength={this.state.session}
              breakLength={this.state.break}
              change={this.changeLength}
              toggle={this.toggleConfig}
            />
          )}
          <div className={"pomodoro-box " + this.state.screen}>
            <button
              className="button button-controls button-toggle"
              onClick={this.toggleConfig}
            >
              <i className="fas fa-cogs"></i>
            </button>
            <div className="label" id="timer-label">
              {this.state.screen == "session" ? "pomodoro" : "break"}
            </div>
            <div className="label" id="time-left">
              {this.state.timer}
            </div>
            <div className="row-buttons">
              <button
                className={"button button-" + this.state.screen}
                id="start_stop"
                onClick={this.startStopTimer}
              >
                <i
                  className={"fas fa-" + (this.state.on ? "pause" : "play")}
                ></i>
              </button>
              <button
                className={"button button-" + this.state.screen}
                id="reset"
                onClick={this.resetTimers}
              >
                <i className="fas fa-undo"></i>
              </button>
            </div>
          </div>
        </div>
      </StyledPomodoro>
    );
  }
}
export type { State };
export default App;
