var React = require ('react');
var ReactDOM = require ('react-dom');
//destruction
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require ('Main');
var Nav= require ('Nav');
var Weather = require ('Weather');
var About = require ('About');
var Examples = require ('Examples');


// load foundations-sites
require ('style!css!foundation-sites/dist/foundation.min.css')

$(document).foundation();


//app css
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      debugger;
      <Route path = "About" component={About}/>
      <Route path = "Examples" component = {Examples}/>
      <IndexRoute component={Weather}/>

    </Route>
  </Router>,
    document.getElementById('app')
);
