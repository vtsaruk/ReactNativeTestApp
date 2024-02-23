import {userDispatch} from '../index';
import {UserActions} from './userActionTypes';
import {IUser} from '../index';

const setUser = (user: IUser): void => {
  userDispatch({type: UserActions.SET_USER, payload: user});
};

export default setUser;
