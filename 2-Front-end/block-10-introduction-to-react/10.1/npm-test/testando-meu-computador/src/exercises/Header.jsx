import React, { Component } from "react";
// import './exercises.css'; // ? só é necessário importar o CSS na raiz do componente (no caso, o App)

class Header extends React.Component {
  render() {
    return (
      <h1 className="header">Conteúdos de Front-End</h1>
    )
  }
}

export default Header