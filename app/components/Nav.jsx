var React = require ('react');
var {Link, IndexLink} = require ('react-router');

// var Nav = React.createClass ({
//   render: function () {
//     return (
//       <div>
//         <h2>Nav Component</h2>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//         <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
//         <IndexLink to = "Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
//         <a href="#/about">go to about</a>
//       </div>
//     );
//   }
//
// });


var Nav= (props) => {
  return (
        <div>
          <h2>Nav Component</h2>
          <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
          <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
          <IndexLink to = "Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
          <a href="#/about">go to about</a>
        </div>
      );

};

module.exports = Nav;
