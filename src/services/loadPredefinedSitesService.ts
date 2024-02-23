import {apiRequest} from '../core/api/apiRequest';
import {LOAD_PREDEFINED_SITES} from '../core/api/constants';
import setPredefinedSites from '../providers/predefinedSites/actions/setPredefinedSites';

const loginService = async (): Promise<any> => {
  try {
    const list = await apiRequest({
      purpose: LOAD_PREDEFINED_SITES,
      payload: {
        method: 'GET',
        data: undefined,
      },
    });
    setPredefinedSites(list);
  } catch (error) {
    console.log('error', error);
  }
};

export default loginService;
