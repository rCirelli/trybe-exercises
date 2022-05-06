// /src/components/Album.js
import React from 'react';

class Album extends React.Component {
  render() {
    const { image, title, releaseDate, others} = this.props.album;

    return (
      <section>
        <img src={ image } alt={ title } />
        <h2>{ title }</h2>
        <p>{ releaseDate.year }</p>
        <p>
          Lançamento:
          { `${ releaseDate.day }/${ releaseDate.month }/${ releaseDate.year }` }
        </p>
        <p>Gravadora: { others.recordCompany }</p>
        <p>Formatos: { others.formats }</p>
      </section>
    );
  }
}

export default Album;