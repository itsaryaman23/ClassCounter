import React from "react";

class Counter extends React.Component {
    constructor(){
        super();
        this.state = {count: 0};
        // this.updateState = this.updateState.bind(this);
    }
    decreaseState() {
        // Changing state
        this.setState((prevState) => {
            return { count: prevState.count - 1 }
        });
    }
    increaseState() {
        // Changing state
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
        });
    }
  render() {

    return (
      <>
        <h1>Counter</h1>
        <p>{this.state.count}</p>
        <button onClick={()=>{this.increaseState();}}>Increment</button>
        <button onClick={()=>{this.decreaseState();}}>Decrement</button>
      </>
    );
  }
}
export default Counter;