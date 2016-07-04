var React    = require('react'),
    Router   = require('react-router-component'),
    Gadgets    = require('./gadgets');

var Locations = Router.Locations,
    Location = Router.Location,
    NotFound = Router.NotFound,
    Link = Router.Link;

var HomePage = React.createClass({
  render: function() {
    return (
      <div>
        Hello, this is homepage!
        <p>Proceed to <Link href="/gadgets">gadgets</Link>.</p>
        <p>Proceed to <Link href="/notfound">404</Link>.</p>
      </div>
    )
  }
});

var UndefinedPage = React.createClass({
  render: function() {
    return (
      <div>
        Page is not found :( 
        You can back to <Link href="/">HomePage</Link>.
      </div>
    )
  }
});

var Content = React.createClass({
  render: function() {
    return (
      <Locations>
        <Location path="/" handler={HomePage} />
        <Location path="/gadgets" handler={Gadgets} />
        <NotFound handler={UndefinedPage} />
      </Locations>
    )
  }
});

module.exports = Content;