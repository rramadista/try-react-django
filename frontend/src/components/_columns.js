import React from 'react'

export const columns = [
    {
        Header: 'Office Name',
        accessor: 'office_name',
        Footer: (<span><strong>Number of Office: </strong>376</span>)
    }, {
        Header: 'Start Date',
        accessor: 'start_date',
        Cell: props => <span className='date'>{props.value}</span>
    }, {
        Header: 'Active',
        accessor: 'is_active',
        Cell: props => <span className='boolean'>{props.value}</span>
    }, {
        Header: 'Branch ID',
        accessor: 'branch_id'
    }
]

export default columns;