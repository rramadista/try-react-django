import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
    Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import ReactLeafletExample from '../components/ReactLeaflet';

class OfficeDetail extends Component {

    state = {
        office: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/office/${id}`)
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
                <h2>Office Detail</h2>
                <p>This is a simple example of a Reactstrap Card component.</p>
                <Card>
                    <CardHeader tag="h3">{this.state.office.office_name}</CardHeader>
                    <CardBody>
                        <CardTitle>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;
                            {this.state.office.province} | <strong>{this.state.office.city}</strong>
                        </CardTitle>
                        <ReactLeafletExample
                            latitude={this.state.office.latitude}
                            longitude={this.state.office.longitude}
                            officeName={this.state.office.office_name}
                        />
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button size="sm" outline color="success" tag={Link} to="/office">Return</Button>
                    </CardBody>
                    <CardFooter className="text-muted">
                        <a href="https://www.bankmega.com">Bank Mega</a> &copy; 2019 OD HCMG
                    </CardFooter>
                </Card>
            </div>
        )
    }
};

export default OfficeDetail;