import React from 'react'
import ReactTable from 'react-table';
import 'react-table/react-table.css';


const ReactTableExample = props => {
    return (
        <ReactTable
            data={props.data}
            columns={props.columns}
            defaultPageSize={10}
            showPaginationTop={true}
            showPaginationBottom={false}
        />
    );
}

export default ReactTableExample;