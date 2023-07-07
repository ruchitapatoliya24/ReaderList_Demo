import {LOGIN, LIST1_ERROR, LIST1_SUCCESS} from '../../actions/authenticate';

const initialState = {
  login_data: null,
  LIST1_ERROR: '',
  loading: false,
};

export default function loginReducer(state = initialState, action) {
  const {payload, type} = action;

  switch (type) {
    case LOGIN: {
      return {...state, loading: true};
    }
    case LIST1_SUCCESS: {
      return {...state, login_data: payload, loading: false};
    }
    case LIST1_ERROR: {
      return {...state, LIST1_ERROR: payload, loading: false};
    }
    default:
      return state;
  }
}
