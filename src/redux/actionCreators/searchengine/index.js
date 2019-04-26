import axios from 'axios';
import * as types from '../../constants/searchengineTypes';
import serializeQuery from '../../../utils/serialize';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const searchSuccess = (data) => ({
  type: types.SEARCH_SUCCESS,
  data
});

export const searchFailure = (errors) => ({
  type: types.SEARCH_FAILURE,
  errors
});

export const searchRequest = () => ({
  type: types.SEARCH_REQUEST
});

const searchActions = (query) => (dispatch, getState) => {
  const { meta } = getState().products;
  const pageQuery = {page: meta.page, limit: meta.pageSize}

  dispatch(searchRequest());
  const url =
    `${baseUrl}/products/search?query_string=${query}&${serializeQuery(pageQuery)}`;
  return axios(url)
    .then(response => dispatch(searchSuccess({
      data: response.data,
      meta: {
        page: 1,
        pageSize: 20,
        total: response.data.count,
      }
    })))
    .catch(error => dispatch(searchFailure(error)))
}

export default searchActions;
