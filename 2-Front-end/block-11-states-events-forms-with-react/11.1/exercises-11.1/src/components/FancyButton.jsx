import { Component } from 'react';

class FancyButton extends Component {
  constructor() {
    super()
    this.isEven = this.isEven.bind(this)
    this.changeColor = this.changeColor.bind(this)
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clickCount: 0,
    }
  }

  isEven() {
    const number = this.state.clickCount;
    return number % 2 === 0 ? true : false;
  }

  changeColor() {
    const colors = { odd: 'darkgreen', even: 'darkblue'};
    return this.isEven() ? colors.even : colors.odd;
  }

  async handleClick() {
    await this.setState((prev, _props) => ({
      clickCount: prev.clickCount + 1
    }));
    // console.log(this.state.clickCount, 'even?', this.isEven(), this.changeColor());
    console.log(`Is ${this.state.clickCount} even? ${this.isEven()}. Current color: ${this.changeColor()}`);
  }
  
  render() {
    const { text } = this.props;
    const { clickCount } = this.state;
    return (
      //? <button onClick={() => this.handleClick(param)}> para passar um parâmetro para a função
      //   { clickCount === 0 ? text : `${text} (${clickCount})` }
      // </button>
      <button onClick={this.handleClick} style={{backgroundColor: this.changeColor(), color: 'grey'}}>
        { clickCount === 0 ? text : `${text} (${clickCount})` }
      </button>
    );
  }
}

export default FancyButton;
