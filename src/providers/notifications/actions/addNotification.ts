import {notificationsDispatch} from '../index';
import {NotificationActions} from './notificationActionTypes';
import removeNotification from './removeNotification';

export interface INotificationProps {
  id: number;
  description: string;
  type: 'success' | 'error' | 'info';
  title: string;
}

const DELAY_INTERVAL = 5000;

const addNotification = (notification: INotificationProps): void => {
  notificationsDispatch({
    type: NotificationActions.ADD_NOTIFICATION,
    payload: notification,
  });
  setTimeout(removeNotification, DELAY_INTERVAL, notification.id);
};

export default addNotification;
