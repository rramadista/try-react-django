import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button } from 'reactstrap';

export const columns = [
    {
        Header: 'Office Name',
        accessor: 'office_name',
        Footer: (<span><strong>Number of Office: </strong>376</span>)
    }, {
        Header: 'Start Date',
        accessor: 'start_date',
        Cell: props => <span>{props.value}</span>,
        maxWidth: 100
    }, {
        Header: 'Status',
        accessor: 'is_active',
        Cell: props => <span>
            <span style={{ color: props.value.toString() === 'false' ? '#ff2e00' : '#57d500', transition: 'all .3s ease' }}>&#x25cf;</span>
            {props.value.toString() === 'true' ? ' Active' : ' Inactive'}
        </span>,
        maxWidth: 100,
        style: { textAlign: "center" }
    }, {
        Header: 'Branch ID',
        accessor: 'branch_id',
        maxWidth: 100,
        style: { textAlign: "center" }
    }, {
        Header: 'Latitude',
        accessor: 'lat',
        maxWidth: 100
    }, {
        Header: 'Longitude',
        accessor: 'long',
        maxWidth: 100
    }, {
        Header: 'Action',
        Cell: props =>
            <span>
                <ButtonGroup size="sm">
                    <Button outline color="secondary" tag={Link} to="/view/">View</Button>
                    <Button outline color="secondary" tag={Link} to="/edit/">Edit</Button>
                    <Button outline color="danger" tag={Link} to="/delete/">Delete</Button>
                </ButtonGroup>
            </span>,
        maxWidth: 200,
        style: { textAlign: "center" }
    }
]

export default columns;