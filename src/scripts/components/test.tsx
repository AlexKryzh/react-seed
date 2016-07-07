import * as React from 'react';

export interface TestProps {
    library: string;
}

export default class Test extends React.Component<TestProps, any> {
    constructor(props: TestProps) {
        super(props);
    }

    render() {
        return <p>Test {this.props.library}</p>;
    }
}