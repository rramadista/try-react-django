import React, { Component } from 'react';
import ReactFormExample from '../components/ReactFinalForm';
import {
    Card, CardBody
} from 'reactstrap';


class OfficeCreate extends Component {


    render() {
        return (
            <div>
                <h2>Create New Office</h2>
                <p>This is a simple example of a React Final Form component.</p>
                <Card>
                    <CardBody>
                        <ReactFormExample />
                    </CardBody>
                </Card>
            </div>
        )
    }
};

export default OfficeCreate;