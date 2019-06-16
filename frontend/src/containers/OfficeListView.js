import React, { Component } from 'react';
// import axios from 'axios';
import ReactTableExample from '../components/ReactTable';
import columns from '../utils/_columns';
import { connect } from 'react-redux';
import {
    fetchOffices
} from '../services/actions';

class OfficeList extends Component {

    state = {
        data: [],
        limit: 0,
        offset: 0,
        search: '',
        ordering: '',
        offices: [],
        // pages: null,
        loading: false
    }

    componentWillMount() {
        // axios.get(`http://127.0.0.1:8000/office/?limit=&offset=&search=&ordering=-id`)
        //     .then(res => {
        //         this.setState({
        //             data: res.data,
        //         });
        //         console.log(res.data);
        //     })
        // this.fetchData()
        // this.props.loadData()
        this.props.fetchOffices()
    }

    render() {
        return (
            <div>
                <h2>Office</h2>
                <p>This is a simple example of a React Table component.</p>
                <ReactTableExample
                    columns={columns}
                    data={this.props.offices}
                    loading={this.props.loading}
                />
            </div>
        )
    }
};

const mapStateToProps = state => ({
    loading: state ? state.loading : false,
    offices: state ? state.offices : [],
    error: state ? state.error : null,
})

const mapDispatchToProps = dispatch => ({
    fetchOffices: () => dispatch(fetchOffices())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OfficeList);