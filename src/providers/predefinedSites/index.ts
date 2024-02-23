import createProvider from '../../core/packages/provider/Provider';
import useReducer, {
  IPredefinedSiteProviderState,
  defaultState,
} from './reducer';

export interface IPredefinedSite {
  name: string;
  url: string;
  text: string[];
}

export const {
  Provider: PredefinedSitesProvider,
  useState: predefinedSitesUseState,
  useDispatch: usePredefinedSitesDispatch,
  getState: getPredefinedSitesState,
  dispatch: predefinedSitesDispatch,
  // @ts-ignore
} = createProvider<IPredefinedSiteProviderState>(useReducer, defaultState);

export const usePredefinedSites = (): IPredefinedSite[] =>
  predefinedSitesUseState().data;
