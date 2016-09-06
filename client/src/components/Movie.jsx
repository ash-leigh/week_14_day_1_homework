var React = require('react');

propTypes: {

}

var Movie = React.createClass({

  render: function(){
    return(
      <div className='movie'>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Movie;