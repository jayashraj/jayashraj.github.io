import React, { Component } from "react";
import styled from "styled-components";

type Props = {};
type State = {
  display?: string;
};

const StyledDrums = styled.div`
  flex: 1;
  .App {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-color: #9194a5;
  }
  #display {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 30px;
    margin: 10px;
    height: 90px;
    text-align: right;
    width: 100%;
    background-color: #2ac29a; /*#20b2ab;*/
    border-radius: 3%;
    overflow-x: hidden;
    padding-right: 10px;
    -webkit-box-shadow: inset 2px 3px 9px 1px rgba(0, 0, 0, 0.27);
    -moz-box-shadow: inset 2px 3px 9px 1px rgba(0, 0, 0, 0.27);
    box-shadow: inset 2px 3px 9px 1px rgba(0, 0, 0, 0.27);
  }
  #drum-machine {
    height: 400px;
    width: 360px;
    background-color: #ddddd1;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: perspective(600px) rotateX(20deg);
  }
  #raise-display {
    height: 160px;
    margin-top: -100px;

    background-color: black;
    transform: perspective(600px) rotateX(-30deg);
    border-top: 30px solid #7a7766;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 30px solid #7a7766;
  }
  .drum-pad {
    width: 80px;
    height: 80px;
    color: white;
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .drum-pad:active {
    transform: translate(0px, 2px);
  }
  #bottom {
    width: 400px;
    height: 20px;
    margin-top: 13px;
    border-top: 30px solid #7a7766;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
  }
`;
export default class Drums extends Component<State> {
  state = { display: "" };

  clickPad = (e: React.MouseEvent) => {
    /* console.log(e); */
    let k = e.target as Element; //this took me forever

    this.play(k.children[0] as HTMLAudioElement);
  };
  keyPad = (e: KeyboardEvent) => {
    /*  console.log(e); */
    let audioElement = document.getElementById(e.code.split("Key")[1]);
    if (audioElement) {
      document.getElementById((audioElement.parentNode as Element).id)?.click();

      /* this.play(audioElement as HTMLAudioElement); */
    }
  };
  play = (id: HTMLAudioElement) => {
    try {
      id.currentTime = 0;
      id.play();
      // get the file name, using regex, split the extension and only pass the filename
      /*  console.log(id.src); */
      if (id.src.match(/\w+.wav/gi)) {
        this.setState({
          display: id.src.match(/\w+.wav/gi)![0].split(".")[0],
        });
      } else {
        this.setState({
          display: "",
        });
      }
    } catch (err) {
      console.log("Playback Prevented");
    }
  };
  updateDescription = (id: String) => {
    console.log(id);
  };
  componentDidMount() {
    document.addEventListener("keydown", (ev: KeyboardEvent) => {
      this.keyPad(ev);
    });
    this.autoplay();
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", (ev: KeyboardEvent) => {
      this.keyPad(ev);
    });
  }
  autoplay = () => {
    /* for future: you can create a function that records the time when the audio was played, 
    then console log it in the format as below and then you can autoplay it*/
    let beat = [
      { which: "X", when: 0 },
      { which: "Z", when: 0.7 },
      { which: "X", when: 1.3 },
      { which: "X", when: 1.6 },
      { which: "Z", when: 2.2 },
    ];
    for (let index = 0; index < beat.length; index++) {
      setTimeout(function () {
        (document.getElementById(
          beat[index].which
        ) as HTMLAudioElement).currentTime = 0;
        (document.getElementById(beat[index].which) as HTMLAudioElement).play();
      }, beat[index].when * 1000);
    }
  };
  render() {
    return (
      <StyledDrums>
        <div className="App">
          <div id="drum-machine">
            <div>
              <div className="row" id="raise-display">
                <div id="display">{this.state.display}</div>
              </div>
              <div className="row">
                <div className="drum-pad" onClick={this.clickPad} id="tom1">
                  <audio
                    src="../sounds/tom1.wav"
                    className="clip"
                    id="Q"
                  ></audio>
                  Q
                </div>
                <div className="drum-pad" onClick={this.clickPad} id="tom2">
                  <audio
                    src="../sounds/tom2.wav"
                    className="clip"
                    id="W"
                  ></audio>
                  W
                </div>
                <div className="drum-pad" onClick={this.clickPad} id="tom3">
                  <audio
                    src="../sounds/tom3.wav"
                    className="clip"
                    id="E"
                  ></audio>
                  E
                </div>
              </div>
              <div className="row">
                <div className="drum-pad" onClick={this.clickPad} id="crash">
                  <audio
                    src="../sounds/crash.wav"
                    className="clip"
                    id="A"
                  ></audio>
                  A
                </div>
                <div className="drum-pad" onClick={this.clickPad} id="hho">
                  <audio
                    src="../sounds/hho.wav"
                    className="clip"
                    id="S"
                  ></audio>
                  S
                </div>
                <div className="drum-pad" onClick={this.clickPad} id="hhc">
                  <audio
                    src="../sounds/hhc.wav"
                    className="clip"
                    id="D"
                  ></audio>
                  D
                </div>
              </div>
              <div className="row">
                <div className="drum-pad" onClick={this.clickPad} id="clap">
                  <audio
                    src="../sounds/clap.wav"
                    className="clip"
                    id="Z"
                  ></audio>
                  Z
                </div>
                <div className="drum-pad" onClick={this.clickPad} id="kick">
                  <audio
                    src="../sounds/kick.wav"
                    className="clip"
                    id="X"
                  ></audio>
                  X
                </div>
                <div className="drum-pad" onClick={this.clickPad} id="snare">
                  <audio
                    src="../sounds/snare.wav"
                    className="clip"
                    id="C"
                  ></audio>
                  C
                </div>
              </div>
            </div>
          </div>
          <div id="bottom"></div>
        </div>
      </StyledDrums>
    );
  }
}
