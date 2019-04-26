import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import thunk from 'redux-thunk';
import postorderActions, {
  postorderRequest,
  postorderSuccess,
  postorderFailure
} from '.';
import * as types from '../../constants/postorderTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const serverUrl = process.env.REACT_APP_BASE_URL;

const payload = {
  cart_id: '1xh7q2zfdhjuijim70',
  customer_id: '1',
  shipping_id: '3',
  tax_id: '2'
};

describe('post order action', () => {
  let mock;
  let store;
  let url;
  beforeEach(() => {
    store = mockStore({});
    mock = new MockAdapter(axios);
    url = `${serverUrl}/orders`;
  });

  afterEach(() => {
    mock.reset();
    mock.restore();
    store.clearActions();
  });

  it('should try to post an order', () => {
    const expectedAction = {
      type: types.POST_ORDER_REQUEST
    };
    expect(postorderRequest({})).toEqual(expectedAction);
  });

  it('should post an order successfully', () => {
    const data = 'successfully';
    const expectedActions = {
      type: types.POST_ORDER_SUCCESS,
      data
    };
    expect(postorderSuccess(data)).toEqual(expectedActions);
  });

  // it('should try to post an order and fail', done => {
  //   mock.onPost(url).reply(400);
  //   const expectedAction = [
  //     { type: types.POST_ORDER_REQUEST },
  //     {
  //       errors: 'Request failed with status code 400',
  //       type: types.POST_ORDER_FAILURE
  //     }
  //   ];
  //   store
  //     .dispatch(postorderActions(payload))
  //     .then(() => {
  //       expect(store.getActions()).toEqual(expectedAction);
  //     })
  //     .then(done)
  //     .catch(done.fail);
  // });

  it('should post an order successfully', done => {
    mock.onPost(url).reply(200);
    const expectedAction = [
      { type: types.POST_ORDER_REQUEST },
      { type: types.POST_ORDER_SUCCESS }
    ];
    store
      .dispatch(postorderActions(payload))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      })
      .then(done)
      .catch(done.fail);
  });
});
