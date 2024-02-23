import React, {useEffect, useState} from 'react';
import WebView from 'react-native-webview';
import layoutHoc from '../../HOC/layoutHoc';
import {
  MainScreen,
  TitleScreen,
  SiteMenu,
  SiteItemMenu,
  WebViewBox,
  Footer,
  CopyrightInformation,
} from './styled';
import loadPredefinedSitesService from '../../services/loadPredefinedSitesService';
import getTextForPredefinedSiteService, {
  INJECTED_JAVASCRIPT,
} from '../../services/getTextForPredefinedSiteService';
import {usePredefinedSites} from '../../providers/predefinedSites/';

const Main = () => {
  const [site, setSite] = useState('');
  const siteList = usePredefinedSites();
  const {text} = siteList.find(item => item.url === site) || {text: []};

  useEffect(() => {
    loadPredefinedSitesService();
  }, []);

  return (
    <MainScreen>
      <TitleScreen>Main screen</TitleScreen>
      <SiteMenu>
        {siteList.map(item => (
          <SiteItemMenu
            isActive={item.url === site}
            key={item.name}
            onPress={() => setSite(item.url)}>
            {item.name}
          </SiteItemMenu>
        ))}
      </SiteMenu>
      <WebViewBox>
        {site && (
          <WebView
            source={{uri: site}}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{flex: 1}}
            injectedJavaScript={text.length ? '' : INJECTED_JAVASCRIPT}
            onMessage={getTextForPredefinedSiteService(site)}
          />
        )}
      </WebViewBox>
      <Footer>
        {text && text[0] && (
          <CopyrightInformation>{text[0]}</CopyrightInformation>
        )}
      </Footer>
    </MainScreen>
  );
};

export default layoutHoc(Main);
