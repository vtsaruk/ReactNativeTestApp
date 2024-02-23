import {predefinedSitesDispatch} from '../index';
import {PredefinedSitesActions} from './predefinedSitesActionTypes';
import {IPredefinedSite} from '../index';

const setPredefinedSites = (predefinedSites: IPredefinedSite[]): void => {
  predefinedSitesDispatch({
    type: PredefinedSitesActions.SET_PREDEFINED_SITES,
    payload: predefinedSites,
  });
};

export default setPredefinedSites;
