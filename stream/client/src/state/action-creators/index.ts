import { ActionType } from '../action-types';

export const signIn = () => {
  return { type: ActionType.SIGN_IN };
};
export const signOut = () => {
  return { type: ActionType.SIGN_OUT };
};
