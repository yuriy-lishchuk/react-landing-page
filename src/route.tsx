import React, { useContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import Manifesto from './pages/Manifesto';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

//layouts
import MainLayout from './layouts/MainLayout';

import GA from './utils/GoogleAnalytics';
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react';
import { MultiThemeContext } from './theme/MultiThemeProvider';

const instance = createInstance({
  urlBase: 'https://admin-516fb.web.app/',
  siteId: 2,
  disabled: false, // optional, false by default. Makes all tracking calls no-ops if set to true.
  // userId: 'undefined', // optional, default value: `undefined`.
  // trackerUrl: 'http://prysm.surge.sh//tracking.php', // optional, default value: `${urlBase}matomo.php`
  // srcUrl: 'http://prysm.surge.sh/tracking.js', // optional, default value: `${urlBase}matomo.js`
  heartBeat: {
    // optional, enabled by default
    active: true, // optional, default value: true
    seconds: 10, // optional, default value: `15
  },
  linkTracking: true, // optional, default value: true
  configurations: {
    // optional, default value: {}
    // any valid matomo configuration, all below are optional
    disableCookies: true,
    setSecureCookie: true,
    setRequestMethod: 'POST',
  },
});

const renderWithLayout = (Component: any, Layout: any) => (
  <Layout>{Component}</Layout>
);

export default function ConfigureRouter() {
  const { setThemeName } = useContext(MultiThemeContext);

  return process.env.NODE_ENV === 'production' ? (
    <BrowserRouter>
      <div>
        <MatomoProvider value={instance}>
          {GA.init() && <GA.RouteTracker />}
          <Route
            exact
            path="/"
            render={() => {
              setThemeName('normal');
              return renderWithLayout(<Home />, MainLayout);
            }}
          />
          <Route
            exact
            path="/manifesto/"
            render={() => {
              setThemeName('black');
              return renderWithLayout(<Manifesto />, MainLayout);
            }}
          />
        </MatomoProvider>
      </div>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <div>
        {GA.init() && <GA.RouteTracker />}
        <Route
          exact
          path="/"
          render={() => {
            setThemeName('normal');
            return renderWithLayout(<Home />, MainLayout);
          }}
        />
        <Route
          exact
          path="/manifesto/"
          render={() => {
            setThemeName('black');
            return renderWithLayout(<Manifesto />, MainLayout);
          }}
        />
        <Route
          exact
          path="/termsAndConditions/"
          render={() => {
            setThemeName('normal');
            return renderWithLayout(<TermsAndConditions />, MainLayout);
          }}
        />
        <Route
          exact
          path="/privacyPolicy/"
          render={() => {
            setThemeName('normal');
            return renderWithLayout(<PrivacyPolicy />, MainLayout);
          }}
        />
      </div>
    </BrowserRouter>
  );
}
