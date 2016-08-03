var React = require ('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
//
//
// });



var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About Component111</h1>
      <p>This is a waether application build on react.</p>
      <p>
        Here are some of the tools I used
      </p>
      <ul>
        <li>
          <a href="http://facebook.github.io/react">React</a> - This was the JaveScript Framework used.
        </li>
        <li>
          <a href="http=openWeatherMap.org">open weather map</a> - I used open wather map to search for the weather
        </li>
      </ul>
    </div>
  )
};

module.exports=About;
