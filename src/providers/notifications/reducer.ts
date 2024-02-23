import {INotification} from './index';
import {
  NotificationActions,
  TNotificationAction,
} from './actions/notificationActionTypes';

export type INotificationsProviderState = {
  data: INotification[];
};

export const defaultUserState: INotificationsProviderState = {
  data: [],
};

export default (
  state: INotificationsProviderState,
  action: TNotificationAction,
) => {
  const {type, payload} = action;

  switch (type) {
    case NotificationActions.ADD_NOTIFICATION: {
      return {...state, data: [...state.data, payload]};
    }
    case NotificationActions.REMOVE_NOTIFICATION: {
      const newList = state.data.filter(item => item.id !== payload);

      return {...state, data: newList};
    }
    case NotificationActions.CLEAR_ALL_NOTIFICATIONS: {
      return {...state, data: []};
    }
    default: {
      return state;
    }
  }
};
