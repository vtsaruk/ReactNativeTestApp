import createProvider from '../../core/packages/provider/Provider';

import useReducer, {
  INotificationsProviderState,
  defaultUserState,
} from './reducer';

export interface INotification {
  id: number;
  description: string;
  type: 'success' | 'error' | 'info';
  title: string;
}

export const {
  Provider: NotificationProvider,
  useState: useNotificationState,
  useDispatch: useNotificationsDispatch,
  getState: getNotificationsState,
  dispatch: notificationsDispatch,
} = createProvider<INotificationsProviderState>(useReducer, defaultUserState);

export const useNotifications = (): INotification[] =>
  useNotificationState().data;
