import {
  SIGNUP_FORM_SUBMIT,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  CLEAR_SIGNUP_FORM,
  SIGNUP_FORM,
  EMAIL_VERIFICATION_ERROR,
  EMAIL_VERIFICATION_SUCCESS,
} from '../actions-types';
import { signUp as initialState } from '../initialState';

const signupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLEAR_SIGNUP_FORM:
      return initialState;
    case SIGNUP_FORM_SUBMIT:
      return {
        ...state,
        submitting: payload.submitting,
      };
    case SIGNUP_FORM:
      return {
        ...state,
        [payload.field]: payload.value,
        errors: [],
        message: '',
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        successMessage: payload.message,
        submitting: false,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        message: payload.message,
        errors: payload.errors || [],
        submitting: false,
      };
    case EMAIL_VERIFICATION_SUCCESS:
      return {
        ...state,
        confirmMessage: payload,
      };
    case EMAIL_VERIFICATION_ERROR:
      return {
        ...state,
        confirmMessage: payload,
      };
    default:
      return state;
  }
};

export default signupReducer;
