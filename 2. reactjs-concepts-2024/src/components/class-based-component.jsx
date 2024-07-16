import { Component } from "react";

class ClassBasedComponent extends Component {
  //state
  state = {
    showText: false,
    changeColor: false,
    count: 0,
    changeCountStyle: false,
  };

  handleClick = () => {
    console.log("button clicked");
    //this is not recommened
    // this.state.showText = !this.state.showText

    const { showText, changeColor } = this.state;

    this.setState({
      showText: !showText,
      changeColor: !changeColor,
    });
  };

  //componentDidMount
  //componentDidUpdate
  //componentWillUnmount

  componentDidMount() {
    console.log("this is called first time on page load");

    this.setState({
      showText: !this.state.showText,
      changeColor: !this.state.changeColor,
    });
  }

  handleCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState &&
      prevState.count !== this.state.count &&
      this.state.count === 10
    ) {
      this.setState({
        ...this.state,
        changeCountStyle: true,
      });
    }
  }

  componentWillUnmount() {
    console.log("component is getting unmounted");
  }

  render() {
    const { showText, changeColor, count, changeCountStyle } = this.state;

    console.log(changeCountStyle);

    return (
      <div>
        {showText ? (
          <h4 style={{ color: changeColor ? "red" : "black" }}>
            Class based component
          </h4>
        ) : null}

        <button onClick={this.handleClick}>Toggle Text</button>
        <button onClick={this.handleCount}>Increase Count Value</button>
        <h3
          style={{
            color: changeCountStyle ? "blue" : "black",
            fontSize: changeCountStyle ? "30px" : "12px",
          }}
        >
          Count is {count}
        </h3>
      </div>
    );
  }
}

export default ClassBasedComponent;
