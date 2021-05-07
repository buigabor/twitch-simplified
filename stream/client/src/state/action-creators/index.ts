import { ActionType } from '../action-types';

export const signIn = (userId: number) => {
  return { type: ActionType.SIGN_IN, payload: userId };
};
export const signOut = () => {
  return { type: ActionType.SIGN_OUT };
};
