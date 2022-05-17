import React, { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return (
      conteudos.map(({ conteudo, bloco, status}) => (
        <div className="content">
          <ul>
            <li>
              <p>O conteúdo é: {conteudo}</p>
              <ul>
                <li>Status: {status}</li>
                <li>Bloco: {bloco}</li>
              </ul>
            </li>
          </ul>
        </div>
      ))
    )
  }
}

export default Content