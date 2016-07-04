/** @jsx React.DOM */
var React = require('react'),
    Footer,
    Item;

Footer = React.createClass({
    render: function () {
        var gadget = this.props.gadget;
        return <p>
            <a href="{gadget.url}" target="_blank">{gadget.url}</a>
        </p>;
    }
});

Item = React.createClass({
    render: function () {
        var gadget = this.props.gadget;
        return <li>
            <strong>{gadget.name}</strong>
            <Footer gadget={gadget}/>
       </li>;
    }
});

module.exports = Item;