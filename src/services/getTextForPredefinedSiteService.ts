import setTextToPredefinedSite from '../providers/predefinedSites/actions/setTextToPredefinedSite';

export const INJECTED_JAVASCRIPT = `(function() {
    window.ReactNativeWebView.postMessage(
        JSON.stringify({text: [
            ...document.body.querySelectorAll("p,div,span,li")
          ]
          .filter(elm => elm.innerText.includes('©'))
          .map(elm => elm.innerText)
          .filter(text => /^©/.test(text))})
    );
  })();`;

const getTextForPredefinedSite =
  (site: string) => (event: {nativeEvent: {data: string}}) => {
    try {
      const result = JSON.parse(event.nativeEvent.data).text;
      if (result) {
        setTextToPredefinedSite({url: site, text: result, name: ''});
      }
    } catch (error) {
      console.log(error);
    }
  };

export default getTextForPredefinedSite;
