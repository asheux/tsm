import { INDEX_PAGE_SIZE_DEFAULT } from '../../reducers/initialState';
import * as types from '../../constants/paginateTypes';

export const $pageSize = (
  pageSize = INDEX_PAGE_SIZE_DEFAULT
) => dispatch => {
  if (pageSize < 1) {
    pageSize = 10;
  }
  if (pageSize > 100) {
    pageSize = 100;
  }

  return dispatch({
    type: types.PRODUCTS_PAGINATE_META_DATA,
    meta: {
      page: 1,
      pageSize
    }
  });
}

export const $page = (page = 1, pageTotal) => (dispatch, getState) => {

  if (page < 1) {
    page = 1;
  }

  if (page > pageTotal) {
    page = pageTotal - 1;
  }

  return dispatch({
    type: types.PRODUCTS_PAGINATE_META_DATA,
    meta: {
      page,
    }
  });
}
