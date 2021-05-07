import { ActionType } from '../action-types';

export interface SignInAction {
  type: ActionType.SIGN_IN;
  payload: number
}

export interface SignOutAction {
  type: ActionType.SIGN_OUT;
}

export type Action = SignInAction | SignOutAction;