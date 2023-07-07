import {SIGNUP, SIGNUP_ERROR, SIGNUP_SUCCESS} from '../../actions/authenticate';

const initialState = {
  signup_data: null,
  signup_error: '',
  loading: false,
};

export default function signupReducer(state = initialState, action) {
  const {payload, type} = action;

  switch (type) {
    case SIGNUP: {
      return {...state, loading: true};
    }
    case SIGNUP_SUCCESS: {
      return {...state, signup_data: payload, loading: false};
    }
    case SIGNUP_ERROR: {
      return {...state, signup_error: payload, loading: false};
    }
    default:
      return state;
  }
}
