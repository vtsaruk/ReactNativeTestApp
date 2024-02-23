import React from 'react';
import {
  NotificationContainer,
  NotificationText,
  NotificationBox,
} from './styled';
import {useNotifications} from '../../../providers/notifications';

const Notification = () => {
  const notifications = useNotifications();

  return (
    <NotificationContainer>
      {notifications.map(item => (
        <NotificationBox key={item.id}>
          <NotificationText>{item.description}</NotificationText>
        </NotificationBox>
      ))}
    </NotificationContainer>
  );
};

export default Notification;
