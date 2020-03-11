/* movieTiles.tsx */

import * as React from 'react';

import './movieTiles.scss';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => {
  return {
    bgIsLoaded: false
  };
};

interface MovieProps {
  name: string;
  releaseDate: string;
  imgURL: string;
  rank: number;
}

export class MovieTileComponent extends React.Component<MovieProps, any> {
  public constructor(props: any) {
    super(props);
    this.state = {
      bgIsLoaded: false
    }
  }

  imageIsLoaded = () => {
    this.setState({
      bgIsLoaded: true
    })
  }

  public render() {
    const { bgIsLoaded } = this.state;
    if(!bgIsLoaded){
      const img = new Image();
      img.src = this.props.imgURL;
      img.onload = () => this.imageIsLoaded();
    }    

    return (
      <div className="movie-tile" style={{backgroundImage: `url(${!bgIsLoaded ? 
        'https://media.giphy.com/media/VseXvvxwowwCc/giphy.gif' : this.props.imgURL})`}}>
        <div className="rank">{this.props.rank}.</div>
        <div className="title-date">{this.props.name} <span>({this.props.releaseDate.substring(0,4)})</span></div>
      </div>
    );
  }
}

export const MovieTile = connect(mapStateToProps)(MovieTileComponent);