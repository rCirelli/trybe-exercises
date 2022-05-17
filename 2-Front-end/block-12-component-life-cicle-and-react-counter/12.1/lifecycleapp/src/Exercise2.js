import React from 'react';
import './App.css';

class Exercise2 extends React.Component {
  state = {
    user: {},
    isLoading: true,
  }

  async componentDidMount() {
    try {
    this.setState(
      { isLoading: true },
      async () => {
      const ENDPOINT = 'https://api.randomuser.me/';
      const response = await fetch(ENDPOINT);
      const data = await response.json();
      this.setState( { user: data.results[0], isLoading: false });
    });
    } catch (error) {
      console.log(error)
    }
  }

  shouldComponentUpdate(_nextProps, { user: { dob }}) {
    if (dob) {
      const userAge = dob.age;
      console.log(userAge);
      return userAge < 50;
    }
    return false;
  }

  userElement = () => {
    const { user } = this.state;
    const { name, picture, email, dob: { age } } = user;
    return (
      <div>
        <img src={ picture.medium } alt={ name }></img>
        <h3>{ `${ name.first } ${ name.last }`}</h3>
        <p>{ email }</p>
        <p>Age: { age }</p>
      </div>
    );
  }
  
  render() {
    const { isLoading } = this.state;

    return (
      <div className="gitNetwork d-flex flex-column justify-content-center">
        { isLoading ? <p>Loading...</p> : this.userElement() }
      </div>
    );
  }
}

export default Exercise2;