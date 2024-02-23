import {IPredefinedSite} from './index';
import {
  PredefinedSitesActions,
  TSetPredefinedSitesAction,
  TSetTextToPredefinedSiteAction,
} from './actions/predefinedSitesActionTypes';

export type IPredefinedSiteProviderState = {
  data: IPredefinedSite[];
};

export const defaultState: IPredefinedSiteProviderState = {
  data: [],
};

export default (
  state: IPredefinedSiteProviderState,
  action: TSetPredefinedSitesAction | TSetTextToPredefinedSiteAction,
) => {
  const {type, payload} = action;
  switch (type) {
    case PredefinedSitesActions.SET_PREDEFINED_SITES: {
      const list = payload.map(item => ({...item, text: []}));
      return {...state, data: list};
    }
    case PredefinedSitesActions.SET_TEXT_TO_PREDEFINED_SITE: {
      if (!payload) {
        return;
      }
      const list = state.data.map((item: IPredefinedSite) => {
        if (item.url === payload.url) {
          return {...item, text: payload.text};
        }
        return item;
      });
      return {...state, data: list};
    }
    default: {
      return state;
    }
  }
};
