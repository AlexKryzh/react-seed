import * as React from 'react';
import { Link } from 'react-router';

export default class NoMatchView extends React.Component<any, any> {
    render() {
        return <div>
            <p>404: Page not found</p>
            <div><Link to='/'>back to home</Link></div>
        </div>;
    }
}