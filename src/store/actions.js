import axios from 'axios';



export const getRemoteData = (name, method, data) => (dispatch, state) => {
    const api = `https://api-js401.herokuapp.com/api/v1/products?category=${name}`;

    return axios({
        method: method,
        url: api,
        data: data
    })
    .then(res => {
        switch (method) {
            case 'get':
                return dispatch(getAction(res.data));
            case 'post':
                return dispatch(postAction(res.data));
            case 'delete':
                return dispatch(deleteAction(res.data));
            case 'put':
                return dispatch(putAction(res.data));
            default:
                break;
        }
    });
}

export const getAction = payload => {
    return {
        type: 'get',
        payload: payload,
    }
}

export const postAction = payload => {
    return {
        type: 'post',
        payload: payload,
    }
}

export const deleteAction = payload => {
    return {
        type: 'delete',
        payload: payload,
    }
}

export const putAction = payload => {
    return {
        type: 'put',
        payload: payload,
    }
}
