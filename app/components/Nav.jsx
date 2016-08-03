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


var Nav= React.createClass ({
  onSearch: function (e) {
    e.preventDefault();
    alert('not yet wired up');
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
            </li>
            <li>
              <IndexLink to = "Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
            </li>

          </ul>

        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search Weather">

                </input>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"></input>
              </li>
            </ul>
          </form>
        </div>

      </div>

        );
  }


});


module.exports = Nav;

var old = (
  <div>
    <h2>Nav Component</h2>
    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
    <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
    <IndexLink to = "Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>

  </div>
  // <a href="#/about">go to about</a>

)
