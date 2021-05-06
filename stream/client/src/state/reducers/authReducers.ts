import produce from 'immer';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export interface UserState {
  isSignedIn: boolean | null;
}

const initialState: UserState = {
  isSignedIn: null,
};

const authReducer = produce((state:UserState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SIGN_IN:
      state.isSignedIn = true;
      return state;
    case ActionType.SIGN_OUT:
      state.isSignedIn = false;
      return state;
    default:
      return state;
  }
});

export default authReducer;
