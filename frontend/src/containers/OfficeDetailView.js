import React, { Component } from 'react';
import axios from 'axios';
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
    Button
} from 'reactstrap';

class OfficeDetail extends Component {

    state = {
        office: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/${id}`)
            .then(res => {
                this.setState({
                    office: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <h1>Office Detail</h1>
                <p>This is a simple example of a Reactstrap Card component.</p>
                <Card>
                    <CardHeader tag="h3">{this.state.office.office_name}</CardHeader>
                    <CardBody>
                        <CardTitle>{this.state.office.city}, {this.state.office.province}</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </CardBody>
                    <CardFooter className="text-muted">Footer</CardFooter>
                </Card>
            </div>
        )
    }
};

export default OfficeDetail;