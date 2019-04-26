import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import thunk from 'redux-thunk';
import loginActions, {
  loginRequest,
  loginSuccess,
  loginFailure
} from '.';
import * as types from '../../constants/loginTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const serverUrl = process.env.REACT_APP_BASE_URL;

const payload = {
  email: 'asheuh@gmail.com',
  password: 'skunk1234'
};

describe('authenticate action', () => {
  let mock;
  let store;
  let url;
  beforeEach(() => {
    store = mockStore({});
    mock = new MockAdapter(axios);
    url = `${serverUrl}/customers/login`;
  });

  afterEach(() => {
    mock.reset();
    mock.restore();
    store.clearActions();
  });

  it('should try to login a user', () => {
    const expectedAction = {
      type: types.LOGIN_REQUEST
    };
    expect(loginRequest({})).toEqual(expectedAction);
  });

  it('should login user successfully', () => {
    const data = 'successfully';
    const expectedActions = {
      type: types.LOGIN_SUCCESS,
      data
    };
    expect(loginSuccess(data)).toEqual(expectedActions);
  });

  // it('should try to login user and fail', done => {
  //   mock.onPost(url).reply(400);
  //   const expectedAction = [
  //     { type: types.LOGIN_REQUEST },
  //     {
  //       errors: 'Request failed with status code 400',
  //       type: types.LOGIN_FAILURE
  //     }
  //   ];
  //   store
  //     .dispatch(loginActions(payload))
  //     .then(() => {
  //       expect(store.getActions()).toEqual(expectedAction);
  //     })
  //     .then(done)
  //     .catch(done.fail);
  // });

  it('should login successfully', done => {
    mock.onPost(url).reply(200);
    const expectedAction = [
      { type: types.LOGIN_REQUEST },
      { type: types.LOGIN_SUCCESS }
    ];
    store
      .dispatch(loginActions(payload))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      })
      .then(done)
      .catch(done.fail);
  });
});
