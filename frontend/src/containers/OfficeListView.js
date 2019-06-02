import React, { Component } from 'react';
import axios from 'axios';
import ReactTableExample from '../components/ReactTable';
// import data from '../utils/_data';
import columns from '../utils/_columns';

class OfficeList extends Component {

    state = {
        offices: [],
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/`)
            .then(res => {
                this.setState({
                    offices: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <h2>Office</h2>
                <p>This is a simple example of a React Table component.</p>
                <ReactTableExample
                    data={this.state.offices}
                    columns={columns}
                />
            </div>
        )
    }
};

export default OfficeList;