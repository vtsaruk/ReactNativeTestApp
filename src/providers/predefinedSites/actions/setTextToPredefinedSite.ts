import {predefinedSitesDispatch} from '../index';
import {PredefinedSitesActions} from './predefinedSitesActionTypes';
import {IPredefinedSite} from '../index';

const setTexToPredefinedSite = (predefinedSites: IPredefinedSite): void => {
  predefinedSitesDispatch({
    type: PredefinedSitesActions.SET_TEXT_TO_PREDEFINED_SITE,
    payload: predefinedSites,
  });
};

export default setTexToPredefinedSite;
