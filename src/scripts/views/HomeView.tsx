import * as React from 'react';
import { Link } from 'react-router';
import Test from '../components/test';

var HomeView = React.createClass({
    render: function() {
        return <div>
            <h2>Home Page</h2>
            <Test library='react' />
            <div><Link to='/page'>page</Link></div>
            <div><Link to='/notfound'>404</Link></div>
        </div>;
    }
});

export default HomeView;