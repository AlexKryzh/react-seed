var React    = window.React = require('react'), // assign it to winow for react chrome extension
    ReactDOM    = window.ReactDOM = require('react-dom'),
    Header   = require('./header'),
    Content  = require('./router'),
    App;


App = React.createClass({
    render: function () {
        return <div>
          <Header/>
          <div className="container content">
              <Content/>
          </div>
        </div>;
    }
});

App.start = function () {
  ReactDOM.render(<App/>, document.getElementById('app'));
};

module.exports = window.App = App;