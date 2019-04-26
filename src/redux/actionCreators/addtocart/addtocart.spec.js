import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import thunk from 'redux-thunk';
import addtocartActions, {
  addtocartRequest,
  addtocartSuccess,
  addtocartFailure
} from '.';
import * as types from '../../constants/addtocartTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const serverUrl = process.env.REACT_APP_BASE_URL;

const payload = {
  cart_id: '1xh7q2zfdhjuijim70',
  product_id: '1',
  attributes: 'Red, L'
};

describe('shoppingcart action', () => {
  let mock;
  let store;
  let url;
  beforeEach(() => {
    store = mockStore({});
    mock = new MockAdapter(axios);
    url = `${serverUrl}/shoppingcart/add`;
  });

  afterEach(() => {
    mock.reset();
    mock.restore();
    store.clearActions();
  });

  it('should try to add product to cart', () => {
    const expectedAction = {
      type: types.ADD_TO_CART_REQUEST
    };
    expect(addtocartRequest({})).toEqual(expectedAction);
  });

  it('should add a product to cart successfully', () => {
    const data = 'successfully';
    const expectedActions = {
      type: types.ADD_TO_CART_SUCCESS,
      data
    };
    expect(addtocartSuccess(data)).toEqual(expectedActions);
  });

  // it('should try to add product to cart and fail', done => {
  //   mock.onPost(url).reply(400);
  //   const expectedAction = [
  //     { type: types.ADD_TO_CART_REQUEST },
  //     {
  //       errors: 'Request failed with status code 400',
  //       type: types.ADD_TO_CART_FAILURE
  //     }
  //   ];
  //   store
  //     .dispatch(addtocartActions(payload))
  //     .then(() => {
  //       expect(store.getActions()).toEqual(expectedAction);
  //     })
  //     .then(done)
  //     .catch(done.fail);
  // });

  it('should add to cart successfully', done => {
    mock.onPost(url).reply(200);
    const expectedAction = [
      { type: types.ADD_TO_CART_REQUEST },
      { type: types.ADD_TO_CART_SUCCESS }
    ];
    store
      .dispatch(addtocartActions(payload))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      })
      .then(done)
      .catch(done.fail);
  });
});
