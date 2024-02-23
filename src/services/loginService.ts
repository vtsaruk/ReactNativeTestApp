import {apiRequest} from '../core/api/apiRequest';
import {LOGIN} from '../core/api/constants';
import setUser from '../providers/users/actions/setUser';
import addNotification from '../providers/notifications/actions/addNotification';

interface ILoginServiceProps {
  email: string;
  password: string;
}

const loginService = async (data: ILoginServiceProps): Promise<any> => {
  try {
    const user = await apiRequest({
      purpose: LOGIN,
      payload: {
        method: 'POST',
        // @ts-ignore
        data,
      },
      showNotification: 'error',
    });
    setUser(user);
    addNotification({
      id: Date.now(),
      description: `Hello ${data.email}`,
      title: '',
      type: 'info',
    });
  } catch (error) {
    console.log('error', error);
  }
};

export default loginService;
