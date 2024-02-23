import {IUser} from './index';
import {UserActions, TUserAction} from './actions/userActionTypes';

export type IUserProviderState = {
  data: IUser;
};

export const defaultUserState: IUserProviderState = {
  data: {
    userRole: 'public',
    id: 0,
    name: '',
    email: '',
  },
};

export default (state: IUserProviderState, action: TUserAction) => {
  const {type, payload} = action;
  switch (type) {
    case UserActions.SET_USER: {
      return {...state, data: payload};
    }
    case UserActions.LOGOUT: {
      return defaultUserState;
    }
    default: {
      return state;
    }
  }
};
