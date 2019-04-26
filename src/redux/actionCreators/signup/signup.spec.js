import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import thunk from 'redux-thunk';
import signupActions, {
  signupRequest,
  signupSuccess,
  signupFailure
} from '.';
import * as types from '../../constants/signupTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const serverUrl = process.env.REACT_APP_BASE_URL;

const payload = {
  name: 'Paxton Mboya',
  email: 'asheuh@gmail.com',
  password: 'skunk1234',
};

describe('authenticate action', () => {
  let mock;
  let store;
  let url;
  beforeEach(() => {
    store = mockStore({});
    mock = new MockAdapter(axios);
    url = `${serverUrl}/customers`;
  });

  afterEach(() => {
    mock.reset();
    mock.restore();
    store.clearActions();
  });

  it('should try to signup a user', () => {
    const expectedAction = {
      type: types.SIGNUP_REQUEST
    };
    expect(signupRequest({})).toEqual(expectedAction);
  });

  it('should signup user successfully', () => {
    const data = 'successfully';
    const expectedActions = {
      type: types.SIGNUP_SUCCESS,
      data
    };
    expect(signupSuccess(data)).toEqual(expectedActions);
  });

  // it('should try to login user and fail', done => {
  //   mock.onPost(url).reply(400);
  //   const expectedAction = [
  //     { type: types.SIGNUP_REQUEST },
  //     {
  //       errors: 'Request failed with status code 400',
  //       type: types.SIGNUP_FAILURE
  //     }
  //   ];
  //   store
  //     .dispatch(signupActions(payload))
  //     .then(() => {
  //       expect(store.getActions()).toEqual(expectedAction);
  //     })
  //     .then(done)
  //     .catch(done.fail);
  // });

  it('should signup successfully', done => {
    mock.onPost(url).reply(200);
    const expectedAction = [
      { type: types.SIGNUP_REQUEST },
      { type: types.SIGNUP_SUCCESS }
    ];
    store
      .dispatch(signupActions(payload))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      })
      .then(done)
      .catch(done.fail);
  });
});
