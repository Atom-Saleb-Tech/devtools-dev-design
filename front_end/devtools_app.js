// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './shell.js';
import './elements/elements-meta.js';
import './browser_debugger/browser_debugger-meta.js';
import * as Startup from './startup/startup.js';

Startup.RuntimeInstantiator.startApplication('devtools_app');
