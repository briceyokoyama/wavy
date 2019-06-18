import React from 'react';
import ArtistIndexItem from '../display/indexes/artists/ArtistIndexItem';

export default (props) => (
  <div className='aritst-index'>
    <ul>
      {props.artists.map(artist => <ArtistIndexItem key={artist.id} artist={artist} />)}
    </ul>
  </div>
)