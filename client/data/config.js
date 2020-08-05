import Raven from 'raven-js';

//const sentry_key = 'cb55d4f05cd443ce82303222f77ef5e0';
//const sentry_app = '61499';
//export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;
export const sentry_url = 'https://06de955014044b018b7ee228feb20f87@o430421.ingest.sentry.io/5378925';


export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}

