import React from 'react';
import './App.css';
import Profile from './components/Exercise1/Profile';
import Connections from './components/Exercise1/Connections';

class Exercise1 extends React.Component {
  constructor() {
    super()
    this.changeProfile = this.changeProfile.bind(this);

    this.state = {
      showProfile: true,
    }
  }

  changeProfile() {
    const { showProfile } = this.state;

    this.setState({ showProfile: !showProfile });
  }

  render() {
    const { showProfile } = this.state;
    return (
      <div className="gitNetwork d-flex flex-column justify-content-center">
        { showProfile ? <Profile /> : null }
        <div className="central d-flex justify-content-center">
          <button
            className="btn btn-dark align-self-center"
            type="button"
            onClick={ this.changeProfile }
          >
            Mostrar / Ocultar Perfil
          </button>
        </div>
        <Connections />
      </div>
    );
  }
}

export default Exercise1;