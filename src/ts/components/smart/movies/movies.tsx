/* movies.tsx */

import * as React from 'react';
import { store } from '@store/store';

import * as selectors from '@selectors/selectors';
import API from 'ts/utils/utils';

import { Spinner, MovieTile } from '../../index';
import { connect } from 'react-redux';
import { LOAD_MOVIES } from '@actions/actions';

import './movies.scss';

const mapStateToProps = (state: any) => {
  return {
    movies: selectors.getMovies(state)
  }
}

export class MoviesComponent extends React.Component<any, any> {
  public constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      showError: false,
      movies: null
    }
  }

  async componentDidMount(){
    if(!this.props.movies){
      try {
        let movieData = await API.get('', {
          params: {
            results: 9
          }
        });
        movieData = movieData.data.data.movies;
        store.dispatch({ type: LOAD_MOVIES, payload: movieData });
  
        this.setState({ isLoading: false });
        this.setState({ movies: movieData });
      } catch(e){
        console.log(`Axios request failed: ${e}`);
        this.setState({ showError: true });
        this.setState({ isLoading: false });
      }
    } else {
      this.setState({ isLoading: false });
    }
  }

  public render(){
    return (
      <div id="movieList">
        {this.state.isLoading ? (
          <Spinner />
        ) : null}

        {!this.state.isLoading && !!this.props.movies && (
          this.props.movies.map(movie => 
            <MovieTile 
              key={movie.name} 
              name={movie.name} 
              imgURL={movie.post_url} 
              rank={movie.rank}
              releaseDate={movie.release_date}
            />
          )
        )}

        {this.state.showError && (
          <div>No movies... Looks like something went wrong. Please try reloading the page, or come back later. :(</div>
        )}
      </div>
    );
  }
}

export const Movies = connect(mapStateToProps)(MoviesComponent);