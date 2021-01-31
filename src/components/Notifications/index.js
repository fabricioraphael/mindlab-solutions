import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications} from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Container, Badge, NotificationList, Notification, Scroll } from './styles';

import api from '~/services/api';

export default function Notifications() {
  const [visible, setVisible]= useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  )

  useEffect(() => {
    async function loadNotifications() {
      // const response = await api.get('notifications');
      const response = { data: [
        {_id: 1, content: 'Novo agendamento com João cliente', createdAt: "2019-12-07T22:31:29.8432Z", read: false },
        {_id: 2, content: 'JIajwdijawid aidajwid awd ia', createdAt: "2019-12-07T22:21:29.8432Z", read: false },
        {_id: 3, content: '#@!@#DA# ADAWDAWD', createdAt: "2019-12-07T22:10:29.8432Z", read: true },
        {_id: 4, content: 'OAWKD kawdk oAKoakwdokaw doAKD Ok', createdAt: "2019-12-07T20:31:29.8432Z", read: false },
        {_id: 5, content: 'AIWJdijawdi JWAID iAJd iajwd', createdAt: "2019-11-06T22:31:29.8432Z", read: true },
      ]};

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        )
      }));

      setNotifications(data);
    }


    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    // await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map( notification => notification._id === id ? { ...notification, read:true } : notification)
    )
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          { notifications.map( notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button onClick={() => handleMarkAsRead(notification._id)} type="button">Marcar como lida</button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
