import {IAction} from '../../../core/packages/provider/IAction';
import {IPredefinedSite} from '../index';

export enum PredefinedSitesActions {
  SET_PREDEFINED_SITES = 'SET_PREDEFINED_SITES',
  SET_TEXT_TO_PREDEFINED_SITE = 'SET_TEXT_TO_PREDEFINED_SITE',
}

export type TSetPredefinedSitesAction = IAction<
  PredefinedSitesActions.SET_PREDEFINED_SITES,
  IPredefinedSite[]
>;
export type TSetTextToPredefinedSiteAction = IAction<
  PredefinedSitesActions.SET_TEXT_TO_PREDEFINED_SITE,
  IPredefinedSite
>;
