/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/* global window */

import { setCustomElements } from '@storybook/web-components';
import '../node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js';
import customElements from '../custom-elements.json';
import { versionInfo } from './versionInfo';
import { registerMgtComponents } from '../packages/mgt-components/dist/es6/registerMgtComponents';
import { defaultDocsPage } from './story-elements/defaultDocsPage';

import { addons } from '@storybook/preview-api';
import { CLIENTID, SETPROVIDER_EVENT, AUTH_PAGE } from './env';
import { Providers } from '../packages/mgt-element/dist/es6/providers/Providers';
import { LoginType, ProviderState } from '../packages/mgt-element/dist/es6/providers/IProvider';
import { MockProvider } from '../packages/mgt-element/dist/es6/mock/MockProvider';
import { Msal2Provider } from '../packages/providers/mgt-msal2-provider/dist/es6/Msal2Provider';
import './preview.css';

registerMgtComponents();

Providers.globalProvider = new MockProvider(true);
const channel = addons.getChannel();
channel.on(SETPROVIDER_EVENT, params => {
  if (params.state === ProviderState.SignedIn && params.name === 'MgtMockProvider') {
    Providers.globalProvider = new MockProvider(true);
  } else if (params.state === ProviderState.SignedIn && params.name === 'MgtMsal2Provider') {
    Providers.globalProvider = new Msal2Provider({
      clientId: CLIENTID,
      loginType: LoginType.Popup,
      redirectUri: `${window.location.origin}/${AUTH_PAGE}`
    });
  }
});

const setCustomElementsManifestWithOptions = (customElements, options) => {
  let { privateFields = true } = options;
  if (!privateFields) {
    customElements?.modules?.forEach(module => {
      module?.declarations?.forEach(declaration => {
        Object.keys(declaration).forEach(key => {
          if (Array.isArray(declaration[key])) {
            declaration[key] = declaration[key].filter(
              member => !member.privacy?.includes('private') && !member.privacy?.includes('protected')
            );
          }
        });
      });
    });
  }
  return setCustomElements(customElements);
};

setCustomElementsManifestWithOptions(customElements, { privateFields: false });

export const parameters = {
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true
    },
    canvas: {
      hidden: true
    }
  },
  docs: {
    page: defaultDocsPage,
    story: {
      inline: false,
      height: '500px'
    }
  },
  version: versionInfo,
  options: {
    storySort: {
      order: ['stories']
    },
    showPanel: false
  },
  html: {
    removeEmptyComments: true,
    transform: code => {
      return code.replace(/=""/g, '');
    }
  }
};

const req = require.context('../stories', true, /\.(js|mdx)$/);
// configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
