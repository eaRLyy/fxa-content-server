/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define([
  './intern'
], function (intern) {
  'use strict';

  intern.capabilities = {};
  intern.webdriver = {};
  intern.environments = [];
  intern.functionalSuites = [];
  intern.suites = [
    'tests/server/templates',
    'tests/server/routes',
    'tests/server/ver.json.js'
  ];

  return intern;
});
