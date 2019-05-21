import React, { Component } from 'react'
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import data from './_data';
import columns from './_columns';


export default class ReactTableExample extends Component {
    render() {

        // const columns = [
        //     {
        //         Header: 'Name',
        //         accessor: 'name' // String-based value accessors!
        //     }, {
        //         Header: 'Age',
        //         accessor: 'age',
        //         Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        //     }, {
        //         id: 'friendName', // Required because our accessor is not a string
        //         Header: 'Friend Name',
        //         accessor: d => d.friend.name // Custom value accessors!
        //     }, {
        //         Header: props => <span>Friend Age</span>, // Custom header components!
        //         accessor: 'friend.age'
        //     }
        // ]

        return (
            <ReactTable
                data={data}
                columns={columns}
                defaultPageSize={10}
                showPaginationTop={true}
                showPaginationBottom={false}
            />
        );
    }
}