/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict';

define([
  'sinon'
], function (sinon) {
  function requiresFocus(callback, done) {
    if (document.hasFocus && document.hasFocus()) {
      callback();
    } else {
      var message =
          'Cannot check for focus - document does not have focus.\n' +
          'If this is in PhantomJS, Travis-CI, Sauce Labs, or Opera, this is expected.\n' +
          'Otherwise, try focusing the test document instead of \n' +
          'another window or dev tools.';

      console.warn(message);
      if (done) {
        done();
      }
    }
  }

  function addFxaClientSpy(fxaClient) {
    // create spies that can be used to check which parameters
    // are passed to the FxaClient
    for (var key in fxaClient) {
      if (typeof fxaClient[key] === 'function') {
        try {
          sinon.spy(fxaClient, key);
        } catch (e) {
          console.error('error with spy: %s', String(e));
        }
      }
    }
  }

  function removeFxaClientSpy(fxaClient) {
    // return the client to its original state.
    for (var key in fxaClient) {
      if (typeof fxaClient[key] === 'function') {
        fxaClient[key].restore();
      }
    }
  }

  return {
    requiresFocus: requiresFocus,
    addFxaClientSpy: addFxaClientSpy,
    removeFxaClientSpy: removeFxaClientSpy
  };
});
