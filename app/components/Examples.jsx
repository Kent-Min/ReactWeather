var React = require ('react');
var {Link}=require('react-router'); //this is required when using link


// var Examples = React.createClass({
//   render: function () {
//     return (
//       <h3>Examples Component</h3>
//     );
//   }
//
//
// });


var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out!</p>
      <ol>
        <li>
          <Link to='/?location=Milwaukee'>Milwaukee, WI</Link>
        </li>
        <li>
          <Link to='/?location=Wuhan'>Wuhan, Hubei</Link>
        </li>
      </ol>
    </div>

  )
}

module.exports=Examples;
