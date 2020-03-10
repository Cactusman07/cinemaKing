/* movies.tsx */

import * as React from 'react';
import { store } from '@store/store';
import Axios from 'axios';

import * as selectors from '@selectors/selectors';
import * as constants from '@store/constants';

import { Spinner, MovieTile } from '../../index';
import { connect } from 'react-redux';
import { LOAD_MOVIES } from '@actions/actions';

import './movies.scss';

const mapStateToProps = (state: any) => {
  return {
    movies: state.movies
  };
};

export class MoviesComponent extends React.Component<any, any> {
  public constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      movies: selectors.getMovies(store.getState())
    }
  }

  componentDidMount(){
    if(!!this.state.movies && this.state.movies.length > 0){
      this.setState({ isLoading: false });
    } else {
      // Use Axios to GET movies
      try{
        Axios.get(constants.API)
          // tslint:disable-next-line: only-arrow-functions
          .then(function(response){
            if(!!response.data.data.movies){
              store.dispatch({ type: LOAD_MOVIES, payload: response.data.data.movies });
            }
          })
          // tslint:disable-next-line: only-arrow-functions
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          // tslint:disable-next-line: only-arrow-functions
          .then(function () {
            // always executed
          });
          this.setState({ isLoading: false });
      } catch(e) {
        console.log(e);
      }
    }
  }

  public render(){


    return (
      <div id="movieList">
        {this.state.isLoading ? (
          <Spinner />
        ) : null}

        {!this.state.isLoading && this.state.movies.length > 0 && (
          this.state.movies.map(movie => 
            <MovieTile 
              key={movie.name} 
              name={movie.name} 
              imgURL={movie.post_url} 
              rank={movie.rank}
              releaseDate={movie.release_date}
            />
          )
        )}

        {!this.state.isLoading && this.state.movies.length === 0 && (
          <div>No movies... Looks like something went wrong. Please try reloading the page, or come back later. :(</div>
        )}
      </div>
    );
  }
}

export const Movies = connect(mapStateToProps)(MoviesComponent);