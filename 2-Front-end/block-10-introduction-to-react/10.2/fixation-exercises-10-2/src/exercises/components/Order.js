// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {
    const { orders } = this.props;

    const orderEl = orders.map(({ user, product, price }, i) => (
        <p key={i}> <em>{user}</em> bought <b>{product}</b> for <em>{price.value}</em> {price.currency} </p>
    ));
    
    return (
      <div className="order">
        {orderEl}
      </div>
    );
  }
}

export default Order;