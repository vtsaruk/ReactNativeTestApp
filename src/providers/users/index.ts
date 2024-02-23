import createProvider from '../../core/packages/provider/Provider';
import useReducer, {IUserProviderState, defaultUserState} from './reducer';
export interface IUser {
  id: number;
  name: string;
  email: string;
  userRole: TUserRole;
}

export type TUserRole = 'user' | 'public';

export const {
  Provider: UserProvider,
  useState: userUseState,
  useDispatch: useUserDispatch,
  getState: getUserState,
  dispatch: userDispatch,
} = createProvider<IUserProviderState>(useReducer, defaultUserState);
// @ts-ignore
export const useUser = (): IUser => userUseState().data;
