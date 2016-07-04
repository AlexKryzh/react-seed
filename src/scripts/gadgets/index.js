var React = require('react'),
    Item  = require('./item'),
    List;

List = React.createClass({
    getInitialState: function () {
        return { gadgets: [] };
    },
    componentWillMount: function () {
        this.fetchLatestNews();
    },
    fetchLatestNews: function () {
        this.setState({ 
            gadgets: [ 
                { id: 1, name: 'Elephone P9000', url: 'http://www.elephone.hk/elephone-p9000-specs-features-purchase'},
                { id: 2, name: 'Elephone S3', url: 'http://www.elephone.hk/elephone-s3-bezelless-android-6-smartphone'}
            ]
        });
    },
    render: function () {
        return <ol className="gadgets">
            {this.state.gadgets.map(function (gadget) {
                return <Item key={gadget.id} gadget={gadget}/>
            })}
        </ol>;
    }
});

module.exports = List;