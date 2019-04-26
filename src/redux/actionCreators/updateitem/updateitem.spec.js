import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import thunk from 'redux-thunk';
import updateItemActions, {
  updateItemRequest,
  updateItemSuccess,
  updateItemFailure
} from '.';
import * as types from '../../constants/updateItemTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const serverUrl = process.env.REACT_APP_BASE_URL;

const payload = {
  quantity: '4',
  item_id: '3'
};

describe('update cart action', () => {
  let mock;
  let store;
  let url;
  let itemId;
  beforeEach(() => {
    store = mockStore({});
    mock = new MockAdapter(axios);
    itemId = '3';
    url = `${serverUrl}/shoppingcart/update/${itemId}`;
  });

  afterEach(() => {
    mock.reset();
    mock.restore();
    store.clearActions();
  });

  it('should try to update cart', () => {
    const expectedAction = {
      type: types.UPDATE_ITEM_REQUEST
    };
    expect(updateItemRequest({})).toEqual(expectedAction);
  });

  it('should update cart successfully', () => {
    const data = 'successfully';
    const expectedActions = {
      type: types.UPDATE_ITEM_SUCCESS,
      data
    };
    expect(updateItemSuccess(data)).toEqual(expectedActions);
  });

  // it('should try to update cart and fail', done => {
  //   mock.onPut(url).reply(400);
  //   const expectedAction = [
  //     { type: types.UPDATE_ITEM_REQUEST },
  //     {
  //       errors: 'Request failed with status code 400',
  //       type: types.UPDATE_ITEM_FAILURE
  //     }
  //   ];
  //   store
  //     .dispatch(updateItemActions(payload))
  //     .then(() => {
  //       expect(store.getActions()).toEqual(expectedAction);
  //     })
  //     .then(done)
  //     .catch(done.fail);
  // });

  it('should update cart successfully', done => {
    mock.onPut(url).reply(200);
    const expectedAction = [
      { type: types.UPDATE_ITEM_REQUEST },
      { type: types.UPDATE_ITEM_SUCCESS }
    ];
    store
      .dispatch(updateItemActions(payload))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      })
      .then(done)
      .catch(done.fail);
  });
});
