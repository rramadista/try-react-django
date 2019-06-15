import React, { Component } from 'react';
import axios from 'axios';
import ReactTableExample from '../components/ReactTable';
import columns from '../utils/_columns';
import { connect } from 'react-redux';
import { loadData } from '../services/actions'

class OfficeList extends Component {

    state = {
        offices: [],
        // pages: null,
        // loading: true
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/office/`)
            .then(res => {
                this.setState({
                    offices: res.data,
                    // pages: 383 / 10,
                    pageSize: 5
                });
                console.log(res.data);
            })
    }

    // componentWillMount() {
    //     this.props.loadData();
    //     this.props.fetchData()
    // }

    // fetchData(state, instance) {
    //     this.setState({ loading: true })
    //     axios.get(`http://127.0.0.1:8000/office/`, {
    //         page: state.page,
    //         pageSize: state.pageSize,
    //     })
    //         .then(res => {
    //             this.setState({
    //                 offices: res.data,
    //                 pages: res.data.pages,
    //                 loading: false
    //             })
    //         })
    // }

    // async handleOnFetchData({ url, page, pageSize, sorted }, instance) {

    //     let options = {
    //         method: 'GET',
    //         url: url ? url : `http://127.0.0.1:8000/office/`
    //     }

    //     try {
    //         let { data, totalResults } = await axios(options)

    //         this.setState({
    //             data,
    //             pages: Math.ceil(totalResults / pageSize),
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    render() {
        return (
            <div>
                <h2>Office</h2>
                <p>This is a simple example of a React Table component.</p>
                <ReactTableExample
                    columns={columns}
                    data={this.state.offices}
                // onFetchData={this.state.fetchData}
                // pages={this.state.pages}
                // pageSize={this.state.pageSize}
                // loading={this.state.loading}
                />
            </div>
        )
    }
};

const mapsStateToProps = state => ({
    data: state.data,
})

const mapDispatchToProps = dispatch => ({
    loadData: () => {
        dispatch(loadData());
    }
})

export default connect(
    mapsStateToProps,
    mapDispatchToProps
)(OfficeList);