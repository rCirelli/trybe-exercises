import { Component } from "react";


class Pokemon extends Component {
  render() {
    const { data: { name, type, averageWeight: { value: weigh, measurementUnit: unit}, image } } = this.props;

    return (
      <div>
        <span>
          <h4>{name}</h4>
          <h6><em>{type}</em></h6>
        </span>
        <img src={image} alt={name}/>
        <p>Average weigh: {weigh} {unit}</p>
      </div>
    )
  }
}

export default Pokemon