var React = require('react'),
    Header;

Header = React.createClass({
    render: function () {
        return <header>
            <div className="container">
                <h1 className="logo">React Test Seed</h1>
            </div>
        </header>
    }
});

module.exports = Header;