import React from "react";
import styled from "styled-components";

type Props = {};
type State = {
  display?: string;
  a?: string;
  b?: string;
  operator?: string;
  log: boolean;
};

const StyledCalculator = styled.div`
  .App {
    background-color: #bae5e5;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  #calculator {
    height: 360px;
    width: 300px;
    background-color: #1093af;
    display: flex;
    align-items: center;
  }
  .column,
  .row {
    display: flex;
  }
  .column {
    flex-direction: column;
  }
  #column-1 {
    width: 200px;
    margin-left: 20px;
  }
  #column-2 {
    width: 100px;
  }
  button {
    margin: 10px;
    font-size: 16px;
    font-weight: 600;
    width: 45px;
    height: 45px;
    background-color: #1babab;
    border-radius: 15%;
    color: white;
    /*text-decoration:none;*/
    border: 0 none;
    -webkit-box-shadow: 3px 3px 19px 0px rgba(0, 0, 0, 0.27);
    -moz-box-shadow: 3px 3px 19px 0px rgba(0, 0, 0, 0.27);
    box-shadow: 3px 3px 19px 0px rgba(0, 0, 0, 0.27);
  }
  button:focus {
    outline: none;
  }
  #display {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 22px;
    margin: 10px;
    height: 40px;
    text-align: right;
    width: 165px;
    padding: 5px;
    background-color: #2ac29a; /*#20b2ab;*/
    border-radius: 3%;
    overflow-x: hidden;
    overflow-y: hidden;
    padding-right: 10px;
    -webkit-box-shadow: inset 2px 3px 9px 1px rgba(0, 0, 0, 0.27);
    -moz-box-shadow: inset 2px 3px 9px 1px rgba(0, 0, 0, 0.27);
    box-shadow: inset 2px 3px 9px 1px rgba(0, 0, 0, 0.27);
  }
  .show-result {
    justify-content: flex-end !important;
  }
  #clear {
    background-color: #b35764;
  }
  #clear:hover {
    background-color: #803c45;
  }
  #equals {
    background-color: #20b286;
  }
  #equals:hover {
    background-color: #2f8a6e;
  }
  button:hover {
    background-color: #158888;
    -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.27);
    -moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.27);
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.27);
  }

  button:active {
    -webkit-box-shadow: inset 0px 0px 33px 16px rgba(0, 0, 0, 0.27);
    -moz-box-shadow: inset 0px 0px 33px 16px rgba(0, 0, 0, 0.27);
    box-shadow: inset 0px 0px 33px 16px rgba(0, 0, 0, 0.27);
  }
`;
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      display: "0", //screen
      a: "", //first number
      b: "", //second number
      operator: "", //math operation
      log: false, //for enabling and disabling logging feature
    };
  }
  logger = (message: any) => {
    if (this.state.log) {
      console.log(message);
    }
  };
  reset = () => {
    this.setState({ display: "0", a: "", b: "", operator: "" });
  };
  buttonPress = (e: React.MouseEvent) => {
    this.logger(this.state);
    let target = e.target as Element;
    switch (target.id) {
      case "clear":
        this.reset();
        break;
      case "equals":
      case "add":
      case "multiply":
      case "divide":
      case "subtract":
        this.doMath(target.id);
        break;
      case "zero":
        if (this.state.display === "0") {
          break;
        } else {
          this.setState({
            display: this.state.display + "0",
            b: this.state.b + "0",
          });
        }
        break;
      case "decimal":
        if (this.state.b) {
          this.logger(this.state.b.toString());
          if (this.state.b.toString().indexOf(".") >= 0) {
            break;
          }
        }
        this.setState({
          display: this.state.display + ".",
          b: this.state.b + ".",
        });
        break;
      default:
        /* 
        0
        3-2
        
        */
        let index = Object.keys(stringToNum).indexOf(target.id);
        let pre: string = "";
        if (index >= 0) {
          if (this.state.display !== "0") {
            pre = this.state.display as string;
          }
          this.setState({
            display: pre + index.toString(),
            b: this.state.b + index.toString(),
          });
        }
        break;
    }
  };
  doMath = (option: string) => {
    switch (option) {
      case "add":
      case "multiply":
      case "divide":
      case "subtract":
        if (!this.state.operator) {
          //if no operator on screen, just add operator on display(State), no math
          this.setState({
            display: this.state.display + mathSymbols[option],
            a: this.state.b,
            b: "",
            operator: option,
          });
        } else if (
          this.state.operator &&
          option !== this.state.operator &&
          !Boolean(parseInt(this.state.b as string))
        ) {
          //if
          if (option == "subtract") {
            this.setState({
              display: this.state.display + mathSymbols[option],
              b: "-",
            });
          } else {
            this.setState({
              display: this.state.display + mathSymbols[option],
              b: "",
              operator: option,
            });
          }
        } else if (
          this.state.operator &&
          this.state.a &&
          this.state.b &&
          this.state.b !== "-"
        ) {
          //if operator exists on screen, then perform math according to the operator and then add new to the
          let result;
          result = mathOperations[this.state.operator](
            parseFloat(this.state.a),
            parseFloat(this.state.b)
          );
          this.setState({
            display: result + mathSymbols[option],
            a: result,
            b: "",
            operator: option,
          });
        }
        this.logger(this.state);
        break;
      case "equals":
        if (this.state.b && this.state.operator) {
          let a: string = this.state.a || "0";
          let result = mathOperations[this.state.operator](
            parseFloat(a),
            parseFloat(this.state.b)
          );

          this.setState({
            //notice how I made b the result and not a? that is because when you press
            //[result]+, then + operation will make b=>a and new """ will be b

            display: result,
            b: result,
            a: "",
            operator: "",
          });
        }
    }
  };
  render() {
    return (
      <StyledCalculator style={{ flex: 1 }}>
        <div className="App">
          <div id="calculator">
            <div className="column" id="column-1">
              <div id="display">{this.state.display}</div>
              <div className="row">
                <button id="seven" onClick={this.buttonPress}>
                  7
                </button>
                <button id="eight" onClick={this.buttonPress}>
                  8
                </button>
                <button id="nine" onClick={this.buttonPress}>
                  9
                </button>
              </div>
              <div className="row">
                <button id="four" onClick={this.buttonPress}>
                  4
                </button>
                <button id="five" onClick={this.buttonPress}>
                  5
                </button>
                <button id="six" onClick={this.buttonPress}>
                  6
                </button>
              </div>
              <div className="row">
                <button id="one" onClick={this.buttonPress}>
                  1
                </button>
                <button id="two" onClick={this.buttonPress}>
                  2
                </button>
                <button id="three" onClick={this.buttonPress}>
                  3
                </button>
              </div>
              <div className="row">
                <button id="zero" onClick={this.buttonPress}>
                  0
                </button>
                <button id="decimal" onClick={this.buttonPress}>
                  .
                </button>
                <button onClick={this.buttonPress} id="equals">
                  =
                </button>
              </div>
            </div>
            <div className="column" id="column-2">
              <button onClick={this.buttonPress} id="clear">
                C
              </button>
              <button onClick={this.buttonPress} id="divide">
                /
              </button>
              <button onClick={this.buttonPress} id="multiply">
                x
              </button>
              <button onClick={this.buttonPress} id="subtract">
                -
              </button>
              <button onClick={this.buttonPress} id="add">
                +
              </button>
            </div>
          </div>
        </div>
      </StyledCalculator>
    );
  }
}

var stringToNum = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

type Operations = {
  [key: string]: any;
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
  multiply: (a: number, b: number) => number;
  divide: (a: number, b: number) => number;
};
var mathOperations: Operations = {
  add(a: number, b: number) {
    return a + b;
  },
  subtract(a: number, b: number) {
    return a - b;
  },
  multiply(a: number, b: number) {
    return a * b;
  },
  divide(a: number, b: number) {
    return a / b;
  },
};

var mathSymbols = {
  add: "+",
  subtract: "-",
  multiply: "x",
  divide: "/",
  equals: "",
};
export default App;
