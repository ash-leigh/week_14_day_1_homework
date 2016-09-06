var React = require('react');
var MoviesList = require('./MoviesList');
var MovieShowTimes = require('./MovieShowTimes');
var sampleMovies = [
  {id: 1, title: "  The Man Who Fell to Earth", url: "http://www.imdb.com/title/tt0074851?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1WGGECSA7GPMH51FHRB2&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t0"},
  {id: 2, title: "Don't Breathe", url: "http://www.imdb.com/title/tt4160708?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1WGGECSA7GPMH51FHRB2&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t1"},
  {id: 3, title: "Kubo and the Two Strings", url: "http://www.imdb.com/title/tt4302938?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1WGGECSA7GPMH51FHRB2&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t2"}
]

var MoviesBox = React.createClass({

  getInitialState: function(){
    return {data: sampleMovies};
  },

  render: function(){
    return(
      <div className='movies-box'>
        <h1>Latest movies</h1>
        <MoviesList data={this.state.data}/>
        <MovieShowTimes />
      </div>
    )
  }

})

module.exports = MoviesBox;