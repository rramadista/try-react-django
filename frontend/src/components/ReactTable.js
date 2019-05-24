import React from 'react'
import ReactTable from 'react-table';
import 'react-table/react-table.css';


const ReactTableExample = props => {
    return (
        <ReactTable
            data={props.data}
            columns={props.columns}
            defaultPageSize={5}
            showPaginationTop={false}
        />
    );
}

export default ReactTableExample;