
import { 
    ALL_CATEGORIES_GET,
 } from 'data/constants'

 import API from 'data/fetch';

export const fetchAllCategories = (id) => (dispatch) => {

    const promise = API.common.fetchAllCategories()
    dispatch({
        type: ALL_CATEGORIES_GET,
        promise,
    })
}