import axios from 'axios';

export const fetchOfficesPending = () => {
    return {
        type: 'FETCH_OFFICES_PENDING'
    }
}

export const fetchOfficesSuccess = (payload) => {
    return {
        type: 'FETCH_OFFICES_SUCCESS',
        payload: payload
    }
}

export const fetchOfficesError = (error) => {
    return {
        type: 'FETCH_OFFICES_ERROR',
        payload: error
    }
}

// export const fetchOffices = () => {
//     return dispatch => {
//         dispatch(fetchOfficesPending());
//         axios.get(`http://127.0.0.1:8000/office/?limit=&offset=&search=&ordering=-id`)
//             .then(res => res.json())
//             .then(res => {
//                 if (res.error) {
//                     throw (res.error);
//                 }
//                 dispatch(fetchOfficesSuccess(res.offices));
//                 return res.offices;
//             })
//             .catch(error => {
//                 dispatch(fetchOfficesError(error));
//             })
//     }
// }

export const fetchOffices = () => {
    return async (dispatch, getState) => {
        // dispatch(fetchOfficesPending());
        try {
            let options = {
                method: 'GET',
                url: `http://127.0.0.1:8000/office/?limit=&offset=&search=transmart&ordering=-id`
            }
            let { data } = await axios(options)
            if (data) {
                return dispatch(fetchOfficesSuccess(data))
            } else {
                return dispatch(fetchOfficesPending())
            }
        } catch (error) {
            // console.log(error);
            dispatch(fetchOfficesError(error))
        }
    }
}

