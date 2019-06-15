// import axios from 'axios';

export const loadData = () => {
    return {
        type: 'LOAD_DATA',
    }
}

export const fetchAction = (payload) => {
    return {
        type: 'FETCH',
        payload: payload
    }
}

// export const fetchThunk = (payload) => {
//     return async (dispatch, getState) => {
//         try {
//             let curr = await getState()
//             let page = 1
//             if (curr) {
//                 page = curr.currentPage
//             }
//             let options = {
//                 method: 'GET',
//                 url: `https://:swapi.co/api/people/?page=${payload}`
//             }
//             let { data } = await axios(options)
//             if (data) {
//                 return dispatch(fetchAction(data))
//             } else {
//                 return dispatch(fetchAction('loading'))
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }