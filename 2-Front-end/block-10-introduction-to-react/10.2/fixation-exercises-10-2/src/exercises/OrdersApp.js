// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import '../App.css';
import Order from './components/Order';

class OrdersApp extends React.Component {
  render() {
    const orders = [
      {
        id: 102,
        user: "cena@gmail.com",
        product: "Razer Headphone",
        price: {
          value: 99.99,
          currency: "dollars"
        }
      },
      {
        id: 77,
        user: "cena@gmail.com",
        product: "Monster 500mL",
        price: {
          value: 9.99,
          currency: "dollars"
        }
      },
      {
        id: 170,
        user: "teste@gmail.com",
        product: "Playstation 5",
        price: {
          value: 599,
          currency: "dollars"
        }
      },
    ];

    return (
      <div className="App">
        <h1> Orders recently created </h1>
         {/* <Order order={headphone}/> */}
         <Order orders={orders}/>
      </div>
    );
  }
}

export default OrdersApp;