var React = require('react');
var Movie = require('./Movie');

propTypes: {

}

var MoviesList = React.createClass({

  render: function(){

    var movieNodes = this.props.data.map(
        function(movie){
          <Movie id={movie.id} key={movie.id}url={movie.ur}>{movie.title}</Movie>
        }
      )
    return (
      <div className='movie-list'>
        {movieNodes}
      </div>
    )
  }
})

module.exports = MoviesList;