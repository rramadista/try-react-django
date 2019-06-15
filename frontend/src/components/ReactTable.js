import React from 'react'
import ReactTable from 'react-table';
import 'react-table/react-table.css';


const ReactTableExample = props => {
    return (
        <ReactTable
            // manual
            columns={props.columns}
            data={props.data}
            defaultPageSize={5}
            pages={props.pages}
            pageSize={props.pageSize}
            loading={props.loading}
            onFetchData={props.fetchData}
            showPaginationTop={false}
            className="-highlight"
        />
    );
}

export default ReactTableExample;