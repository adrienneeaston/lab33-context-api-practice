import React from "react";
import Counter from "./components/counter/counter.js";
import Increment from "./components/increment/increment.js";
import Decrement from "./components/decrement/decrement.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    state: {
      counter: 0,
        (incrementCounter = this.incrementCounter),
        (decrementCounter = this.decrementCounter);
    }
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return (
      <>
        <Increment incrementCounter={this.incrementCounter} />
        <Counter banana={this.state} />
        <Decrement decrementCounter={this.decrementCounter} />
      </>
    );
  }
}
