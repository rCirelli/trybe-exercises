const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPers = order.order.delivery.deliveryPerson;
  const customerName = order.name;
  const customerPhone = order.phoneNumber;
  const customerAddr = Object.values(order.address);
  const streetName = customerAddr[0];
  const addressNumber = customerAddr[1];
  const apartmentNumber = customerAddr[2];
  return `Olá ${deliveryPers},
  entrega para: ${customerName}, Telefone: ${customerPhone},
  ${streetName}, Nº: ${addressNumber}, AP: ${apartmentNumber}`;
}

// console.log(customerInfo(order));

const orderModifier = (order) => {
  const customerName = order.name;
  const pizzas = Object.keys(order.order.pizza);
  const drinkTypes = Object.keys(order.order.drinks);
  const drinks = [];
  for (let drink in drinkTypes) {
    const drinkName = Object.values(order.order.drinks)[drink].type;
    drinks.push(drinkName)
  }
  const subtotal = Object.assign(order.payment, Object.defineProperty(order.payment, 'total', {total: 60,}));
  return `Olá ${customerName}, o total do seu pedido de ${pizzas} e ${drinks} é R$ ${Object.values(order.payment)}`;
}

console.log(orderModifier(order));
