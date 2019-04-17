import axios from 'axios';
import * as types from '../../constants/addtocartTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const addtocartRequest = () => ({
  type: types.ADD_TO_CART_REQUEST
});

export const addtocartSuccess = (data) => ({
  type: types.ADD_TO_CART_SUCCESS,
  data
});

export const addtocartFailure = (errors) => ({
  type: types.ADD_TO_CART_FAILURE,
  errors
});

const addtocartActions = (data) => dispatch => {
  dispatch(addtocartRequest());
  const url = `${baseUrl}/shoppingcart/add`;
  return axios.post(url, data)
      .then(response => dispatch(addtocartSuccess(response.data)))
      .catch(error => dispatch(addtocartFailure(error)));
}

export default addtocartActions;
