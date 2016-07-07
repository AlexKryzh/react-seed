import * as React from 'react';
import { Link } from 'react-router';

export default class PageView extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { loaded: false };
    }
    
    render() {
        return <div>
            <h1>Page</h1>
            <p>Test page</p>
            <div><Link to='/'>back to home</Link></div>
        </div>;
    }
}