import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button } from 'reactstrap';

export const columns = [
    {
        Header: 'Office',
        columns: [
            {
                Header: 'Office Name',
                accessor: 'office_name',
                Footer: props => <span><strong>Number of Office: </strong>{props.data.length}</span>
            }, {
                Header: 'Start Date',
                accessor: 'start_date',
                Cell: props => <span>{moment(props.value).format("DD MMM YY")}</span>,
                maxWidth: 100
                // }, {
                //     Header: 'Status',
                //     accessor: 'is_active',
                //     Cell: props => <span>
                //         <span style={{ color: props.value.toString() === 'false' ? '#ff2e00' : '#57d500', transition: 'all .3s ease' }}>&#x25cf;</span>
                //         {props.value.toString() === 'true' ? ' Active' : ' Inactive'}
                //     </span>,
                //     maxWidth: 100,
                //     style: { textAlign: "center" }
            }, {
                Header: 'Branch ID',
                accessor: 'branch_id',
                maxWidth: 100,
                style: { textAlign: "center" }
            },

        ]
    },
    {
        Header: 'Location',
        columns: [
            {
                Header: 'Latitude',
                accessor: 'latitude',
                maxWidth: 100
            }, {
                Header: 'Longitude',
                accessor: 'longitude',
                maxWidth: 100
            },
        ],
        minWidth: 200,
    },
    {
        columns: [
            {
                Header: 'Action',
                accessor: 'id',
                Cell: props =>
                    <span>
                        <ButtonGroup size="sm">
                            <Button outline color="secondary" tag={Link} to={`/office/${props.value}`}>View</Button>
                            <Button outline color="secondary" tag={Link} to="/edit/">Edit</Button>
                            <Button outline color="danger" tag={Link} to="/delete/">Delete</Button>
                        </ButtonGroup>
                    </span>,
                maxWidth: 180,
                style: { textAlign: "center" }
            }

        ],
        Width: 180,
    }
]

export default columns;