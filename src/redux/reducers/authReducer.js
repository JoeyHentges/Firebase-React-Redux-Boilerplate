const initialState = {
  authError: null,
};

export const authReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      newState.authError = null;
      break;

    case 'SIGNIN_ERROR':
      newState.authError = action.error.message;
      break;

    case 'SIGNOUT_SUCCESS':
      newState.authError = null;
      break;

    case 'SIGNOUT_ERROR':
      newState.authError = action.error.message;
      break;

    case 'SIGNUP_SUCCESS':
      newState.authError = null;
      break;

    case 'SIGNUP_ERROR':
      newState.authError = action.error.message;
      break;

    case 'FORGOT_PASSWORD_SUCCESS':
      newState.authError = null;
      break;

    case 'FORGOT_PASSWORD_ERROR':
      newState.authError = action.error.message;
      break;

    default:
      return newState;
  }
  return newState;
};
