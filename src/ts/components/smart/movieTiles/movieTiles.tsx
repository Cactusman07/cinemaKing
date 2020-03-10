/* movieTiles.tsx */

import * as React from 'react';
import BackgroundImageOnLoad from 'background-image-on-load';

import './movieTiles.scss';

interface MovieProps {
  name: string;
  releaseDate: string;
  imgURL: string;
  rank: number;
}

export class MovieTile extends React.Component<MovieProps, any> {
  public constructor(props: any) {
    super(props);
    this.state = {
      bgIsLoaded: false
    }
  }

  public render() {
    const { bgIsLoaded } = this.state;
    return (
      <div className="movie-tile" style={{backgroundImage: `url(${!bgIsLoaded ? '' : this.props.imgURL})`}}>
        <BackgroundImageOnLoad
          src={'https://media.giphy.com/media/VseXvvxwowwCc/giphy.gif'}
          onLoadBg={() =>
          this.setState({
            bgIsLoaded: true
          })}
          onError={err => console.log(err)}
        />
        <div className="rank">{this.props.rank}.</div>
        <div className="title-date">{this.props.name} <span>({this.props.releaseDate.substring(0,4)})</span></div>
      </div>
    );
  }
}
